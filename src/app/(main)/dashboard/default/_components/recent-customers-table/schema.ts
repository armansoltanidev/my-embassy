import z from "zod";

export const recentCustomersSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  requested: z.string(),
  status: z.string(),
  billing: z.string(),
  createdAt: z.string(),
});

export type RecentCustomerRow = z.infer<typeof recentCustomersSchema>;
