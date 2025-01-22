"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkProductToStoreStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.linkProductToStoreStep = (0, workflows_sdk_1.createStep)("link-product-to-store", async ({ productId, storeId }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const linkArray = remoteLink.create({
        [utils_1.Modules.PRODUCT]: {
            product_id: productId,
        },
        [utils_1.Modules.STORE]: {
            store_id: storeId,
        },
    });
    return new workflows_sdk_1.StepResponse(linkArray, {
        productId,
        storeId
    });
}, async ({ productId, storeId }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    remoteLink.dismiss({
        [utils_1.Modules.PRODUCT]: {
            product_id: productId,
        },
        [utils_1.Modules.STORE]: {
            store_id: storeId,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1wcm9kdWN0LXRvLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9saW5rLXByb2R1Y3QtdG8tc3RvcmUvc3RlcHMvbGluay1wcm9kdWN0LXRvLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUM3RSxxREFBK0U7QUFPbEUsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLHVCQUF1QixFQUN2QixLQUFLLEVBQ0gsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUErQixFQUNuRCxFQUFFLFNBQVMsRUFBRSxFQUNiLEVBQUU7SUFDRixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakIsVUFBVSxFQUFFLFNBQVM7U0FDdEI7UUFDRCxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxPQUFPO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLDRCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ2pDLFNBQVM7UUFDVCxPQUFPO0tBQ1IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUNELEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQStCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzNFLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDLGVBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixVQUFVLEVBQUUsU0FBUztTQUN0QjtRQUNELENBQUMsZUFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsUUFBUSxFQUFFLE9BQU87U0FDbEI7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9