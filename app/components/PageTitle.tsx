type Props = {
    title: string;
    instruction: string;
    left?: boolean;
};

export const PageTitle = ({ title, instruction, left }: Props) => {
    return (
        <div
            className={`w-full flex flex-col gap-y-2 ${left ? "items-start" : "items-center"}`}
        >
            <p className="font-michroma text-[40px] [-webkit-text-stroke:1px_black]">
                {title}
            </p>
            <p className="text-sm font-medium whitespace-pre-wrap">
                {instruction}
            </p>
        </div>
    );
};
