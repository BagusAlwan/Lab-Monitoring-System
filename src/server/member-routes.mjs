import express from 'express'; 
import { registerMemberRPLD, deleteMemberRPLD, verifyRPLDUser } from './members/membersRPLD.mjs';
import { registerMemberSC, deleteMemberSC, verifySCUser } from './members/membersSC.mjs';
import { registerMemberSKJ, deleteMemberSKJ, verifySKJUser } from './members/membersSKJ.mjs';
import { registerMemberAlgokom, deleteMemberAlgokom, verifyAlgokomUser } from './members/membersAlgokom.mjs';
import { registerMemberELINS, deleteMemberELINS, verifyELINSUser } from './members/membersELINS.mjs';

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

memberRouter.post('/register/ELINS', registerMemberELINS); 
memberRouter.delete('/delete/ELINS', deleteMemberELINS);
memberRouter.get('/verify/ELINS/:name/:NIM', verifyELINSUser);

export default memberRouter;