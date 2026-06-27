import { BasicInfoField } from "./ui/BasicInfoField";
import { Button } from "./ui/Button";
import { TextButton } from "./ui/TextButton";

const travel = {
    dateStart: "2026.03.05",
    dateEnd: "2026.03.07",
    destination: "SEOUL",
};

export const TravelCard = () => {
    return (
        <div className="w-fit h-fit bg-zinc-50 p-5 flex flex-col gap-y-7">
            <BasicInfoField basicInfo={travel} />
            <div className="w-full flex justify-between">
                <TextButton label="DELETE" state="edit" />
                <Button label="SEE LOG" />
            </div>
        </div>
    );
};
