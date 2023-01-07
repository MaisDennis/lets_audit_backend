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
exports.l_C = void 0;
// -----------------------------------------------------------------------------
const l_U_1 = require("./l_U");
class l_C {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            proceed();
            function proceed() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const l_Use = new l_U_1.L_U();
                        const result = yield l_Use.execute(id);
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
exports.l_C = l_C;
//# sourceMappingURL=l_C.js.map