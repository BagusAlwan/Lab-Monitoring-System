import { useRouter } from "next/navigation";


export async function loginnnn(username, password) {
    const res = await fetch(`http://10.6.45.100:8080/api/admin/login/${username}/${password}`, {
        method : 'POST',
        headers : { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);
    return data; 
}

export const signOut = () => {
    const router = useRouter();

    localStorage.removeItem('token');
    router.push("/admin_login");
  }