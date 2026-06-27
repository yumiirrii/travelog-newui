type Props = {
    left?: boolean;
    detailList?: boolean;
};

export const SeparatorLine = ({ left, detailList }: Props) => {
    return (
        <>
            {detailList ? (
                <p className="w-full text-lg bg-zinc-50 text-center">
                    -------------------------------------------
                </p>
            ) : (
                <p className={`w-full text-lg ${left ? "" : "text-center"}`}>
                    -----------------------------
                </p>
            )}
        </>
    );
};
