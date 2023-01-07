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
exports.U_U = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
class U_U {
    execute({ id, id_comment, }) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(id, id_comment)
            // check of user exists
            const check = yield prismaClient_1.prisma.users.findFirst({
                where: {
                    id,
                }
            });
            if (!check) {
                throw new Error('user does not exist.');
            }
            const result = yield prismaClient_1.prisma.users.update({
                where: {
                    id,
                },
                data: {
                    like_comment: {
                        create: [
                            {
                                comment: {
                                    connect: {
                                        id: id_comment,
                                    }
                                }
                            }
                        ]
                    }
                }
            });
            return result;
        });
    }
}
exports.U_U = U_U;
//# sourceMappingURL=u_U.js.map