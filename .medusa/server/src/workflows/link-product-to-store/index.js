"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkProductToStoreWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const link_product_to_store_1 = require("./steps/link-product-to-store");
const get_store_1 = require("./steps/get-store");
const utils_1 = require("@medusajs/framework/utils");
exports.linkProductToStoreWorkflow = (0, workflows_sdk_1.createWorkflow)("link-product-to-store", (input) => {
    const { store } = (0, get_store_1.getStoreStep)(input.userId);
    if (!store) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "store not found!");
    }
    const productStoreLinkArray = (0, link_product_to_store_1.linkProductToStoreStep)({
        productId: input.productId,
        storeId: store.id,
    });
    return new workflows_sdk_1.WorkflowResponse({
        productStoreLinkArray,
        store,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2xpbmstcHJvZHVjdC10by1zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFHNkM7QUFDM0MseUVBQXNFO0FBQ3RFLGlEQUFpRDtBQUNuRCxxREFBd0Q7QUFPekMsUUFBQSwwQkFBMEIsR0FBRyxJQUFBLDhCQUFjLEVBQ3RELHVCQUF1QixFQUN2QixDQUFDLEtBQThCLEVBQUUsRUFBRTtJQUVqQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSx3QkFBWSxFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU3QyxJQUFHLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDTCxNQUFNLElBQUksbUJBQVcsQ0FBQyxtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0lBQ0QsTUFBTSxxQkFBcUIsR0FBRyxJQUFBLDhDQUFzQixFQUFDO1FBQ25ELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUMxQixPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7S0FDbEIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQzFCLHFCQUFxQjtRQUNyQixLQUFLO0tBQ04sQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUNGLENBQUMifQ==