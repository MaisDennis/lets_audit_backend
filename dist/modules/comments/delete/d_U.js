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
const prismaClient_1 = require("../../..//database/prismaClient");
const { deleteFile } = require("../../../config/s3");
// -----------------------------------------------------------------------------
class D_U {
    execute(id, commentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prismaClient_1.prisma.comments.delete({
                where: {
                    id,
                }
            });
            if (result && commentData && commentData.id_image) {
                const imageResult = yield prismaClient_1.prisma.images.delete({
                    where: {
                        id: commentData.id_image,
                    }
                });
                if (imageResult && commentData.image.type === "FILE") {
                    const fileResult = yield deleteFile(commentData.image.file_url.slice(8));
                    return [result, imageResult, fileResult];
                }
                else {
                    return [result, imageResult];
                }
            }
            else {
                return result;
            }
        });
    }
}
exports.D_U = D_U;
//# sourceMappingURL=d_U.js.map