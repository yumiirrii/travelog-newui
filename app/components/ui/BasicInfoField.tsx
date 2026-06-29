import { Travel } from "@/lib/validators/travel";
import { DataField } from "./DataField";

export const BasicInfoField = ({ basicInfo }: { basicInfo: Travel }) => {
    return (
        <div className="w-full flex flex-col gap-y-5">
            <DataField label="ID" value={String(basicInfo.id)} />
            <DataField
                label="TRAVEL_DATE"
                value={`${basicInfo.date_start} ~ ${basicInfo.date_end}`}
            />
            <DataField label="DESTINATION" value={basicInfo.destination} />
        </div>
    );
};
