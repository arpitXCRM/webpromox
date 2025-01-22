"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrgStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const organization_1 = require("../../../modules/organization");
exports.createOrgStep = (0, workflows_sdk_1.createStep)("create-organization", async (data, { container }) => {
    console.log(data, "data");
    if (!data.org) {
        return;
    }
    const orgModuleService = container.resolve(organization_1.ORGANIZATION_MODULE);
    //this createOrganizations method auto created at the time of migrations
    const custom = await orgModuleService.createOrganizations(data);
    return new workflows_sdk_1.StepResponse(custom, custom);
}, async (custom, { container }) => {
    const orgModuleService = container.resolve(organization_1.ORGANIZATION_MODULE);
    await orgModuleService.deleteOrganizations(custom.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLW9yZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY3JlYXRlLW9yZy1mcm9tLXN0b3JlL3N0ZXBzL2NyZWF0ZS1vcmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRFO0FBRTVFLGdFQUFtRTtBQU90RCxRQUFBLGFBQWEsR0FBRyxJQUFBLDBCQUFVLEVBQ3JDLHFCQUFxQixFQUNyQixLQUFLLEVBQUUsSUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2QsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUEwQixTQUFTLENBQUMsT0FBTyxDQUMvRCxrQ0FBbUIsQ0FDcEIsQ0FBQTtJQUVELHdFQUF3RTtJQUN4RSxNQUFNLE1BQU0sR0FBRyxNQUFNLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBRS9ELE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUN6QyxDQUFDLEVBQ0QsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDOUIsTUFBTSxnQkFBZ0IsR0FBMEIsU0FBUyxDQUFDLE9BQU8sQ0FDL0Qsa0NBQW1CLENBQ3BCLENBQUE7SUFFRCxNQUFNLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUN2RCxDQUFDLENBQ0YsQ0FBQSJ9