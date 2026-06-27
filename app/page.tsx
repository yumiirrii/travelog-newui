import { TextLink } from "./components/ui/TextLink";

export default function Top() {
    return (
        <div
            className="min-h-screen bg-cover bg-center font-michroma flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/top-bg.png')" }}
        >
            <div className="flex flex-col items-center">
                <h1 className="text-[108px]/36 text-base-gray/80 [-webkit-text-stroke:4px_white]">
                    TRAVELOG
                </h1>
                <h2 className="text-5xl tracking-wide text-base-gray/80 [-webkit-text-stroke:2px_white]">
                    TRAVEL DATA ARCHIVE
                </h2>
                <div className="flex gap-x-20 pt-10">
                    <TextLink label={"> CREATE"} path="/create" />
                    <TextLink label={"> SEARCH"} path="/search" />
                </div>
            </div>
        </div>
    );
}
