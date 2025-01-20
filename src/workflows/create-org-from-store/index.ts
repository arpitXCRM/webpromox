import { createWorkflow, transform, when, WorkflowResponse , createHook } from "@medusajs/framework/workflows-sdk"
import { StoreDTO } from "@medusajs/framework/types"
import { createOrgStep } from "./steps/create-org"
import { createRemoteLinkStep } from "@medusajs/medusa/core-flows"
import { Modules } from "@medusajs/framework/utils"
import { ORGSTORE_MODULE } from "../../modules/orgStore"

export type CreateCustomFromStoreWorkflowInput = {
  store: StoreDTO
  additional_data?: {
    org?: string
  }
}

export const createCustomFromOrgWorkflow = createWorkflow(
  "create-org-from-store",
  (input: CreateCustomFromStoreWorkflowInput) => {
    const orgid = transform(
      {
        input,
      },
      (data) => data.input.additional_data?.org || ""
    )

    const custom = createOrgStep({
      org: orgid,
    })


    when(({ custom }), ({ custom }) => custom !== undefined)
      .then(() => {
        createRemoteLinkStep([{
          [Modules.STORE]: {
            store_id: input.store.id,
          },
          [ORGSTORE_MODULE]: {
            org: custom.id,
          },
        }])
      })

    return new WorkflowResponse({
      custom,
    })
  }
)