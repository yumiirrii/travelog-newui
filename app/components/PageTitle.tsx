type Props = {
    title: string;
    instruction: string;
};

export const PageTitle = ({ title, instruction }: Props) => {
    return (
        <div className="w-full flex flex-col gap-y-2 items-center">
            <p className="font-michroma text-[40px] [-webkit-text-stroke:1px_black]">
                {title}
            </p>
            <p className="text-sm font-medium">{instruction}</p>
        </div>
    );
};
