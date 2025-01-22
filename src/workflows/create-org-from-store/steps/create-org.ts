import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import StoreOrgModuleService from "../../../modules/organization/service"
import { ORGANIZATION_MODULE } from "../../../modules/organization"

type CreateCustomOrgStepInput = {
  org: string,
  storeId: [],
}

export const createOrgStep = createStep(
  "create-organization",
  async (data:any, { container }) => {
    console.log(data,"data");
    if (!data.org) {
      return
    }

    const orgModuleService: StoreOrgModuleService = container.resolve(
      ORGANIZATION_MODULE
    )

    //this createOrganizations method auto created at the time of migrations
    const custom = await orgModuleService.createOrganizations(data)

    return new StepResponse(custom, custom)
  },
  async (custom, { container }) => {
    const orgModuleService: StoreOrgModuleService = container.resolve(
      ORGANIZATION_MODULE
    )

    await orgModuleService.deleteOrganizations(custom.id)
  }
)