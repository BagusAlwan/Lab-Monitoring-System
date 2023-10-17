import express from 'express'; 
import { registerMember, deleteMember, verifyUser } from './membersDB.mjs';

const memberRouter = express.Router();

memberRouter.post('/register', registerMember); 
memberRouter.delete('/delete', deleteMember);
memberRouter.get('/verify/:name/:NIM', verifyUser);


export default memberRouter;