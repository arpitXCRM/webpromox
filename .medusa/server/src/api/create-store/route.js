"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const create_store_1 = require("../../workflows/create-store");
async function POST(req, res) {
    const { result } = await (0, create_store_1.createStoreWorkflow)(req.scope).run({
        input: req.body,
    });
    res.json({
        message: "Ok",
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2NyZWF0ZS1zdG9yZS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLG9CQVdDO0FBaEJELCtEQUdzQztBQUUvQixLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUFvQyxFQUNwQyxHQUFtQjtJQUduQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLGtDQUFtQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDMUQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJO0tBQ2hCLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztBQUNMLENBQUMifQ==