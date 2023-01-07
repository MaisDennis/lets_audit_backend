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
exports.L_U = void 0;
const s3_1 = require("../../../config/s3");
// -----------------------------------------------------------------------------
class L_U {
    execute(key) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(take)
            // const imageResult = await prisma.images.findFirst({
            //   where: {
            //     id,
            //   },
            // })
            // const key = imageResult.file_url.slice(8)
            // const key = "d689fa9385fca0b41ce3cd312db3ab7f"
            console.log(key);
            // const result = await listFile(key)
            // let image
            // result.Contents.map(r => {
            //   if(r.Key === key) image = r
            //   else image = null
            // })
            // return image;
            const readStream = (0, s3_1.getFileStream)(key);
            // console.log(readStream)
            return readStream;
            // readStream.pipe(res)
        });
    }
}
exports.L_U = L_U;
//# sourceMappingURL=l_U.js.map