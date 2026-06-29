import { BasicForm } from "@/lib/validators/travel";
import { FormField } from "./ui/FormField";
import { Input } from "./ui/Input";
import { ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {
    onSearch: (params: BasicForm) => void;
};

export const SearchBox = ({ onSearch }: Props) => {
    const [searchCon, setSearchCon] = useState<BasicForm>({
        date_start: "",
        date_end: "",
        destination: "",
    });

    const debouncedSearch = useDebouncedCallback(async (params: BasicForm) => {
        onSearch(params);
    }, 500);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updated = { ...searchCon, [name]: value || "" };
        setSearchCon(updated);

        debouncedSearch(updated);
    };

    return (
        <div className="flex gap-x-10">
            <FormField label="TRAVEL_DATE" error="">
                <div className="flex gap-x-3 items-center">
                    <Input
                        type="date"
                        name="date_start"
                        onChange={handleSearch}
                        value={searchCon?.date_start}
                        className="cursor-pointer"
                    />
                    <span className="font-medium">~</span>
                    <Input
                        type="date"
                        name="date_end"
                        onChange={handleSearch}
                        value={searchCon?.date_end}
                        className="cursor-pointer"
                    />
                </div>
            </FormField>
            <FormField label="DESTINATION" error="">
                <Input
                    type="text"
                    name="destination"
                    onChange={handleSearch}
                    value={searchCon?.destination}
                />
            </FormField>
        </div>
    );
};
