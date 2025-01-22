"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrgWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const organization_1 = require("../../modules/organization");
// import { createOrgStep } from "../create-org-from-store/steps/create-org"
const node_console_1 = require("node:console");
const utils_1 = require("@medusajs/framework/utils");
const createOrgStep = (0, workflows_sdk_1.createStep)("create-organization", async (data, { container }) => {
    if (!data.org) {
        return;
    }
    const orgModuleService = container.resolve(organization_1.ORGANIZATION_MODULE);
    const orgs = await orgModuleService.listOrganizations({ org: data.org });
    if (orgs.length > 0) {
        const stores = orgs?.flatMap((store) => store.storeId);
        await orgModuleService.updateOrganizations({
            selector: {
                org: data.org,
            }, data: { storeId: [...stores, data.storeId] }
        });
        return new workflows_sdk_1.StepResponse(stores, stores);
    }
    const orgData = {
        org: data.org,
        storeId: data.storeId ? [data.storeId] : []
    };
    //this createOrganizations method auto created at the time of migrations
    const newOrg = await orgModuleService.createOrganizations(orgData);
    return new workflows_sdk_1.StepResponse(newOrg, newOrg);
}, async (organization, { container }) => {
    const orgModuleService = container.resolve(organization_1.ORGANIZATION_MODULE);
    await orgModuleService.deleteOrganizations(organization.id);
});
const retrieveOrgStep = (0, workflows_sdk_1.createStep)("retrieve-organization", async (data, { container }) => {
    console.log({ data });
    if (!data.org) {
        return;
    }
    const orgModuleService = container.resolve(organization_1.ORGANIZATION_MODULE);
    //this createOrganizations method auto created at the time of migrations
    const custom = await orgModuleService.listOrganizations({ org: data.org });
    const stores = custom?.flatMap((store) => store.storeId);
    if (stores.includes(data.storeId)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.DUPLICATE_ERROR, "Store Id Already Exist");
    }
    return new workflows_sdk_1.StepResponse(custom, custom);
});
exports.createOrgWorkflow = (0, workflows_sdk_1.createWorkflow)("create-org", (input) => {
    retrieveOrgStep(input);
    const brand = createOrgStep(input);
    (0, node_console_1.log)({ brand });
    return new workflows_sdk_1.WorkflowResponse(brand);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1vcmctZnJvbS1zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxRUFLMEM7QUFFMUMsNkRBQWdFO0FBQ2hFLDRFQUE0RTtBQUM1RSwrQ0FBa0M7QUFDbEMscURBQXVEO0FBYXZELE1BQU0sYUFBYSxHQUFHLElBQUEsMEJBQVUsRUFDOUIscUJBQXFCLEVBQ3JCLEtBQUssRUFBRSxJQUE0QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUVwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2QsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUEwQixTQUFTLENBQUMsT0FBTyxDQUMvRCxrQ0FBbUIsQ0FDcEIsQ0FBQTtJQUNELE1BQU0sSUFBSSxHQUFRLE1BQU0sZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDN0UsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sTUFBTSxHQUFRLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzRCxNQUFNLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1lBQ3pDLFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7YUFDZCxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtTQUNoRCxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksNEJBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELE1BQU0sT0FBTyxHQUEyQjtRQUN0QyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUc7UUFDWixPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDM0MsQ0FBQTtJQUNELHdFQUF3RTtJQUN4RSxNQUFNLE1BQU0sR0FBRyxNQUFNLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRWxFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUN6QyxDQUFDLEVBQ0QsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEMsTUFBTSxnQkFBZ0IsR0FBMEIsU0FBUyxDQUFDLE9BQU8sQ0FDL0Qsa0NBQW1CLENBQ3BCLENBQUE7SUFFRCxNQUFNLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQ0YsQ0FBQTtBQUVELE1BQU0sZUFBZSxHQUFHLElBQUEsMEJBQVUsRUFDaEMsdUJBQXVCLEVBQ3ZCLEtBQUssRUFBRSxJQUE0QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2QsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUEwQixTQUFTLENBQUMsT0FBTyxDQUMvRCxrQ0FBbUIsQ0FDcEIsQ0FBQTtJQUVELHdFQUF3RTtJQUN4RSxNQUFNLE1BQU0sR0FBUSxNQUFNLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBRS9FLE1BQU0sTUFBTSxHQUFRLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUc3RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDbEMsTUFBTSxJQUFJLG1CQUFXLENBQUMsbUJBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQ0YsQ0FBQTtBQUVZLFFBQUEsaUJBQWlCLEdBQUcsSUFBQSw4QkFBYyxFQUM3QyxZQUFZLEVBQ1osQ0FBQyxLQUE2QixFQUFFLEVBQUU7SUFDaEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RCLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxJQUFBLGtCQUFHLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJLGdDQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FDRixDQUFBIn0=