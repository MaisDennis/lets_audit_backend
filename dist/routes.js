"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// -----------------------------------------------------------------------------
const c_C_1 = require("./modules/comments/create/c_C");
const d_C_1 = require("./modules/comments/delete/d_C");
const l_C_1 = require("./modules/comments/list/l_C");
const u_C_1 = require("./modules/comments/update/u_C");
const l_C_2 = require("./modules/comments/list_total/l_C");
// -----------------------------------------------------------------------------
const c_C_2 = require("./modules/images/create/c_C");
const l_C_3 = require("./modules/images/list/l_C");
const d_C_2 = require("./modules/images/delete/d_C");
// -----------------------------------------------------------------------------
const c_C_3 = require("./modules/proposals/create/c_C");
const d_C_3 = require("./modules/proposals/delete/d_C");
const l_C_4 = require("./modules/proposals/list/l_C");
const u_C_2 = require("./modules/proposals/update/u_C");
const l_C_5 = require("./modules/proposals/list_by_created_at/l_C");
// -----------------------------------------------------------------------------
const c_C_4 = require("./modules/responses/create/c_C");
const d_C_4 = require("./modules/responses/delete/d_C");
const l_C_6 = require("./modules/responses/list/l_C");
const u_C_3 = require("./modules/responses/update/u_C");
const l_C_7 = require("./modules/responses/list_total/l_C");
// -----------------------------------------------------------------------------
const c_C_5 = require("./modules/users/create/c_C");
const d_C_5 = require("./modules/users/delete/d_C");
const l_C_8 = require("./modules/users/list/l_C");
const u_C_4 = require("./modules/users/update/u_C");
const l_C_9 = require("./modules/users/list_with_email/l_C");
const u_C_5 = require("./modules/users/connect_to_comments/u_C");
const d_C_6 = require("./modules/users/disconnect_to_comments/d_C");
const u_C_6 = require("./modules/users/connect_to_responses/u_C");
const d_C_7 = require("./modules/users/disconnect_to_responses/d_C");
const u_C_7 = require("./modules/users/relevance_to_proposals/u_C");
const u_C_8 = require("./modules/users/upvote_to_proposals/u_C");
const d_C_8 = require("./modules/users/upvote_to_proposals_disconnect/d_C");
const u_C_9 = require("./modules/users/test_to_proposals/u_C");
const d_C_9 = require("./modules/users/test_to_proposals_disconnect/d_C");
// -----------------------------------------------------------------------------
const routes = (0, express_1.Router)();
exports.routes = routes;
// -----------------------------------------------------------------------------
const cComment = new c_C_1.c_C();
const lComment = new l_C_1.l_C();
const uComment = new u_C_1.u_C();
const dComment = new d_C_1.d_C();
const lCommentsTotal = new l_C_2.l_C();
// -----------------------------------------------------------------------------
const cImage = new c_C_2.c_C();
const lImage = new l_C_3.l_C();
const dImage = new d_C_2.d_C();
// -----------------------------------------------------------------------------
const cProposal = new c_C_3.c_C();
const lProposal = new l_C_4.l_C();
const uProposal = new u_C_2.u_C();
const dProposal = new d_C_3.d_C();
const lProposalByCreatedAt = new l_C_5.l_C();
// -----------------------------------------------------------------------------
const cResponse = new c_C_4.c_C();
const lResponse = new l_C_6.l_C();
const uResponse = new u_C_3.u_C();
const dResponse = new d_C_4.d_C();
const lResponseTotal = new l_C_7.l_C();
// -----------------------------------------------------------------------------
const cUser = new c_C_5.c_C();
const lUser = new l_C_8.l_C();
const uUser = new u_C_4.u_C();
const dUser = new d_C_5.d_C();
const lWithEmailUser = new l_C_9.l_C();
const uConnectToComments = new u_C_5.u_C();
const dDisconnectToComments = new d_C_6.d_C();
const uConnectToResponses = new u_C_6.u_C();
const dDisconnectToResponses = new d_C_7.d_C();
const uRelevanceToProposals = new u_C_7.u_C();
const uUpvoteToProposals = new u_C_8.u_C();
const dUpvoteToProposals = new d_C_8.d_C();
const uTestToProposals = new u_C_9.u_C();
const dTestToProposals = new d_C_9.d_C();
// -----------------------------------------------------------------------------
routes.post("/comments/", cComment.handle);
routes.get("/comments/:id", lComment.handle);
routes.put("/comments/:id", uComment.handle);
routes.delete("/comments/:id", dComment.handle);
routes.get("/comments/total/:id", lCommentsTotal.handle);
// -----------------------------------------------------------------------------
routes.post("/images/", upload.single('image'), cImage.handle);
routes.get("/images/:key", lImage.handle);
routes.delete("/images/:id", dImage.handle);
// -----------------------------------------------------------------------------
routes.post("/proposals/", cProposal.handle);
routes.get("/proposals/", lProposal.handle);
routes.put("/proposals/:id", uProposal.handle);
routes.delete("/proposals/:id", dProposal.handle);
routes.get("/proposals/by_created_at/", lProposalByCreatedAt.handle);
// -----------------------------------------------------------------------------
routes.post("/responses/", cResponse.handle);
routes.get("/responses/:id", lResponse.handle);
routes.put("/responses/:id", uResponse.handle);
routes.delete("/responses/:id", dResponse.handle);
routes.get("/responses/total/:id", lResponseTotal.handle);
// -----------------------------------------------------------------------------
routes.post("/users/", cUser.handle);
routes.get("/users/:id", lUser.handle);
routes.put("/users/:id", uUser.handle);
routes.delete("/users/:id", dUser.handle);
routes.get("/users/email/:email", lWithEmailUser.handle);
routes.put("/users/connectToComments/:id", uConnectToComments.handle);
routes.delete("/users/disconnectToComments/:id", dDisconnectToComments.handle);
routes.put("/users/connectToResponses/:id", uConnectToResponses.handle);
routes.delete("/users/disconnectToResponses/:id", dDisconnectToResponses.handle);
routes.put("/users/relevanceToProposals/:id", uRelevanceToProposals.handle);
routes.put("/users/upvoteToProposals/:id", uUpvoteToProposals.handle);
// routes.put("/users/downvoteToProposals/:id", uDownvoteToProposals.handle);
routes.put("/users/testToProposals/:id", uTestToProposals.handle);
routes.delete("/users/upvoteToProposals/:id", dUpvoteToProposals.handle);
routes.delete("/users/testToProposals/:id", dTestToProposals.handle);
//# sourceMappingURL=routes.js.map