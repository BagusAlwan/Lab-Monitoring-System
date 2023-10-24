'use client';

import Layout from "@/components/layout";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/navigation';
import { initFirebase } from "../../firebase/firebase";



export default function AdminPage() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter(); 
    const [user, loading] = useAuthState(auth);

    if (loading) { 
        return <div>LOADING...</div>
    }

    if (!user) {
        router.push("/admin_login")
        return <div>Sign In</div>

        
    }

    //ini tinggal call auth.signOut() hrsnya auto sign out sih

    return (
        <div>
            <Layout title={'Lab Algoritma dan Komputasi'} auth={auth} />
        </div>
    )
}