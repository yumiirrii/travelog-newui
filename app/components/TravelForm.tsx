import { BasicForm } from "@/lib/validators/travel";
import { FormField } from "./ui/FormField";
import { Input } from "./ui/Input";
import { ChangeEvent } from "react";

type Props = {
    basicForm: BasicForm;
    setBasicForm: React.Dispatch<React.SetStateAction<BasicForm>>;
};

export const TravelForm = ({ basicForm, setBasicForm }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBasicForm({
            ...basicForm,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <FormField label="TRAVEL_DATE" error="">
                <div className="flex gap-x-3 items-center">
                    <Input
                        type="date"
                        name="date_start"
                        value={basicForm.date_start}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                    <span className="font-medium">~</span>
                    <Input
                        type="date"
                        name="date_end"
                        value={basicForm.date_end}
                        onChange={handleChange}
                        className="cursor-pointer"
                    />
                </div>
            </FormField>
            <FormField label="DESTINATION" error="">
                <Input
                    type="text"
                    name="destination"
                    value={basicForm.destination}
                    onChange={handleChange}
                />
            </FormField>
        </>
    );
};
