"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const create_store_1 = require("../../workflows/create-store");
async function POST(req, res) {
    console.log("REACHED");
    const { result } = await (0, create_store_1.createStoreWorkflow)(req.scope).run({
        input: req.body,
    });
    res.json({
        message: "Ok",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2NyZWF0ZS1zdG9yZS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLG9CQVlDO0FBakJELCtEQUdzQztBQUUvQixLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUFvQyxFQUNwQyxHQUFtQjtJQUduQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsa0NBQW1CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7S0FDaEIsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLE9BQU8sRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyJ9