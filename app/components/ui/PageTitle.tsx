type Props = {
    title: string;
    instruction: string;
    left?: boolean;
};

export const PageTitle = ({ title, instruction, left }: Props) => {
    return (
        <div
            className={`w-full flex flex-col gap-y-3 ${left ? "items-start" : "items-center"}`}
        >
            <p className="font-michroma text-4xl transition-colors text-nowrap glow-on-page-title">
                {title}
            </p>
            <p className="text-sm font-medium whitespace-pre-wrap">
                {instruction}
            </p>
        </div>
    );
};
