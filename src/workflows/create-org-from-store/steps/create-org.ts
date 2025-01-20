import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import StoreOrgModuleService from "../../../modules/orgStore/service"
import { ORGSTORE_MODULE } from "../../../modules/orgStore"

type CreateCustomOrgStepInput = {
  org?: string
}

export const createOrgStep = createStep(
  "create-custom",
  async (data: CreateCustomOrgStepInput, { container }) => {
    if (!data.org) {
      return
    }

    const orgModuleService: StoreOrgModuleService = container.resolve(
        ORGSTORE_MODULE
    )

    const custom = await orgModuleService.createCustoms(data)

    return new StepResponse(custom, custom)
  },
  async (custom, { container }) => {
    const orgModuleService: StoreOrgModuleService = container.resolve(
        ORGSTORE_MODULE
    )

    await orgModuleService.deleteCustoms(custom.id)
  }
)