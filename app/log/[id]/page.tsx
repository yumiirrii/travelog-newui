import { LogClient } from "@/app/components/LogClient";

export default async function LogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <LogClient id={id} />
        // <div className="flex">
        //     <Menu />
        //     <div
        //         className="min-h-screen flex flex-1"
        //         style={{
        //             backgroundImage: "url('/log-bg.png')",
        //             backgroundSize: "cover",
        //             backgroundPosition: "center right",
        //         }}
        //     >
        //         <div className="bg-base-gray w-fit h-full flex flex-col gap-y-5 px-15 py-10">
        //             <TextButton state="back" />
        //             <div className="flex flex-col items-center gap-y-5 ">
        //                 <PageTitle
        //                     title="DAILY LOG"
        //                     instruction={`> Click [ADD LOG] to create\ndetail log of each day.`}
        //                     left
        //                 />
        //                 <SeparatorLine />
        //                 <DataField label="ID" value={id} />
        //                 <DataField
        //                     label="TRAVEL_DATE"
        //                     value="2026.03.05 ~ 2026.03.07"
        //                 />
        //                 <DataField label="DESTINATION" value="Seoul" />
        //                 <SeparatorLine />
        //                 <div className="w-full flex jusify-between items-center">
        //                     <DataField label="DAY_01" value="2026.03.05" />
        //                     <Button label="ADDLOG" onClick={openModal} />
        //                 </div>
        //                 <div className="w-full flex jusify-between items-center">
        //                     <DataField label="DAY_02" value="2026.03.06" />
        //                     <Button label="ADDLOG" />
        //                 </div>
        //                 <div className="w-full flex jusify-between items-center">
        //                     <DataField label="DAY_03" value="2026.03.07" />
        //                     <Button label="ADDLOG" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {isOpen && <DetailFormModal />}
        // </div>
    );
}
