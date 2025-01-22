"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoreWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const link_user_to_store_1 = require("./steps/link-user-to-store");
const create_user_1 = require("./steps/create-user");
const get_sales_channel_1 = require("./steps/get-sales-channel");
exports.createStoreWorkflow = (0, workflows_sdk_1.createWorkflow)("create-store", (input) => {
    const salesChannel = (0, get_sales_channel_1.getSalesChannelStep)();
    const stores = core_flows_1.createStoresWorkflow.runAsStep({
        input: {
            stores: [
                {
                    name: input.store_name,
                    supported_currencies: [{ currency_code: "usd", is_default: true }],
                    default_sales_channel_id: salesChannel.id
                },
            ],
        },
    });
    const store = stores[0];
    const productCreatedHook = (0, workflows_sdk_1.createHook)("storesCreated", { storeId: store.id });
    const { user, registerResponse } = (0, create_user_1.createUserStep)(input);
    const userStoreLinkArray = (0, link_user_to_store_1.linkUserToStoreStep)({ userId: user.id, storeId: store.id });
    return new workflows_sdk_1.WorkflowResponse({
        store,
        user,
        userStoreLinkArray,
        registerResponse,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFLNkM7QUFDM0MsNERBQXNGO0FBRXRGLG1FQUFpRTtBQUNqRSxxREFBcUQ7QUFDckQsaUVBQWdFO0FBVW5ELFFBQUEsbUJBQW1CLEdBQUcsSUFBQSw4QkFBYyxFQUMvQyxjQUFjLEVBQ2QsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFDMUIsTUFBTSxZQUFZLEdBQUcsSUFBQSx1Q0FBbUIsR0FBRSxDQUFDO0lBRTNDLE1BQU0sTUFBTSxHQUFHLGlDQUFvQixDQUFDLFNBQVMsQ0FBQztRQUM1QyxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVO29CQUN0QixvQkFBb0IsRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ2xFLHdCQUF3QixFQUFFLFlBQVksQ0FBQyxFQUFFO2lCQUMxQzthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLDBCQUFVLEVBQ25DLGVBQWUsRUFDZixFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQ3RCLENBQUE7SUFFQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBQSw0QkFBYyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpELE1BQU0sa0JBQWtCLEdBQUcsSUFBQSx3Q0FBbUIsRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV2RixPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsS0FBSztRQUNMLElBQUk7UUFDSixrQkFBa0I7UUFDbEIsZ0JBQWdCO0tBQ2pCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=