"use client";

import { Button } from "../components/ui/Button";
import { Menu } from "../components/Menu";
import { PageTitle } from "../components/ui/PageTitle";
import { SeparatorLine } from "../components/ui/SeparatorLine";
import { TextButton } from "../components/ui/TextButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    BasicForm,
    BasicFormSchema,
    Travel,
    TravelSchema,
} from "@/lib/validators/travel";
import { TravelForm } from "../components/TravelForm";

export default function CreatePage() {
    const router = useRouter();
    // クエリパラメータ
    const searchParams = useSearchParams();
    const id = Number(searchParams.get("id"));
    const [basicForm, setBasicForm] = useState<BasicForm>({
        date_start: new Date().toISOString().split("T")[0],
        date_end: new Date().toISOString().split("T")[0],
        destination: "",
    });

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

    useEffect(() => {
        if (id) {
            const loadTravel = async () => {
                const travel = await fetchTravel(id);
                if (travel) {
                    setBasicForm({
                        date_start: travel.date_start,
                        date_end: travel.date_end,
                        destination: travel.destination,
                    });
                }
            };
            loadTravel();
        }
    }, [id]);

    const handleSubmit = async () => {
        // e.preventDefault();
        // update
        if (id) {
            const dataToValidate = { id, ...basicForm };
            const parsedForm = TravelSchema.safeParse(dataToValidate);
            if (parsedForm.success) {
                try {
                    const res = await fetch("/api/travel", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(parsedForm.data),
                    });
                    if (!res.ok) throw new Error("Failed to update Travel");
                    router.push(`/log/${id}?from=create`);
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.error(parsedForm.error);
            }
        } else {
            const parsedForm = BasicFormSchema.safeParse(basicForm);
            if (parsedForm.success) {
                try {
                    const res = await fetch("/api/travel", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(parsedForm.data),
                    });
                    if (!res.ok) throw new Error("Failed to insert Travel");
                    const data = await res.json();
                    router.push(`/log/${data.id}?from=create`);
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.error(parsedForm.error);
            }
        }
    };

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
        } catch (error) {
            console.error(error);
        }
    };

    const onBack = () => {
        if (id) {
            deleteTravel(id);
            console.log("deleted travel");
        }
        router.push("/");
    };

    return (
        <div className="flex">
            <Menu />
            <div
                className="min-h-screen flex flex-1"
                style={{
                    backgroundImage: "url('/create-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                }}
            >
                <div className="flex-1 bg-base-gray w-full h-fit flex flex-col gap-y-5 px-15 py-10">
                    <TextButton state="back" onClick={onBack} />
                    <div className="flex flex-col items-center gap-y-5">
                        <PageTitle
                            title="CREATE NEW RECORD"
                            instruction={`> Input basic travel information for creating a new record.`}
                        />
                        <SeparatorLine />
                        <TravelForm
                            basicForm={basicForm}
                            setBasicForm={setBasicForm}
                        />

                        <div className="pt-3">
                            <Button label="NEXT" large onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
