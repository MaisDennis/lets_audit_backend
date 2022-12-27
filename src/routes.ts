import { Router } from 'express';
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
// -----------------------------------------------------------------------------
import { c_C as cComment_C } from './modules/comments/create/c_C';
import { d_C as dComment_C } from './modules/comments/delete/d_C';
import { l_C as lComment_C } from './modules/comments/list/l_C';
import { u_C as uComment_C } from './modules/comments/update/u_C';
import { l_C as lCommentsTotal_C } from './modules/comments/list_total/l_C';
// -----------------------------------------------------------------------------
import { c_C as cImage_C } from './modules/images/create/c_C';
import { l_C as lImage_C } from './modules/images/list/l_C';
import { d_C as dImage_C } from './modules/images/delete/d_C';
// -----------------------------------------------------------------------------
import { c_C as cProposal_C } from './modules/proposals/create/c_C';
import { d_C as dProposal_C } from './modules/proposals/delete/d_C';
import { l_C as lProposal_C } from './modules/proposals/list/l_C';
import { u_C as uProposal_C } from './modules/proposals/update/u_C';
import { l_C as lProposalByCreatedAt_C } from './modules/proposals/list_by_created_at/l_C';
// -----------------------------------------------------------------------------
import { c_C as cResponse_C } from './modules/responses/create/c_C';
import { d_C as dResponse_C } from './modules/responses/delete/d_C';
import { l_C as lResponse_C } from './modules/responses/list/l_C';
import { u_C as uResponse_C } from './modules/responses/update/u_C';
import { l_C as lResponseTotal_C } from './modules/responses/list_total/l_C';
// -----------------------------------------------------------------------------
import { c_C as cUser_C } from './modules/users/create/c_C';
import { d_C as dUser_C } from './modules/users/delete/d_C';
import { l_C as lUser_C } from './modules/users/list/l_C';
import { u_C as uUser_C } from './modules/users/update/u_C';
import { l_C as lWithEmailUser_C } from './modules/users/list_with_email/l_C';
import { u_C as uConnectToComments_C } from './modules/users/connect_to_comments/u_C';
import { d_C as dDisconnectToComments_C } from './modules/users/disconnect_to_comments/d_C';
import { u_C as uConnectToResponses_C } from './modules/users/connect_to_responses/u_C';
import { d_C as dDisconnectToResponses_C } from './modules/users/disconnect_to_responses/d_C';
import { u_C as uRelevanceToProposals_C } from './modules/users/relevance_to_proposals/u_C';
import { u_C as uUpvoteToProposals_C } from './modules/users/upvote_to_proposals/u_C';
import { d_C as dUpvoteToProposal_C } from './modules/users/upvote_to_proposals_disconnect/d_C'
import { u_C as uDownvoteToProposals_C } from './modules/users/downvote_to_proposals/u_C';
import { u_C as uTestToProposals_C } from './modules/users/test_to_proposals/u_C';
import { d_C as dTestToProposals_C } from './modules/users/test_to_proposals_disconnect/d_C';
// -----------------------------------------------------------------------------
const routes = Router();
// -----------------------------------------------------------------------------
const cComment = new cComment_C();
const lComment = new lComment_C();
const uComment = new uComment_C();
const dComment = new dComment_C();
const lCommentsTotal = new lCommentsTotal_C();
// -----------------------------------------------------------------------------
const cImage = new cImage_C();
const lImage = new lImage_C();
const dImage = new dImage_C();
// -----------------------------------------------------------------------------
const cProposal = new cProposal_C();
const lProposal = new lProposal_C();
const uProposal = new uProposal_C();
const dProposal = new dProposal_C();
const lProposalByCreatedAt = new lProposalByCreatedAt_C();
// -----------------------------------------------------------------------------
const cResponse = new cResponse_C();
const lResponse = new lResponse_C();
const uResponse = new uResponse_C();
const dResponse = new dResponse_C();
const lResponseTotal = new lResponseTotal_C();
// -----------------------------------------------------------------------------
const cUser = new cUser_C();
const lUser = new lUser_C();
const uUser = new uUser_C();
const dUser = new dUser_C();
const lWithEmailUser = new lWithEmailUser_C();
const uConnectToComments = new uConnectToComments_C();
const dDisconnectToComments = new dDisconnectToComments_C();
const uConnectToResponses = new uConnectToResponses_C();
const dDisconnectToResponses = new dDisconnectToResponses_C();
const uRelevanceToProposals = new uRelevanceToProposals_C();
const uUpvoteToProposals = new uUpvoteToProposals_C();
const dUpvoteToProposals = new dUpvoteToProposal_C();
const uDownvoteToProposals = new uDownvoteToProposals_C();
const uTestToProposals = new uTestToProposals_C();
const dTestToProposals = new dTestToProposals_C();
// -----------------------------------------------------------------------------
routes.post("/comments/", cComment.handle);
routes.get("/comments/:id", lComment.handle);
routes.put("/comments/:id", uComment.handle);
routes.delete("/comments/:id", dComment.handle);
routes.get("/comments/total/:id", lCommentsTotal.handle);
// -----------------------------------------------------------------------------
routes.post("/images/",  upload.single('image'), cImage.handle);
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
// -----------------------------------------------------------------------------
export { routes }