import { z } from "zod"

export const PostCreateOrganization = z.object({
    org: z.string(),
    storeId: z.string(), 
});
