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
exports.C_U = void 0;
const prismaClient_1 = require("../../..//database/prismaClient");
class C_U {
    execute({ id, message, id_user, }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('useCase');
            const result = yield prismaClient_1.prisma.proposals.create({
                data: {
                    id,
                    message,
                    id_user,
                }
            });
            return result;
        });
    }
}
exports.C_U = C_U;
//# sourceMappingURL=c_U.js.map