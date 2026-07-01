"use client";

import { calcDates } from "@/app/common/utils";
import { LogCard } from "@/app/components/LogCard";
import { LogFormModal } from "@/app/components/LogFormModal";
import { Menu } from "@/app/components/Menu";
import { BasicInfoField } from "@/app/components/ui/BasicInfoField";
import { Button } from "@/app/components/ui/Button";
import { DataField } from "@/app/components/ui/DataField";
import { PageTitle } from "@/app/components/ui/PageTitle";
import { SeparatorLine } from "@/app/components/ui/SeparatorLine";
import { TextButton } from "@/app/components/ui/TextButton";
import {
    CreateDetailForm,
    CreateLogSchema,
    UpdateDetailForm,
    UpdateLogSchema,
} from "@/lib/validators/log";
import { Travel } from "@/lib/validators/travel";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogPage() {
    // パスパラメータ
    const params = useParams();
    const travelId = Number(params.id);
    // クエリパラメータ
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    const router = useRouter();

    const [basicInfo, setBasicInfo] = useState<Travel>({
        id: 0,
        date_start: "",
        date_end: "",
        destination: "",
    });
    const [logs, setLogs] = useState<UpdateDetailForm[]>([]);
    const [dateList, setDateList] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [log, setLog] = useState<UpdateDetailForm | null>(null);
    const [modalDayLabel, setModalDayLabel] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);

    /** travel取得処理 */
    const fetchTravel = async (id: number) => {
        try {
            const res = await fetch(`http://localhost:3000/api/travel/${id}`, {
                cache: "no-store",
            });
            if (!res.ok) throw new Error("Failed to fetch travel");
            const fetchedTravel: Travel = await res.json();
            return fetchedTravel;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    /** log一覧取得処理 */
    const fetchLogs = async (id: number) => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/log?travel_id=${id}`,
                { cache: "no-store" },
            );
            if (!res.ok) throw new Error("Failed to fetch travel");
            const fetchedLogs: UpdateDetailForm[] = await res.json();
            return fetchedLogs;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    /** データ取得処理 */
    const getData = async (id: number) => {
        // travel取得
        const travel = await fetchTravel(id);
        if (travel) {
            // log一覧取得
            const logs = await fetchLogs(travel.id);
            setBasicInfo(travel);
            if (logs) {
                setLogs(logs);
                const total = logs.reduce(
                    (sum, log) => sum + Number(log.expense),
                    0,
                );
            } else {
                setLogs([]);
            }
            setDateList(calcDates(travel.date_start, travel.date_end));
        }
    };

    useEffect(() => {
        if (!isNaN(travelId)) getData(travelId);
    }, []);

    /** [ADD LOG]ボタン押下時処理 */
    const openModal = (
        date: string,
        log: UpdateDetailForm | null,
        dayLabel: string,
    ) => {
        setSelectedDate(date);
        setLog(log);
        setModalDayLabel(dayLabel);
    };

    /** Modal内 [SUBMIT]/[CANCEL]ボタン押下時処理 */
    const closeModal = async (
        detailForm: CreateDetailForm | UpdateDetailForm | null,
        isEdit: boolean,
    ) => {
        setErrors([]);
        if (detailForm) {
            const isSuccess = await handleSubmit(detailForm, isEdit);
            if (!isSuccess) return;
        }
        openModal("", null, modalDayLabel);
    };

    /** log登録/更新処理 */
    const handleSubmit = async (
        detailForm: CreateDetailForm | UpdateDetailForm,
        isEdit: boolean,
    ) => {
        if (isEdit) {
            // 更新
            const parsedForm = UpdateLogSchema.safeParse(detailForm);
            if (parsedForm.success) {
                try {
                    const res = await fetch("/api/log", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(parsedForm.data),
                    });
                    if (!res.ok) throw new Error("Failed to update Log");

                    await getData(travelId);
                } catch (error) {
                    console.error(error);
                }
                return true;
            } else {
                const messages = parsedForm.error.issues.map((i) => i.message);
                setErrors(messages);
                return false;
            }
        } else {
            // 新規
            const parsedForm = CreateLogSchema.safeParse(detailForm);
            if (parsedForm.success) {
                try {
                    const res = await fetch("/api/log", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(parsedForm.data),
                    });
                    if (!res.ok) throw new Error("Failed to insert Log");

                    await getData(travelId);
                } catch (error) {
                    console.error(error);
                }
                return true;
            } else {
                const messages = parsedForm.error.issues.map((i) => i.message);
                setErrors(messages);
                return false;
            }
        }
    };

    /** LogCard内 [DELETE]ボタン押下時処理 */
    const deleteLog = async (id: number) => {
        try {
            const res = await fetch("/api/log", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (!res.ok) throw new Error("Failed to delete Log");

            await getData(travelId);
        } catch (error) {
            console.error(error);
        }
    };

    /** [BACK]ボタン押下時処理 */
    const onBack = () => {
        if (from === "create") {
            router.push(`/create?id=${travelId}`);
        } else {
            router.push("/search");
        }
    };

    return (
        <div className="flex">
            <Menu />
            <div className="flex flex-col md:flex-row flex-1">
                <div className="bg-base-gray w-full md:w-[480px] min-h-screen md:h-full flex flex-col gap-y-5 px-7 md:px-15 py-10">
                    <TextButton state="back" onClick={onBack} />
                    <div className="flex flex-col items-center gap-y-5 ">
                        <PageTitle
                            title="DAILY LOG"
                            instruction={`> Click [ADD LOG] to create\ndetail log of each day.`}
                            left
                        />
                        <SeparatorLine left />

                        <BasicInfoField basicInfo={basicInfo} />

                        <SeparatorLine left />

                        <div className="w-full flex flex-col gap-y-5">
                            {dateList.map((date, index) => (
                                <div
                                    key={date}
                                    className="w-full flex jusify-between items-center"
                                >
                                    <DataField
                                        label={`DAY_0${index + 1}`}
                                        value={date}
                                    />
                                    <Button
                                        label="ADD LOG"
                                        onClick={() =>
                                            openModal(
                                                date,
                                                log,
                                                `DAY_0${index + 1}`,
                                            )
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="flex-1 md:min-w-[480px] md:scroll-x-auto bg-none md:bg-[url('/log-bg.png')] bg-cover bg-[center_30%]"
                    // style={{
                    //     backgroundImage: "url('/log-bg.png')",
                    //     backgroundSize: "cover",
                    //     backgroundPosition: "center 30%",
                    // }}
                >
                    {logs.map((log) => {
                        const dayIndex = dateList.findIndex(
                            (date) => date === log.date,
                        );

                        return (
                            <div key={log.id}>
                                <LogCard
                                    log={log}
                                    dayLabel={`D_0${dayIndex + 1}`}
                                    onDetail={openModal}
                                    onDelete={deleteLog}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedDate && basicInfo && (
                <LogFormModal
                    log={log}
                    travel_id={basicInfo.id}
                    date={selectedDate}
                    dayLabel={modalDayLabel}
                    errors={errors}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}
