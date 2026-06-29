import { Travel } from "@/lib/validators/travel";
import { BasicInfoField } from "./ui/BasicInfoField";
import { Button } from "./ui/Button";
import { TextButton } from "./ui/TextButton";

type Props = {
    travel: Travel;
    onDelete: (id: number) => void;
    onLog: (id: number) => void;
};

export const TravelCard = ({ travel, onDelete, onLog }: Props) => {
    return (
        <div className="w-fit h-[284px] bg-zinc-50 p-5 flex flex-col gap-y-7 justify-between">
            <BasicInfoField basicInfo={travel} />
            <div className="w-full flex justify-between">
                <TextButton
                    label="DELETE"
                    state="delete"
                    onClick={() => onDelete(travel.id)}
                />
                <Button label="SEE LOG" onClick={() => onLog(travel.id)} />
            </div>
        </div>
    );
};
