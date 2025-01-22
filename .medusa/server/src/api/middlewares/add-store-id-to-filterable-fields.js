"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStoreIdToFilterableFields = addStoreIdToFilterableFields;
const utils_1 = require("@medusajs/framework/utils");
async function addStoreIdToFilterableFields(req, res, next) {
    const loggedInUser = req.scope.resolve("loggedInUser", { allowUnregistered: true });
    if (!loggedInUser) {
        return next();
    }
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: users } = await query.graph({
        entity: "user",
        fields: ["id", "email", "store.*"],
        filters: {
            id: [loggedInUser.id],
        },
    });
    const store = users[0].store;
    if (store) {
        if (!req.filterableFields) {
            req.filterableFields = {};
        }
        // set 'filterableFields' so then the 'maybeApplyLinkFilter' middleware will process it
        req.filterableFields["store_id"] = store.id;
    }
    return next();
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXN0b3JlLWlkLXRvLWZpbHRlcmFibGUtZmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9taWRkbGV3YXJlcy9hZGQtc3RvcmUtaWQtdG8tZmlsdGVyYWJsZS1maWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxvRUEwQkM7QUE3QkQscURBQXNFO0FBRy9ELEtBQUssVUFBVSw0QkFBNEIsQ0FBQyxHQUFrQixFQUFFLEdBQW1CLEVBQUUsSUFBd0I7SUFDbEgsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQVksQ0FBQztJQUM3RixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDeEMsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUNsQyxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1NBQ3RCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM3QixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNELHVGQUF1RjtRQUN2RixHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNoQixDQUFDO0FBQUEsQ0FBQyJ9