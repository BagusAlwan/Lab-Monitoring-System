import admin from "firebase-admin"; 
import serviceAccount from "../serviceAccount.json" assert {type : 'json'};
import { Member } from "../model/member.mjs";

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}); 

const firestore = admin.firestore();

export const registerMemberRPLD = async (req, res, next) => {
    const { name, NIM } = req.body; 
    
    try {
        const name_database = name.toLowerCase();
        const NIM_database = NIM.toLowerCase();

        const existingUser = await firestore.collection('RPLD Members').where('NIM', '==', NIM_database).get();
        
        if (!existingUser.empty) {return res.status(400).send( { message : 'member already registered'} )}

        const member = new Member(null, name_database, NIM_database);

        await firestore.collection('RPLD Members').add(member.toJson());

        res.send(member.toJson());

    } catch (err) {
        res.status(400).send( { message : err.message + " - register error" } );
    }
}; 

export const deleteMemberRPLD = async (req, res, next) => {
    const { name, NIM } = req.body;

    try {
        const name_database = name.toLowerCase(); 
        const NIM_database = NIM.toLowerCase(); 

        const memberID = await getUserIdFromNIM(NIM_database);
        const memberIDValidate = await getUserIdFromName(name_database);

        if (memberID === memberIDValidate) {
            await firestore.collection('RPLD Members').doc(memberID).delete();

            res.send( { message : "delete success" } );
        } else {
            res.status(404).send( { message : "invalid user" } );
        }

    } catch (err) {
        res.status(400).send( { message : err.message + " - delete error" } );
    }
};

export const verifyRPLDUser = async (req, res, next) => {
    const { name, NIM } = req.params; 
    try {        
        const name_database = name.toLowerCase();
        const NIM_database = NIM.toLowerCase();
        const validateName = await getUserIdFromName(name_database);
        const validateNIM = await getUserIdFromNIM(NIM_database); 
        let verified = false;
        
        if ( validateName === validateNIM ) {
            const response = {
                verified : true
            }
            res.status(200).send(response);
        } else {
            res.status(404).send( { message : "invalid user" } );
        }
    } catch (err) {
        res.status(400).send( { message : err.message + " - verification error" } );
    }

};

async function getUserIdFromNIM(NIM){
    try {
        // Fetch User based on registered NIM
    const userQuery = await firestore.collection('RPLD Members').where('NIM', '==', NIM).get();
    
    if (userQuery.empty) {
        throw new Error('User not found'); 
    }

    // Return ID of found User 
    return userQuery.docs[0].id;

    } catch (err) {
        throw err;
    }
};

async function getUserIdFromName(name){
    try {
        // Fetch User based on registered name
    const userQuery = await firestore.collection('RPLD Members').where('name', '==', name).get();

    console.log()
    
    if (userQuery.empty) {
        throw new Error('User not found'); 
    }

    // Return ID of found User 
    return userQuery.docs[0].id;

    } catch (err) {
        throw err;
    }
};