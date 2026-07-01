type Props = {
    left?: boolean;
    detailList?: boolean;
};

export const SeparatorLine = ({ left, detailList }: Props) => {
    return (
        <>
            {detailList ? (
                <p
                    className={`w-full text-xs md:text-sm ${left ? "" : "text-center"} ${detailList ? "bg-zinc-50" : ""}`}
                >
                    --------------------------------------------------
                </p>
            ) : (
                <p
                    className={`w-full text-xs md:text-sm ${left ? "" : "text-center"}`}
                >
                    ------------------------------------------
                </p>
            )}
        </>
    );
};
