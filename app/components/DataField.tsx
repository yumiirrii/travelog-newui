type Props = {
    label: string;
    value: string;
};

export const DataField = ({ label, value }: Props) => {
    return (
        <div className="w-full flex flex-col gap-y-1">
            <label className="text-xs">{`${label}:`}</label>
            <p className="font-medium">{value}</p>
        </div>
    );
};
