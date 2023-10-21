import express from 'express'; 
import { registerMemberRPLD, deleteMemberRPLD, verifyUser } from './membersRPLD.mjs';

const memberRouter = express.Router();

memberRouter.post('/register/RPLD', registerMemberRPLD); 
memberRouter.delete('/delete/RPLD', deleteMemberRPLD);
memberRouter.get('/verify/RPLD/:name/:NIM', verifyUser);


export default memberRouter;