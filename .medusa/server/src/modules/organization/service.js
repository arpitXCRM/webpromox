"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const organization_1 = __importDefault(require("./models/organization"));
class OrganizationService extends (0, utils_1.MedusaService)({
    Organization: organization_1.default,
}) {
}
exports.default = OrganizationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL29yZ2FuaXphdGlvbi9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXlEO0FBQ3pELHlFQUFtRDtBQUVuRCxNQUFNLG1CQUFvQixTQUFRLElBQUEscUJBQWEsRUFBQztJQUM5QyxZQUFZLEVBQVosc0JBQVk7Q0FDYixDQUFDO0NBRUQ7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQSJ9