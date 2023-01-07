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
exports.c_C = void 0;
const uuid_1 = require("uuid");
// -----------------------------------------------------------------------------
const c_U_1 = require("./c_U");
class c_C {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_image = "image." + (0, uuid_1.v4)();
            const file = request.file;
            let id_user, type, url;
            if (file) {
                id_user = request.query.id_user;
                type = request.query.type;
            }
            else {
                id_user = request.body.params.id_user;
                type = request.body.params.type;
                url = request.body.params.url;
            }
            proceed();
            function proceed() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const c_Use = new c_U_1.C_U();
                        const result = yield c_Use.execute({
                            id: id_image,
                            file,
                            type,
                            url,
                            id_user: id_user,
                        });
                        return response.json(result);
                    }
                    catch (err) {
                        return response.status(400).json(err.message);
                    }
                });
            }
        });
    }
}
exports.c_C = c_C;
//# sourceMappingURL=c_C.js.map