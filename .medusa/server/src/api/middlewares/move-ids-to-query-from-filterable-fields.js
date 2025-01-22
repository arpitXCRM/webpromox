"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveIdsToQueryFromFilterableFields = moveIdsToQueryFromFilterableFields;
async function moveIdsToQueryFromFilterableFields(req, res, next) {
    if (!req.filterableFields) {
        return next();
    }
    // do this, otherwise the 'filterableFields' will be overwritten in 
    // https://github.com/medusajs/medusa/blob/develop/packages/medusa/src/api/admin/products/middlewares.ts#L49
    if (req.filterableFields.id) {
        req.query["id"] = req.filterableFields.id;
    }
    else if (req.filterableFields.store_id) {
        req.query["id"] = req.filterableFields.store_id;
    }
    return next();
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS1pZHMtdG8tcXVlcnktZnJvbS1maWx0ZXJhYmxlLWZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvbW92ZS1pZHMtdG8tcXVlcnktZnJvbS1maWx0ZXJhYmxlLWZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1FLGdGQWNDO0FBZE0sS0FBSyxVQUFVLGtDQUFrQyxDQUFDLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxJQUF3QjtJQUN4SCxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLDRHQUE0RztJQUM1RyxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFjLENBQUM7SUFDeEQsQ0FBQztTQUFNLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQWtCLENBQUM7SUFDNUQsQ0FBQztJQUVELE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUFBLENBQUMifQ==