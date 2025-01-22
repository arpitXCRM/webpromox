"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const create_org_from_store_1 = require("../../workflows/create-org-from-store");
const POST = async (req, res) => {
    const { result } = await (0, create_org_from_store_1.createOrgWorkflow)(req.scope)
        .run({
        input: req.validatedBody,
    });
    res.json({ organization: result });
};
exports.POST = POST;
const GET = async (req, res) => {
    const query = req.scope.resolve("query");
    const { data: brands } = await query.graph({
        entity: "brand",
        fields: ["*", "products.*"],
    });
    res.json({ brands });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL29yZ2FuaXphdGlvbi9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJRSxpRkFFOEM7QUFPdkMsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFtRCxFQUNuRCxHQUFtQixFQUNuQixFQUFFO0lBRUYsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSx5Q0FBaUIsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2xELEdBQUcsQ0FBQztRQUNILEtBQUssRUFBRSxHQUFHLENBQUMsYUFBYTtLQUN6QixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFBO0FBWFksUUFBQSxJQUFJLFFBV2hCO0FBRU0sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFeEMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekMsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDO0tBQzVCLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQVpZLFFBQUEsR0FBRyxPQVlmIn0=