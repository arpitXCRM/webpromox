"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkOrderToStoreWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const get_store_1 = require("../link-product-to-store/steps/get-store");
const link_order_to_store_1 = require("./steps/link-order-to-store");
const utils_1 = require("@medusajs/framework/utils");
exports.linkOrderToStoreWorkflow = (0, workflows_sdk_1.createWorkflow)("link-order-to-store", (input) => {
    const { store } = (0, get_store_1.getStoreStep)(input.userId);
    if (!store) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "store not found!");
    }
    const orderStoreLinkArray = (0, link_order_to_store_1.linkOrderToStoreStep)({
        orderId: input.orderId,
        storeId: store.id,
    });
    return new workflows_sdk_1.WorkflowResponse({
        orderStoreLinkArray,
        store,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2xpbmstb3JkZXItdG8tc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBRzZDO0FBQzNDLHdFQUF3RTtBQUN4RSxxRUFBbUU7QUFDckUscURBQXdEO0FBT3pDLFFBQUEsd0JBQXdCLEdBQUcsSUFBQSw4QkFBYyxFQUNwRCxxQkFBcUIsRUFDckIsQ0FBQyxLQUE0QixFQUFFLEVBQUU7SUFDL0IsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsd0JBQVksRUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsSUFBRyxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQ1gsTUFBTSxJQUFJLG1CQUFXLENBQUMsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUNELE1BQU0sbUJBQW1CLEdBQUcsSUFBQSwwQ0FBb0IsRUFBQztRQUMvQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO0tBQ2xCLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUMxQixtQkFBbUI7UUFDbkIsS0FBSztLQUNOLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=