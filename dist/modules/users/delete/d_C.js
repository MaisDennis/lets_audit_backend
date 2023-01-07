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
exports.d_C = void 0;
// -----------------------------------------------------------------------------
const d_U_1 = require("./d_U");
class d_C {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            console.log(id);
            proceed();
            function proceed() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const d_Use = new d_U_1.D_U();
                        const result = yield d_Use.execute(id);
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
exports.d_C = d_C;
//# sourceMappingURL=d_C.js.map