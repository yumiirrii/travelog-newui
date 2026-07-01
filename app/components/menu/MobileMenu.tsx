import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { TextButton } from "../ui/TextButton";
import { NAV_LINKS } from "../../common/consts";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="flex md:hidden items-center justify-between px-4 py-4 bg-zinc-50">
            {/* ロゴ */}
            <div
                className="font-michroma text-lg px-2 text-[#404040] hover:text-[#7a7a7a] [-webkit-text-stroke:0.5px_#404040] hover:[-webkit-text-stroke:1.5px_#7a7a7a] transition-colors cursor-pointer"
                style={{ "--glow-color": "#7a7a7a" } as React.CSSProperties}
            >
                <Link href="/" className="flex gap-1 items-center">
                    <GlobeAsiaAustraliaIcon className="w-6 h-6" />
                    <span>TRAVELOG</span>
                </Link>
            </div>
            {/* [menu]ボタン表示 */}
            <nav className="md:hidden">
                {!isOpen && (
                    <TextButton
                        label="menu"
                        state="edit"
                        onClick={toggleMenu}
                    />
                )}
            </nav>

            {isOpen && (
                <div className="fixed h-fit inset-0 z-50 bg-zinc-50">
                    <div className="flex justify-end pt-4 px-4">
                        {/* [close]ボタン */}
                        <TextButton
                            label="close"
                            state="delete"
                            onClick={toggleMenu}
                        />
                    </div>
                    {/* メニュー */}
                    <ul className="flex flex-col gap-y-5 px-8 pb-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.page}>
                                <Link href={link.path}>
                                    <TextButton
                                        state="menu"
                                        label={link.page}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
