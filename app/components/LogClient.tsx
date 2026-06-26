"use client";

import { Button } from "@/app/components/Button";
import { DataField } from "@/app/components/DataField";
import { DetailFormModal } from "@/app/components/DetailFormModal";
import { Menu } from "@/app/components/Menu";
import { PageTitle } from "@/app/components/PageTitle";
import { SeparatorLine } from "@/app/components/SeparatorLine";
import { TextButton } from "@/app/components/TextButton";
import { useState } from "react";
import { DetailItem } from "./DetailItem";
import { Log } from "../common/consts";

type Props = {
    id: string;
};

const logItem: Log = {
    date: "2026.03.05",
    category: "SIGHTSEEING",
    spot: "Seoul Tower",
    note: "Accessed by Bus#100. 5 min walk from ABC bus stop. Open until 22:00 except weekends.",
    expense: "10000",
};

export const LogClient = ({ id }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex">
            <Menu />
            <div
                className="min-h-screen flex flex-1"
                style={{
                    backgroundImage: "url('/log-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                }}
            >
                <div className="bg-base-gray w-fit h-full flex flex-col gap-y-5 px-15 py-10">
                    <TextButton state="back" />
                    <div className="flex flex-col items-center gap-y-5 ">
                        <PageTitle
                            title="DAILY LOG"
                            instruction={`> Click [ADD LOG] to create\ndetail log of each day.`}
                            left
                        />
                        <SeparatorLine />
                        <DataField label="ID" value={id} />
                        <DataField
                            label="TRAVEL_DATE"
                            value="2026.03.05 ~ 2026.03.07"
                        />
                        <DataField label="DESTINATION" value="Seoul" />
                        <SeparatorLine />
                        <div className="w-full flex jusify-between items-center">
                            <DataField label="DAY_01" value="2026.03.05" />
                            <Button label="ADD LOG" onClick={openModal} />
                        </div>
                        <div className="w-full flex jusify-between items-center">
                            <DataField label="DAY_02" value="2026.03.06" />
                            <Button label="ADD LOG" />
                        </div>
                        <div className="w-full flex jusify-between items-center">
                            <DataField label="DAY_03" value="2026.03.07" />
                            <Button label="ADD LOG" />
                        </div>
                    </div>
                </div>

                <DetailItem log={logItem} />
            </div>

            {isOpen && <DetailFormModal closeModal={closeModal} />}
        </div>
    );
};
