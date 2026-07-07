import { UpdateDetailForm } from "@/lib/validators/log";
import { TextButton } from "./ui/TextButton";
import { convertToLabel } from "../common/utils";
import { SeparatorLine } from "./ui/SeparatorLine";

type Props = {
    log: UpdateDetailForm;
    dayLabel: string;
    onDetail: (
        date: string,
        log: UpdateDetailForm | null,
        dayLabel: string,
    ) => void;
    onDelete: (id: number) => void;
};

export const LogCard = ({ log, dayLabel, onDetail, onDelete }: Props) => {
    return (
        <>
            <div className="w-full h-fit bg-zinc-50 flex gap-x-4 md:gap-x-7 px-4 md:px-7 pt-3 items-center">
                <div className="font-michroma text-xs md:text-xl [-webkit-text-stroke:2px_#275c8b]">
                    {dayLabel}
                </div>
                <div className="flex flex-col gap-y-5 w-full">
                    <div className="flex justify-between items-center font-medium">
                        <p>{log.spot}</p>
                        <p className="text-sm text-white bg-base-blue px-1 ml-2">
                            {convertToLabel(log.category)}
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-sm">{log.note}</p>
                        <p className="text-xs">
                            {Number(log.expense).toLocaleString()}
                        </p>
                        <div className="w-full flex justify-end gap-x-5">
                            <TextButton
                                label={`> EDIT`}
                                state="edit"
                                onClick={() =>
                                    onDetail(log.date, log, dayLabel)
                                }
                            />
                            <TextButton
                                label={`> DELETE`}
                                state="delete"
                                onClick={() => onDelete(log.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SeparatorLine detailList />
        </>
    );
};
