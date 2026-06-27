import Link from "next/link";
import { NAV_LINKS } from "../common/consts";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import { TextButton } from "./ui/TextButton";

export const Menu = () => {
    return (
        <div className="w-[220px] h-screen bg-zinc-50 p-5 flex flex-col gap-y-7">
            <Link href="/">
                <div className="w-full h-32 bg-[#404040] hover:bg-[#7a7a7a] p-2 center text-zinc-50 [-webkit-text-stroke:0.5px_#fafafa] hover:[-webkit-text-stroke:1.5px_#fafafa] transition-colors">
                    <div className="flex gap-1 items-center justify-center">
                        <GlobeAsiaAustraliaIcon className="w-6 h-6" />
                        <span className="font-michroma ">TRAVELOG</span>
                    </div>
                </div>
            </Link>
            <ul className="flex flex-col gap-y-5 px-4">
                {NAV_LINKS.map((link) => (
                    <Link href={link.path} key={link.page}>
                        <TextButton state="menu" label={link.page} />
                    </Link>
                ))}
            </ul>
        </div>
    );
};
