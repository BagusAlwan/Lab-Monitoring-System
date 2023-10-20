import express from 'express'; 
import { registerMemberRPLD, deleteMemberRPLD, verifyUser } from './membersRPLD.mjs';

const memberRouter = express.Router();

memberRouter.post('/register', registerMemberRPLD); 
memberRouter.delete('/delete', deleteMemberRPLD);
memberRouter.get('/verify/:name/:NIM', verifyUser);


export default memberRouter;