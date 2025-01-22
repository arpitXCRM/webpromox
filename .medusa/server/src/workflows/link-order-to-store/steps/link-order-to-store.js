"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkOrderToStoreStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.linkOrderToStoreStep = (0, workflows_sdk_1.createStep)("link-order-to-store", async ({ orderId, storeId }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const linkArray = remoteLink.create({
        [utils_1.Modules.ORDER]: {
            order_id: orderId,
        },
        [utils_1.Modules.STORE]: {
            store_id: storeId,
        },
    });
    return new workflows_sdk_1.StepResponse(linkArray, {
        orderId,
        storeId,
    });
}, async ({ orderId, storeId }, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    remoteLink.dismiss({
        [utils_1.Modules.ORDER]: {
            order_id: orderId,
        },
        [utils_1.Modules.STORE]: {
            store_id: storeId,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1vcmRlci10by1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvbGluay1vcmRlci10by1zdG9yZS9zdGVwcy9saW5rLW9yZGVyLXRvLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUM3RSxxREFBK0U7QUFPbEUsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDBCQUFVLEVBQzVDLHFCQUFxQixFQUNyQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUE2QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN2RSxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxlQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixRQUFRLEVBQUUsT0FBTztTQUNsQjtRQUNELENBQUMsZUFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsUUFBUSxFQUFFLE9BQU87U0FDbEI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksNEJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDakMsT0FBTztRQUNQLE9BQU87S0FDUixDQUFDLENBQUM7QUFDTCxDQUFDLEVBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDdkUsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1RSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUMsZUFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsUUFBUSxFQUFFLE9BQU87U0FDbEI7UUFDRCxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxPQUFPO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==