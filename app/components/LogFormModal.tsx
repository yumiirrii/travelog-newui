import { CreateDetailForm, UpdateDetailForm } from "@/lib/validators/log";
import { CATEGORY_OPTIONS } from "../common/consts";
import { Button } from "./ui/Button";
import { FormField } from "./ui/FormField";
import { Input } from "./ui/Input";
import { PageTitle } from "./ui/PageTitle";
import { SeparatorLine } from "./ui/SeparatorLine";
import { TextButton } from "./ui/TextButton";
import { ChangeEvent, useState } from "react";

type Props = {
    log: UpdateDetailForm | null;
    travel_id: number;
    date: string;
    dayLabel: string;
    onClose: (
        detailForm: CreateDetailForm | UpdateDetailForm | null,
        isEdit: boolean,
    ) => void;
};

export const LogFormModal = ({
    log,
    travel_id,
    date,
    dayLabel,
    onClose,
}: Props) => {
    const isEdit: boolean = !!log; //log ? true : falseと同義;
    const [detailForm, setDetailForm] = useState<
        CreateDetailForm | UpdateDetailForm
    >(() =>
        isEdit && log
            ? {
                  id: Number(log.id),
                  date: log.date,
                  category: log.category,
                  spot: log.spot,
                  note: log.note,
                  expense: log.expense,
                  travel_id: Number(log.travel_id),
              }
            : {
                  date,
                  category: 1,
                  spot: "",
                  note: "",
                  expense: "",
                  travel_id,
              },
    );

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value, type } = e.target;
        setDetailForm((prev: any) => ({
            ...prev,
            [name]: type === "radio" ? Number(value) : value,
        }));
    };

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ backgroundImage: `url('/overlay.png')` }}
        >
            <div className="w-fit h-fit bg-zinc-50 flex flex-col gap-y-5 px-15 py-10 items-start mx-auto my-10">
                <PageTitle
                    title="DETAIL LOG"
                    instruction={`> Select category and input\ndetail of the spot you visited.`}
                    left
                />
                <SeparatorLine left />
                <div className="flex gap-x-2 items-center">
                    <p className="text-sm">{dayLabel}:</p>
                    <p className="font-medium text-lg">{date}</p>
                </div>
                <SeparatorLine left />

                <FormField label="CATEGORY" column detailForm>
                    <div className="flex flex-col font-medium pl-5">
                        {CATEGORY_OPTIONS.map((option) => (
                            <label className="flex gap-x-2" key={option.value}>
                                <input
                                    type="radio"
                                    name="category"
                                    checked={
                                        detailForm.category === option.value
                                    }
                                    onChange={handleChange}
                                    value={option.value}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </FormField>
                <FormField label="SPOT" detailForm>
                    <Input
                        type="text"
                        name="spot"
                        value={detailForm.spot}
                        onChange={handleChange}
                    />
                </FormField>
                <FormField label="NOTE" detailForm>
                    <textarea
                        className="w-[360px] bg-white p-2 border-[#626262] border-1"
                        rows={3}
                        name="note"
                        value={detailForm.note}
                        onChange={handleChange}
                    />
                </FormField>
                <FormField label="EXPENSE" detailForm>
                    <Input
                        type="text"
                        name="expense"
                        value={detailForm.expense}
                        onChange={handleChange}
                    />
                </FormField>
                <div className="w-full flex justify-center gap-x-10 pt-3">
                    <TextButton
                        label="CANCEL"
                        state="cancel"
                        onClick={() => onClose(null, isEdit)}
                    />
                    <Button
                        label="SUBMIT"
                        large
                        onClick={() => {
                            if (isEdit && log) {
                                onClose(
                                    {
                                        ...(detailForm as UpdateDetailForm),
                                        id: Number(log.id),
                                    },
                                    true,
                                );
                            } else {
                                onClose(detailForm, false);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
