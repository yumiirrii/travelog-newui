import Link from "next/link";

type Props = {
    label: string;
    path: string;
};

export const TextLink = ({ label, path }: Props) => {
    return (
        <Link
            href={path}
            className="p-2 text-4xl text-base-blue [-webkit-text-stroke:2px_var(--color-base-blue)] hover:text-highlight-blue hover:[-webkit-text-stroke:2px_var(--color-highlight-blue)] transition-colors"
        >
            {label}
        </Link>
    );
};
