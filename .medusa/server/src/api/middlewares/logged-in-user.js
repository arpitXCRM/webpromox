"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLoggedInUser = registerLoggedInUser;
const utils_1 = require("@medusajs/framework/utils");
async function registerLoggedInUser(req, res, next) {
    const userModuleService = req.scope.resolve(utils_1.Modules.USER);
    const userId = req.session?.auth_context?.actor_id;
    if (userId) {
        const user = await userModuleService.retrieveUser(userId);
        req.scope.register({
            loggedInUser: {
                resolve: () => user,
            },
        });
    }
    next();
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLXVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzL2xvZ2dlZC1pbi11c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUUsb0RBZUM7QUFsQkQscURBQW9EO0FBRzdDLEtBQUssVUFBVSxvQkFBb0IsQ0FBQyxHQUFrQixFQUFFLEdBQW1CLEVBQUUsSUFBd0I7SUFDMUcsTUFBTSxpQkFBaUIsR0FBdUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQzdELGVBQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQztJQUNGLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUNuRCxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDakIsWUFBWSxFQUFFO2dCQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUFBLENBQUMifQ==