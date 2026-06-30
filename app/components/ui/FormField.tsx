type Props = {
    label: string;
    children: React.ReactNode;
    error?: string;
    detailForm?: boolean;
    column?: boolean;
};

export const FormField = ({
    label,
    children,
    error,
    detailForm,
    column,
}: Props) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div
                className={`flex gap-5 ${column ? "flex-col" : "flex-row items-center"}`}
            >
                <label
                    className={`${detailForm ? "w-20 text-sm" : "font-medium"}`}
                >{`${label}:`}</label>
                {children}
            </div>
            {/* {error && <p className="text-sm text-red-600/80">{error}</p>} */}
        </div>
    );
};
