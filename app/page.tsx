import { TextLink } from "./components/ui/TextLink";

export default function Top() {
    return (
        <div
            className="min-h-screen bg-cover bg-center font-michroma flex flex-col items-center justify-center md:overflow-x-auto overflow-hidden w-full top-bg"
            // style={{ backgroundImage: "url('/top-bg.png')" }}
        >
            <h1 className="text-[40px] md:text-[108px]/36 glow-on-title text-nowrap">
                TRAVELOG
            </h1>
            <h2 className="text-lg md:text-5xl md:tracking-wide glow-on-title text-nowrap">
                TRAVEL DATA ARCHIVE
            </h2>
            <div className="flex flex-col md:flex-row gap-x-20 pt-10">
                <TextLink label={"> CREATE"} path="/create" />
                <TextLink label={"> SEARCH"} path="/search" />
            </div>
        </div>
    );
}
