"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const DeleteUserService_1 = require("../../services/UserServices/DeleteUserService");
class DeleteUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const userService = new DeleteUserService_1.DeleteUserService();
            const result = yield userService.execute({ id });
            res.status(200).send(result);
        });
    }
}
exports.DeleteUserController = DeleteUserController;
//# sourceMappingURL=DeleteUserController.js.map