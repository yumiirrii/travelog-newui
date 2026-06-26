export const SeparatorLine = ({ left }: { left?: boolean }) => {
    return (
        <p className={`w-full text-lg ${left ? "" : "text-center"}`}>
            -----------------------------
        </p>
    );
};
