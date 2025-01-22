"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const Organization = utils_1.model.define("organization", {
    id: utils_1.model.id().primaryKey(),
    org: utils_1.model.text(),
    storeId: utils_1.model.array()
});
exports.default = Organization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvb3JnYW5pemF0aW9uL21vZGVscy9vcmdhbml6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxZQUFZLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDaEQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsR0FBRyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDakIsT0FBTyxFQUFFLGFBQUssQ0FBQyxLQUFLLEVBQUU7Q0FDdkIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsWUFBWSxDQUFDIn0=