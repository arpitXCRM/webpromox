"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_flows_1 = require("@medusajs/medusa/core-flows");
const link_order_to_store_1 = require("../link-order-to-store");
core_flows_1.createOrdersWorkflow.hooks.orderCreated(async ({ order }, { container }) => {
    console.log("HOOK orderCreated", order);
    const loggedInUser = container.resolve("loggedInUser");
    await (0, link_order_to_store_1.linkOrderToStoreWorkflow)(container).run({
        input: {
            orderId: order.id,
            userId: loggedInUser.id,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvaG9va3Mvb3JkZXItY3JlYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDREQUFtRTtBQUVuRSxnRUFBa0U7QUFFbEUsaUNBQW9CLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBWSxDQUFDO0lBRWxFLE1BQU0sSUFBQSw4Q0FBd0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUMsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxZQUFZLENBQUMsRUFBRTtTQUN4QjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=