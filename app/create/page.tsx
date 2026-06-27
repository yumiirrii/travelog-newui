import { FormField } from "../components/ui/FormField";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Menu } from "../components/Menu";
import { PageTitle } from "../components/ui/PageTitle";
import { SeparatorLine } from "../components/ui/SeparatorLine";
import { TextButton } from "../components/ui/TextButton";

export default function CreatePage() {
    return (
        <div className="flex">
            <Menu />
            <div
                className="min-h-screen flex flex-1"
                style={{
                    backgroundImage: "url('/create-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                }}
            >
                <div className="flex-1 bg-base-gray w-full h-fit flex flex-col gap-y-5 px-15 py-10">
                    <TextButton state="back" />
                    <div className="flex flex-col items-center gap-y-5">
                        <PageTitle
                            title="CREATE NEW RECORD"
                            instruction={`> Input basic travel information for creating a new record.`}
                        />
                        <SeparatorLine />
                        <FormField label="TRAVEL_DATE" error="">
                            <div className="flex gap-x-3 items-center">
                                <input
                                    type="date"
                                    className="bg-white p-2 border-[#626262] border-1 cursor-pointer"
                                />
                                <span className="font-medium">~</span>
                                <input
                                    type="date"
                                    className="bg-white p-2 border-[#626262] border-1 cursor-pointer"
                                />
                            </div>
                        </FormField>
                        <FormField label="DESTINATION" error="">
                            <Input type="text" />
                        </FormField>
                        <div className="pt-3">
                            <Button label="NEXT" large />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
