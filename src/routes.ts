import { Router } from 'express';
// -----------------------------------------------------------------------------
import { c_C as cComment_C } from './modules/comments/create/c_C';
import { d_C as dComment_C } from './modules/comments/delete/d_C';
import { l_C as lComment_C } from './modules/comments/list/l_C';
import { u_C as uComment_C } from './modules/comments/update/u_C';
import { c_C as cProposal_C } from './modules/proposals/create/c_C';
import { d_C as dProposal_C } from './modules/proposals/delete/d_C';
import { l_C as lProposal_C } from './modules/proposals/list/l_C';
import { l_C as lWithCommentsProposal_C } from './modules/proposals/list_with_comments/l_C';
import { u_C as uProposal_C } from './modules/proposals/update/u_C';
import { c_C as cResponse_C } from './modules/responses/create/c_C';
import { d_C as dResponse_C } from './modules/responses/delete/d_C';
import { l_C as lResponse_C } from './modules/responses/list/l_C';
import { u_C as uResponse_C } from './modules/responses/update/u_C';
import { c_C as cUser_C } from './modules/users/create/c_C';
import { d_C as dUser_C } from './modules/users/delete/d_C';
import { l_C as lUser_C } from './modules/users/list/l_C';
import { u_C as uUser_C } from './modules/users/update/u_C';
// -----------------------------------------------------------------------------
const routes = Router();
// -----------------------------------------------------------------------------
const cComment = new cComment_C();
const lComment = new lComment_C();
const uComment = new uComment_C();
const dComment = new dComment_C();
// -----------------------------------------------------------------------------
const cProposal = new cProposal_C();
const lProposal = new lProposal_C();
const lWithCommentsProposal = new lWithCommentsProposal_C();
const uProposal = new uProposal_C();
const dProposal = new dProposal_C();
// -----------------------------------------------------------------------------
const cResponse = new cResponse_C();
const lResponse = new lResponse_C();

const uResponse = new uResponse_C();
const dResponse = new dResponse_C();
// -----------------------------------------------------------------------------
const cUser = new cUser_C();
const lUser = new lUser_C();
const uUser = new uUser_C();
const dUser = new dUser_C();
// -----------------------------------------------------------------------------
routes.post("/comments/", cComment.handle);
routes.get("/comments/", lComment.handle);
routes.put("/comments/:id", uComment.handle);
routes.delete("/comments/:id", dComment.handle);
// -----------------------------------------------------------------------------
routes.post("/proposals/", cProposal.handle);
routes.get("/proposals/", lProposal.handle);
routes.get("/proposals/comments/:id", lWithCommentsProposal.handle);
routes.put("/proposals/:id", uProposal.handle);
routes.delete("/proposals/:id", dProposal.handle);
// -----------------------------------------------------------------------------
routes.post("/responses/", cResponse.handle);
routes.get("/responses/", lResponse.handle);
routes.put("/responses/:id", uResponse.handle);
routes.delete("/responses/:id", dResponse.handle);
// -----------------------------------------------------------------------------
routes.post("/users/", cUser.handle);
routes.get("/users/", lUser.handle);
routes.put("/users/:id", uUser.handle);
routes.delete("/users/:id", dUser.handle);
// -----------------------------------------------------------------------------
export { routes }