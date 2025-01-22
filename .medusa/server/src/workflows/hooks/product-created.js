"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_flows_1 = require("@medusajs/medusa/core-flows");
const link_product_to_store_1 = require("../link-product-to-store");
core_flows_1.createProductsWorkflow.hooks.productsCreated(async ({ products }, { container }) => {
    console.log("HOOK productsCreated", products[0].id);
    const loggedInUser = container.resolve("loggedInUser");
    await (0, link_product_to_store_1.linkProductToStoreWorkflow)(container).run({
        input: {
            productId: products[0].id,
            userId: loggedInUser.id,
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jcmVhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9ob29rcy9wcm9kdWN0LWNyZWF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBcUU7QUFFckUsb0VBQXNFO0FBRXRFLG1DQUFzQixDQUFDLEtBQUssQ0FBQyxlQUFlLENBQzFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUNULHNCQUFzQixFQUN0QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNmLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBWSxDQUFDO0lBRWxFLE1BQU0sSUFBQSxrREFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUMsS0FBSyxFQUFFO1lBQ0wsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxZQUFZLENBQUMsRUFBRTtTQUN4QjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUFDIn0=