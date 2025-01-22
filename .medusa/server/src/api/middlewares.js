"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const logged_in_user_1 = require("./middlewares/logged-in-user");
const add_store_id_to_filterable_fields_1 = require("./middlewares/add-store-id-to-filterable-fields");
const framework_1 = require("@medusajs/framework");
const move_ids_to_query_from_filterable_fields_1 = require("./middlewares/move-ids-to-query-from-filterable-fields");
const validators_1 = require("./organization/validators");
exports.default = (0, medusa_1.defineMiddlewares)({
    routes: [
        {
            method: ["GET", "POST"],
            matcher: "/admin/*",
            middlewares: [logged_in_user_1.registerLoggedInUser],
        },
        {
            method: ["GET"],
            matcher: "/admin/products",
            middlewares: [
                add_store_id_to_filterable_fields_1.addStoreIdToFilterableFields,
                (0, framework_1.maybeApplyLinkFilter)({
                    entryPoint: "product_store",
                    resourceId: "product_id",
                    filterableField: "store_id",
                }),
                move_ids_to_query_from_filterable_fields_1.moveIdsToQueryFromFilterableFields,
            ],
        },
        {
            method: ["GET"],
            matcher: "/admin/orders",
            middlewares: [
                add_store_id_to_filterable_fields_1.addStoreIdToFilterableFields,
                (0, framework_1.maybeApplyLinkFilter)({
                    entryPoint: "order_store",
                    resourceId: "order_id",
                    filterableField: "store_id",
                }),
                move_ids_to_query_from_filterable_fields_1.moveIdsToQueryFromFilterableFields,
            ],
        },
        {
            method: ["GET"],
            matcher: "/admin/stores",
            middlewares: [
                add_store_id_to_filterable_fields_1.addStoreIdToFilterableFields,
                move_ids_to_query_from_filterable_fields_1.moveIdsToQueryFromFilterableFields,
            ],
        },
        {
            matcher: "/organization",
            method: "POST",
            middlewares: [
                (0, framework_1.validateAndTransformBody)(validators_1.PostCreateOrganization),
            ],
        },
        // {
        //   method: "POST",
        //   matcher: "/store/orgs",
        //   additionalDataValidator: {
        //     org: z.string().optional(),
        //   },
        // },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXFEO0FBQ3JELGlFQUFvRTtBQUNwRSx1R0FBK0Y7QUFDL0YsbURBQXFGO0FBQ3JGLHFIQUE0RztBQUU1RywwREFBa0U7QUFJbEUsa0JBQWUsSUFBQSwwQkFBaUIsRUFBQztJQUMvQixNQUFNLEVBQUU7UUFDTjtZQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDdkIsT0FBTyxFQUFFLFVBQVU7WUFDbkIsV0FBVyxFQUFFLENBQUMscUNBQW9CLENBQUM7U0FDcEM7UUFDRDtZQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNmLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFO2dCQUNYLGdFQUE0QjtnQkFDNUIsSUFBQSxnQ0FBb0IsRUFBQztvQkFDbkIsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLFVBQVUsRUFBRSxZQUFZO29CQUN4QixlQUFlLEVBQUUsVUFBVTtpQkFDNUIsQ0FBQztnQkFDRiw2RUFBa0M7YUFDbkM7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2YsT0FBTyxFQUFFLGVBQWU7WUFDeEIsV0FBVyxFQUFFO2dCQUNYLGdFQUE0QjtnQkFDNUIsSUFBQSxnQ0FBb0IsRUFBQztvQkFDbkIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixlQUFlLEVBQUUsVUFBVTtpQkFDNUIsQ0FBQztnQkFDRiw2RUFBa0M7YUFDbkM7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2YsT0FBTyxFQUFFLGVBQWU7WUFDeEIsV0FBVyxFQUFFO2dCQUNYLGdFQUE0QjtnQkFDNUIsNkVBQWtDO2FBQ25DO1NBQ0Y7UUFDQTtZQUNPLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFO2dCQUNYLElBQUEsb0NBQXdCLEVBQUMsbUNBQXNCLENBQUM7YUFDakQ7U0FDRjtRQUNQLElBQUk7UUFDSixvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQixrQ0FBa0M7UUFDbEMsT0FBTztRQUNQLEtBQUs7S0FDTjtDQUNGLENBQUMsQ0FBQyJ9