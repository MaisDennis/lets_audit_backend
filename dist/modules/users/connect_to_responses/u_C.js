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
exports.u_C = void 0;
// -----------------------------------------------------------------------------
const u_U_1 = require("./u_U");
// -----------------------------------------------------------------------------
class u_C {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { id_response, } = request.body;
            proceed();
            function proceed() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const u_Use = new u_U_1.U_U();
                        const result = yield u_Use.execute({
                            id,
                            id_response,
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
exports.u_C = u_C;
//# sourceMappingURL=u_C.js.map