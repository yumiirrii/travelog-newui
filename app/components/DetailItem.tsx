import { Log } from "../common/consts";
import { TextButton } from "./TextButton";

type Props = {
    log: Log;
};

export const DetailItem = ({ log }: Props) => {
    return (
        <div className="w-full h-fit bg-zinc-50 flex gap-x-7 px-7 py-3 items-center">
            <div className="text-michroma text-xl [-webkit-text-stroke:1px_#275c8b]">
                D_01
            </div>
            <div className="flex flex-col gap-y-5">
                <div className="flex justify-between">
                    <p className="font-medium">{log.spot}</p>
                    <p>{log.category}</p>
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
