"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkUserToStoreStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.linkUserToStoreStep = (0, workflows_sdk_1.createStep)("link-user-to-store", async ({ userId, storeId }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const linkArray = remoteLink.create({
        [utils_1.Modules.USER]: {
            user_id: userId,
        },
        [utils_1.Modules.STORE]: {
            store_id: storeId,
        },
    });
    return new workflows_sdk_1.StepResponse(linkArray, {
        userId,
        storeId,
    });
}, async ({ userId, storeId }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    remoteLink.dismiss({
        [utils_1.Modules.USER]: {
            user_id: userId,
        },
        [utils_1.Modules.STORE]: {
            store_id: storeId,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay11c2VyLXRvLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jcmVhdGUtc3RvcmUvc3RlcHMvbGluay11c2VyLXRvLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUM3RSxxREFBK0U7QUFPbEUsUUFBQSxtQkFBbUIsR0FBRyxJQUFBLDBCQUFVLEVBQzNDLG9CQUFvQixFQUNwQixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUE0QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNyRSxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELENBQUMsZUFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsUUFBUSxFQUFFLE9BQU87U0FDbEI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDakMsTUFBTTtRQUNOLE9BQU87S0FDUixDQUFDLENBQUM7QUFDTCxDQUFDLEVBQ0QsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBNEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDckUsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1RSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxPQUFPO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==