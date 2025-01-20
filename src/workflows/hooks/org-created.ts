import { createStoresWorkflow } from "@medusajs/medusa/core-flows"
import { 
    createCustomFromOrgWorkflow, 
  CreateCustomFromStoreWorkflowInput,
} from "../create-org-from-store"

createStoresWorkflow.hooks.(
	async (hookData, { container }) => {
    await createCustomFromOrgWorkflow(container)
      .run({
        input: hookData as CreateCustomFromStoreWorkflowInput,
      })
	}
)