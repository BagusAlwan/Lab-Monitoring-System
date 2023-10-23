import express from 'express'; 
import { registerMemberRPLD, deleteMemberRPLD, verifyRPLDUser } from './membersRPLD.mjs';
import { registerMemberSC, deleteMemberSC, verifySCUser } from './membersSC.mjs';
import { registerMemberSKJ, deleteMemberSKJ, verifySKJUser } from './membersSKJ.mjs';
import { registerMemberAlgokom, deleteMemberAlgokom, verifyAlgokomUser } from './membersAlgokom.mjs';

const memberRouter = express.Router();

memberRouter.post('/register/RPLD', registerMemberRPLD); 
memberRouter.delete('/delete/RPLD', deleteMemberRPLD);
memberRouter.get('/verify/RPLD/:name/:NIM', verifyRPLDUser);

memberRouter.post('/register/SKJ', registerMemberSKJ); 
memberRouter.delete('/delete/SKJ', deleteMemberSKJ);
memberRouter.get('/verify/SKJ/:name/:NIM', verifySKJUser);

memberRouter.post('/register/SC', registerMemberSC); 
memberRouter.delete('/delete/SC', deleteMemberSC);
memberRouter.get('/verify/SC/:name/:NIM', verifySCUser);

memberRouter.post('/register/Algokom', registerMemberAlgokom); 
memberRouter.delete('/delete/Algokom', deleteMemberAlgokom);
memberRouter.get('/verify/Algokom/:name/:NIM', verifyAlgokomUser);


export default memberRouter;