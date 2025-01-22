import {
    createWorkflow,
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk";
  import { getStoreStep } from "../link-product-to-store/steps/get-store";
  import { linkOrderToStoreStep } from "./steps/link-order-to-store";
import { MedusaError } from "@medusajs/framework/utils";
  
  export type LinkOrderToStoreInput = {
    orderId: string;
    userId: string;
  };
  
  export const linkOrderToStoreWorkflow = createWorkflow(
    "link-order-to-store",
    (input: LinkOrderToStoreInput) => {
      const { store } = getStoreStep(input.userId);
      if(!store){
      throw new MedusaError(MedusaError.Types.INVALID_DATA,"store not found!")  
      }
      const orderStoreLinkArray = linkOrderToStoreStep({
        orderId: input.orderId,
        storeId: store.id,
      });
  
      return new WorkflowResponse({
        orderStoreLinkArray,
        store,
      });
    }
  );