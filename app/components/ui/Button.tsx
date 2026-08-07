type Props = {
    label: string;
    className?: string;
    large?: boolean;
    isLoading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
    label,
    className,
    large,
    isLoading,
    onClick,
}: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            style={{ "--glow-color": "#007aff" } as React.CSSProperties}
            className={`w-fit bg-zinc-200 text-nowrap ${large ? "px-8 py-3.5" : "px-5 py-3"}  cursor-pointer hover:bg-base-gray outline-offset-4 outline-white hover:outline-4 font-semibold text-sm text-base-blue glow-on-hover transition-colors ${className}`}
            disabled={isLoading}
        >
            {isLoading ? "LOADING..." : `${label}`}
        </button>
    );
};
