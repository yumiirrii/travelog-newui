"use client";

import { useEffect, useState } from "react";
import { Menu } from "../components/menu/Menu";
import { SearchBox } from "../components/SearchBox";
import { TravelCard } from "../components/TravelCard";
import { PageTitle } from "../components/ui/PageTitle";
import { SeparatorLine } from "../components/ui/SeparatorLine";
import { TextButton } from "../components/ui/TextButton";
import { BasicForm, Travel } from "@/lib/validators/travel";
import { useRouter } from "next/navigation";
import { UpdateDetailForm } from "@/lib/validators/log";

export default function SearchPage() {
    const [travels, setTravels] = useState<Travel[]>([]);
    const router = useRouter();

    /** travel一覧取得処理 */
    const fetchTravels = async () => {
        try {
            const res = await fetch(`/api/travel`, {
                cache: "no-store",
            });
            if (!res.ok) throw new Error("Failed to fetch travel");
            const fetchedTravels: Travel[] = await res.json();
            setTravels(fetchedTravels);
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    /** log一覧取得処理 */
    const fetchLogs = async (id: number) => {
        try {
            const res = await fetch(`/api/log?travel_id=${id}`, {
                cache: "no-store",
            });
            if (!res.ok) throw new Error("Failed to fetch travel");
            const fetchedLogs: UpdateDetailForm[] = await res.json();
            return fetchedLogs;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    /** log削除処理 */
    const deleteLog = async (travelId: number) => {
        const fetchedLogs = await fetchLogs(travelId);
        if (fetchedLogs) {
            for (const log of fetchedLogs) {
                try {
                    const res = await fetch("/api/log", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id: log.id }),
                    });
                    if (!res.ok) throw new Error("Failed to delete Log");
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };

    /** travel削除処理 */
    const deleteTravel = async (id: number) => {
        try {
            const res = await fetch("/api/travel", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (!res.ok) throw new Error("Failed to delete Travel");

            await fetchTravels();
        } catch (error) {
            console.error(error);
        }
    };

    /** [DELETE]ボタン押下時処理 */
    const deleteItem = async (id: number) => {
        // log削除
        await deleteLog(id);
        // travel削除
        await deleteTravel(id);
    };

    /** [SEE LOG]ボタン押下時処理 */
    const handleDetail = async (id: number) => {
        router.push(`/log/${id}`);
    };

    /** 検索処理 */
    const fetchSearchTravel = async (params: BasicForm) => {
        try {
            const newParams = new URLSearchParams();
            if (params.date_start)
                newParams.append("date_start", params.date_start);
            if (params.date_end) newParams.append("date_end", params.date_end);
            if (params.destination)
                newParams.append("destination", params.destination);
            const res = await fetch(
                `/api/travel/search?${newParams.toString()}`,
                { cache: "no-store" },
            );
            if (!res.ok) throw new Error("Failed to fetch travel");
            const fetchedTravels = await res.json();
            setTravels(fetchedTravels);
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        fetchTravels();
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <Menu />

            <div className="flex-1 bg-base-gray flex flex-col gap-y-5 px-7 md:px-15 py-10 min-h-screen">
                <TextButton state="back" onClick={() => router.push("/")} />

                <div className="flex flex-col gap-y-5 items-center">
                    <PageTitle
                        title="LOG ARCHIVES"
                        instruction="> Search and find the log from archives."
                    />
                    <SeparatorLine />

                    {/* 検索エリア */}
                    <SearchBox onSearch={fetchSearchTravel} />

                    <SeparatorLine />

                    {/* 一覧エリア */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {travels.map((travel) => (
                            <TravelCard
                                key={travel.id}
                                travel={travel}
                                onDelete={deleteItem}
                                onLog={handleDetail}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
