"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.createUserStep = (0, workflows_sdk_1.createStep)("create-user-step", async (input, { container }) => {
    const userService = container.resolve(utils_1.Modules.USER);
    const authService = container.resolve(utils_1.Modules.AUTH);
    // 1. create user
    const user = await userService.createUsers(input);
    // 2. create auth identity
    const registerResponse = await authService.register("emailpass", {
        body: {
            email: input.email,
            password: input.password,
        },
    });
    if (!registerResponse.authIdentity) {
        throw new Error("Authentication identity was not created");
    }
    // 3. attach auth identity to user
    await authService.updateAuthIdentities({
        id: registerResponse.authIdentity.id,
        app_metadata: {
            user_id: user.id,
        },
    });
    // 4. do we want to authenticate immediately? 
    //
    // const authenticationResponse = await authService.authenticate("emailpass", {
    //   body: {
    //     email: input.email,
    //     password: input.password,
    //   },
    // } as AuthenticationInput);
    return new workflows_sdk_1.StepResponse({ user, registerResponse }, user.id);
}, async (id, { container }) => {
    const userModuleService = container.resolve(utils_1.Modules.USER);
    await userModuleService.deleteUsers([id]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zdG9yZS9zdGVwcy9jcmVhdGUtdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkU7QUFFN0UscURBQW9EO0FBT3ZDLFFBQUEsY0FBYyxHQUFHLElBQUEsMEJBQVUsRUFDdEMsa0JBQWtCLEVBQ2xCLEtBQUssRUFBRSxLQUF1QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMvQyxNQUFNLFdBQVcsR0FBdUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsTUFBTSxXQUFXLEdBQXVCLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhFLGlCQUFpQjtJQUNqQixNQUFNLElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEQsMEJBQTBCO0lBQzFCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUMvRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQ3pCO0tBQ3FCLENBQUMsQ0FBQztJQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDSCxrQ0FBa0M7SUFDbEMsTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDckMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3BDLFlBQVksRUFBRTtZQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNqQjtLQUNGLENBQUMsQ0FBQztJQUVILDhDQUE4QztJQUM5QyxFQUFFO0lBQ0YsK0VBQStFO0lBQy9FLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLE9BQU87SUFDUCw2QkFBNkI7SUFFN0IsT0FBTyxJQUFJLDRCQUFZLENBQ3JCLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEVBQzFCLElBQUksQ0FBQyxFQUFFLENBQ1IsQ0FBQztBQUNKLENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNsQyxNQUFNLGlCQUFpQixHQUF1QixTQUFTLENBQUMsT0FBTyxDQUM3RCxlQUFPLENBQUMsSUFBSSxDQUNiLENBQUM7SUFFRixNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNGLENBQUMifQ==