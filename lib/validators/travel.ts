import { z } from "zod";

export const TravelSchema = z.object({
    id: z.number(),
    date_start: z.string(),
    date_end: z.string(),
    destination: z.string(),
});

export const BasicFormSchema = TravelSchema.omit({ id: true });
export type BasicForm = z.infer<typeof BasicFormSchema>;
export type Travel = z.infer<typeof TravelSchema>;
