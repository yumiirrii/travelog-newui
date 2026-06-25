type Props = {
    label?: string;
    state: "back";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TextButton = ({ label, state, className, onClick }: Props) => {
    const styles = {
        back: "text-base-blue hover:text-highlight-blue",
        secondary: "bg-[#F0FEFF] hover:bg-[#FCFFFF]",
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-fit px-2 cursor-pointer font-medium hover:font-bold ${styles[state]} ${className} transition-colors`}
        >
            {state === "back" && <span>{`< BACK`}</span>}
        </button>
    );
};
