import {
    createWorkflow,
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk";
  import { linkProductToStoreStep } from "./steps/link-product-to-store"
  import { getStoreStep } from "./steps/get-store";
import { MedusaError } from "@medusajs/framework/utils";
  
  export type LinkProductToStoreInput = {
    productId: string;
    userId: string;
  };
  
  export const linkProductToStoreWorkflow = createWorkflow(
    "link-product-to-store",
    (input: LinkProductToStoreInput) => {
  
      const { store } = getStoreStep(input.userId);
  
      if(!store){
            throw new MedusaError(MedusaError.Types.INVALID_DATA,"store not found!")  
      }
      const productStoreLinkArray = linkProductToStoreStep({
        productId: input.productId,
        storeId: store.id,
      });
  
      return new WorkflowResponse({
        productStoreLinkArray,
        store,
      });
    }
  );