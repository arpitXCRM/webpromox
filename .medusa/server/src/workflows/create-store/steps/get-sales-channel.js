"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalesChannelStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.getSalesChannelStep = (0, workflows_sdk_1.createStep)("get-sales-channel", async (_input, { container }) => {
    const salesChannelService = container.resolve(utils_1.Modules.SALES_CHANNEL);
    let [salesChannel] = await salesChannelService.listSalesChannels({}, { take: 1 });
    return new workflows_sdk_1.StepResponse(salesChannel);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNhbGVzLWNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zdG9yZS9zdGVwcy9nZXQtc2FsZXMtY2hhbm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFDN0UscURBQW9EO0FBR3ZDLFFBQUEsbUJBQW1CLEdBQUcsSUFBQSwwQkFBVSxFQUMzQyxtQkFBbUIsRUFDbkIsS0FBSyxFQUFFLE1BQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEMsTUFBTSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUMzQyxlQUFPLENBQUMsYUFBYSxDQUN0QixDQUFDO0lBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sbUJBQW1CLENBQUMsaUJBQWlCLENBQzlELEVBQUUsRUFDRixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FDWixDQUFDO0lBRUYsT0FBTyxJQUFJLDRCQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUNGLENBQUMifQ==