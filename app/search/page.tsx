import { Menu } from "../components/Menu";
import { TravelCard } from "../components/TravelCard";
import { FormField } from "../components/ui/FormField";
import { Input } from "../components/ui/Input";
import { PageTitle } from "../components/ui/PageTitle";
import { SeparatorLine } from "../components/ui/SeparatorLine";
import { TextButton } from "../components/ui/TextButton";

export default function SearchPage() {
    return (
        <div className="flex">
            <Menu />

            <div className="flex-1 bg-base-gray flex flex-col gap-y-5 px-15 py-10">
                <TextButton state="back" />

                <div className="flex flex-col gap-y-5 items-center">
                    <PageTitle
                        title="LOG ARCHIVES"
                        instruction="> Search and find the log from archives."
                    />
                    <SeparatorLine />

                    {/* 検索エリア */}
                    <div className="flex gap-x-10">
                        <FormField label="TRAVEL_DATE" error="">
                            <input
                                type="date"
                                className="bg-white p-2 border-[#626262] border-1 cursor-pointer"
                            />
                            ~
                            <input
                                type="date"
                                className="bg-white p-2 border-[#626262] border-1 cursor-pointer"
                            />
                        </FormField>
                        <FormField label="DESTINATION" error="">
                            <Input type="text" />
                        </FormField>
                    </div>
                    <SeparatorLine />

                    {/* 一覧エリア */}
                    {/* <div className="grid grid-cols-[repeat(auto-fill、260px)] gap-5"> */}
                    <div className="flex flex-wrap gap-5">
                        <TravelCard />
                        <TravelCard />
                        <TravelCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
