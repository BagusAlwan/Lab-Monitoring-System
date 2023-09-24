import Layout from "@/components/layout";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/router';



export default function AdminPage() {
    const auth = getAuth();
    const router = useRouter(); 
    const [user, loading] = useAuthState(auth);

    if (loading) { 
        return <div>LOADING...</div>
    }

    if (!user) {
        router.push("/admin_login")
        return <div>Sign in</div>
    }

    return (
        <div>
            <Layout />
        </div>
    )
}