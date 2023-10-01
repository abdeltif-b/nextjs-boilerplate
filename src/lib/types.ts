import { z } from "zod";

export const hotelSchema = z.object({
  id: z.number().optional(),
  name: z.string().trim().nonempty(),
  country: z.string().trim().nonempty(),
});
