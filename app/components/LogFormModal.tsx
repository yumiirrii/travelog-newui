import { CATEGORY_OPTIONS } from "../common/consts";
import { Button } from "./ui/Button";
import { FormField } from "./ui/FormField";
import { Input } from "./ui/Input";
import { PageTitle } from "./ui/PageTitle";
import { SeparatorLine } from "./ui/SeparatorLine";
import { TextButton } from "./ui/TextButton";

type Props = {
    closeModal: () => void;
};

export const LogFormModal = ({ closeModal }: Props) => {
    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ backgroundImage: `url('/overlay.png')` }}
        >
            <div className="w-fit h-fit bg-zinc-50 flex flex-col gap-y-5 px-15 py-10 items-start mx-auto my-10">
                <PageTitle
                    title="DETAIL LOG"
                    instruction={`> Select category and input\ndetail of the spot you visited.`}
                    left
                />
                <SeparatorLine left />
                <FormField label="CATEGORY" column detailForm>
                    <div className="flex flex-col font-medium pl-5">
                        {CATEGORY_OPTIONS.map((option) => (
                            <label className="flex gap-x-2" key={option.value}>
                                <input
                                    type="radio"
                                    name="category"
                                    value={option.value}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </FormField>
                <FormField label="SPOT" detailForm>
                    <Input />
                </FormField>
                <FormField label="NOTE" detailForm>
                    <textarea
                        className="w-[360px] bg-white p-2 border-[#626262] border-1"
                        rows={3}
                    />
                </FormField>
                <FormField label="EXPENSE" detailForm>
                    <Input />
                </FormField>
                <div className="w-full flex justify-center gap-x-10 pt-3">
                    <TextButton
                        label="CANCEL"
                        state="cancel"
                        onClick={closeModal}
                    />
                    <Button label="SUBMIT" large />
                </div>
            </div>
        </div>
    );
};
