import { TextLink } from "./components/ui/TextLink";

export default function Top() {
    return (
        <div
            className="min-h-screen bg-cover bg-center font-michroma flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/top-bg.png')" }}
        >
            <div className="flex flex-col items-center">
                <h1 className="text-[108px]/36 glow-on-title">TRAVELOG</h1>
                <h2 className="text-5xl tracking-wide glow-on-title">
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
