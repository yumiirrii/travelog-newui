import { Log } from "../common/consts";
import { TextButton } from "./ui/TextButton";

type Props = {
    log: Log;
};

export const LogCard = ({ log }: Props) => {
    return (
        <div className="w-full h-fit bg-zinc-50 flex gap-x-7 px-7 py-3 items-center">
            <div className="font-michroma text-xl [-webkit-text-stroke:2px_#275c8b]">
                D_01
            </div>
            <div className="flex flex-col gap-y-5">
                <div className="flex justify-between items-center font-medium">
                    <p>{log.spot}</p>
                    <p className="text-sm text-white bg-base-blue px-1">
                        {log.category}
                    </p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-sm">{log.note}</p>
                    <p className="text-xs">{log.expense}</p>
                    <div className="w-full flex justify-end gap-x-5">
                        <TextButton label={`> EDIT`} state="edit" />
                        <TextButton label={`> DELETE`} state="edit" />
                    </div>
                </div>
            </div>
        </div>
    );
};
