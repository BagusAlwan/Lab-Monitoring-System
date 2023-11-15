import { useRouter } from "next/navigation";


export async function loginnnn(username, password) {
    const res = await fetch(`http://localhost:8080/api/admin/login/${username}/${password}`, {
        method : 'POST',
        headers : { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);
    // if (data == false){
    //     throw new Error("error")
    // }
    return data; 
}

// adminLogin('Bagus', '123');

export const signOut = () => {
    const router = useRouter();

    localStorage.removeItem('token');
    router.push("/admin_login");
  }