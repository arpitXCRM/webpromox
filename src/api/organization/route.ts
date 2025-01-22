import {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  import { 
    createOrgWorkflow
  } from "../../workflows/create-org-from-store"
import { z } from "zod"
import { PostCreateOrganization } from "./validators"
import OrganizationService from "../../modules/organization/service"

type PostAdminCreateOrganizationType = z.infer<typeof PostCreateOrganization>
  
  export const POST = async (
    req: MedusaRequest<PostAdminCreateOrganizationType>,
    res: MedusaResponse
  ) => {
    
    const { result } = await createOrgWorkflow(req.scope)
      .run({
        input: req.validatedBody,
      })
  
    res.json({ organization: result })
  }

  export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const query = req.scope.resolve("query")
    
    const { data: brands } = await query.graph({
      entity: "brand",
      fields: ["*", "products.*"],
    })
  
    res.json({ brands })
  }