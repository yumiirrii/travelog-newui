type Props = {
    label?: string;
    state: "back" | "menu" | "cancel" | "edit" | "delete";
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TextButton = ({ label, state, className, onClick }: Props) => {
    const styles = {
        back: "text-base-blue",
        menu: "",
        cancel: "text-base-blue text-sm",
        edit: "text-base-blue text-xs",
        delete: "text-base-blue text-xs",
    };

    const glowColors = {
        back: "#007aff",
        menu: "#7a7a7a",
        cancel: "#ff3b30", // 赤
        edit: "#34c759", // 緑
        delete: "#ff3b30", // 赤
    };

    return (
        <button
            type="button"
            onClick={onClick}
            style={{ "--glow-color": glowColors[state] } as React.CSSProperties}
            // className={`w-fit px-2 cursor-pointer font-medium hover:font-bold ${styles[state]} ${className} transition-colors`}
            className={`w-fit px-2 cursor-pointer font-medium ${styles[state]} ${className} transition-colors glow-on-hover`}
        >
            {state === "back" ? <span>{`< BACK`}</span> : <span>{label}</span>}
        </button>
    );
};
