"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.getStoreStep = (0, workflows_sdk_1.createStep)("get-store", async (userId, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: users } = await query.graph({
        entity: "user",
        fields: ["id", "email", "store.*"],
        filters: {
            id: [userId],
        },
    });
    const store = users[0].store;
    return new workflows_sdk_1.StepResponse({ store });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9saW5rLXByb2R1Y3QtdG8tc3RvcmUvc3RlcHMvZ2V0LXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2RTtBQUM3RSxxREFBc0U7QUFFekQsUUFBQSxZQUFZLEdBQUcsSUFBQSwwQkFBVSxFQUNwQyxXQUFXLEVBQ1gsS0FBSyxFQUFFLE1BQWMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDdEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN4QyxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ2xDLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNiO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUU3QixPQUFPLElBQUksNEJBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUNGLENBQUMifQ==