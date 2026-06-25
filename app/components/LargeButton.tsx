type Props = {
    label: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const LargeButton = ({ label, className, onClick }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-fit bg-zinc-200 px-8 py-3 cursor-pointer hover:bg-base-gray outline-offset-4 outline-white hover:outline-4 font-semibold hover:font-bold text-sm text-base-blue hover:text-highlight-blue transition-colors ${className}`}
        >
            {label}
        </button>
    );
};
