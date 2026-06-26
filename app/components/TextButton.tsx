type Props = {
    label?: string;
    state: "back" | "menu" | "cancel" | "edit";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TextButton = ({ label, state, className, onClick }: Props) => {
    const blueText = "text-base-blue hover:text-highlight-blue";
    const styles = {
        back: blueText,
        menu: "hover:text-highlight-blue",
        cancel: `${blueText} text-sm`,
        edit: `${blueText} text-xs`,
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-fit px-2 cursor-pointer font-medium hover:font-bold ${styles[state]} ${className} transition-colors`}
        >
            {state === "back" ? <span>{`< BACK`}</span> : <span>{label}</span>}
        </button>
    );
};
