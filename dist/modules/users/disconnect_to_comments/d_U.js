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
exports.D_U = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
class D_U {
    execute({ id, id_comment, }) {
        return __awaiter(this, void 0, void 0, function* () {
            // check of user exists
            const check = yield prismaClient_1.prisma.commentsOnUsers.findFirst({
                where: {
                    AND: [
                        {
                            id_comment,
                        },
                        {
                            id_user: id,
                        },
                    ]
                }
            });
            if (!check) {
                throw new Error('comment on user does not exist.');
            }
            const result = yield prismaClient_1.prisma.commentsOnUsers.delete({
                where: {
                    id_comment_id_user: {
                        id_comment,
                        id_user: id,
                    },
                }
            });
            return result;
        });
    }
}
exports.D_U = D_U;
//# sourceMappingURL=d_U.js.map