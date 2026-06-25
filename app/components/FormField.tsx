type Props = {
    label: string;
    error?: string;
    children: React.ReactNode;
};

export const FormField = ({ label, error, children }: Props) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-5 items-center">
                <label className="font-medium">{`${label}:`}</label>
                {children}
            </div>
            {error && <p className="text-sm text-red-600/80">{error}</p>}
        </div>
    );
};
