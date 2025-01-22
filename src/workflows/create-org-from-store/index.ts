
import {
  createStep,
  createWorkflow,
  WorkflowResponse,
  StepResponse
} from "@medusajs/framework/workflows-sdk"
import StoreOrgModuleService from "../../modules/organization/service"
import { ORGANIZATION_MODULE } from "../../modules/organization"
// import { createOrgStep } from "../create-org-from-store/steps/create-org"
import { log } from "node:console"
import { MedusaError } from "@medusajs/framework/utils"

type CreateOrgWorkflowInput = {
  org?: string,
  storeId?: string,
}

type CreateOrgWorkflowInput2 = {
  org?: string,
  storeId?: string[],
}


const createOrgStep = createStep(
  "create-organization",
  async (data: CreateOrgWorkflowInput, { container }) => {

    if (!data.org) {
      return
    }

    const orgModuleService: StoreOrgModuleService = container.resolve(
      ORGANIZATION_MODULE
    )
    const orgs: any = await orgModuleService.listOrganizations({ org: data.org })
    if (orgs.length > 0) {
      const stores: any = orgs?.flatMap((store) => store.storeId)
      await orgModuleService.updateOrganizations({
        selector: {
          org: data.org,
        }, data: { storeId: [...stores, data.storeId] }
      });
      return new StepResponse(stores, stores);
    }
    const orgData:CreateOrgWorkflowInput2 = {
      org:data.org,
      storeId:data.storeId ? [data.storeId] : []
    }
    //this createOrganizations method auto created at the time of migrations
    const newOrg = await orgModuleService.createOrganizations(orgData)

    return new StepResponse(newOrg, newOrg)
  },
  async (organization, { container }) => {
    const orgModuleService: StoreOrgModuleService = container.resolve(
      ORGANIZATION_MODULE
    )

    await orgModuleService.deleteOrganizations(organization.id)
  }
)

const retrieveOrgStep = createStep(
  "retrieve-organization",
  async (data: CreateOrgWorkflowInput, { container }) => {
    console.log({ data });

    if (!data.org) {
      return
    }

    const orgModuleService: StoreOrgModuleService = container.resolve(
      ORGANIZATION_MODULE
    )

    //this createOrganizations method auto created at the time of migrations
    const custom: any = await orgModuleService.listOrganizations({ org: data.org })

    const stores: any = custom?.flatMap((store) => store.storeId)


    if (stores.includes(data.storeId)) {
      throw new MedusaError(MedusaError.Types.DUPLICATE_ERROR, "Store Id Already Exist");
    }
    
    return new StepResponse(custom, custom)
  }
)

export const createOrgWorkflow = createWorkflow(
  "create-org",
  (input: CreateOrgWorkflowInput) => {
    retrieveOrgStep(input)
    const brand = createOrgStep(input)
    log({ brand });
    return new WorkflowResponse(brand)
  }
)