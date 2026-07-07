import { Travel } from "@/lib/validators/travel";
import { DataField } from "./DataField";
import { formatToDotDate } from "@/app/common/utils";

export const BasicInfoField = ({ basicInfo }: { basicInfo: Travel }) => {
    return (
        <div className="w-full flex flex-col gap-y-5">
            <DataField label="ID" value={String(basicInfo.id)} />
            <DataField
                label="TRAVEL_DATE"
                value={`${formatToDotDate(basicInfo.date_start)} ~ ${formatToDotDate(basicInfo.date_end)}`}
            />
            <DataField label="DESTINATION" value={basicInfo.destination} />
        </div>
    );
};
