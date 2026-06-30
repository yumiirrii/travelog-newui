import { z } from "zod";

export const TravelSchema = z.object({
    id: z.number(),
    date_start: z.string().min(1, "Start date is required."),
    date_end: z.string().min(1, "End date is required."),
    destination: z.string().min(1, "Destination is required."),
});

export const BasicFormSchema = TravelSchema.omit({ id: true });
export type BasicForm = z.infer<typeof BasicFormSchema>;
export type Travel = z.infer<typeof TravelSchema>;
