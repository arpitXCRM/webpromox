"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const organization_1 = __importDefault(require("../modules/organization"));
const store_1 = __importDefault(require("@medusajs/medusa/store"));
exports.default = (0, utils_1.defineLink)({ linkable: store_1.default.linkable.store,
    isList: true
}, organization_1.default.linkable.organization);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnLXN0b3JlLWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL29yZy1zdG9yZS1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFzRDtBQUN0RCwyRUFBMEM7QUFDMUMsbUVBQWdEO0FBRWhELGtCQUFlLElBQUEsa0JBQVUsRUFDdkIsRUFBQyxRQUFRLEVBQUMsZUFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLO0lBQ2xDLE1BQU0sRUFBQyxJQUFJO0NBQ1osRUFDRCxzQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQzNCLENBQUEifQ==