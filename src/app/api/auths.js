
export async function loginnnn(username, password) {
    const res = await fetch(`http://localhost:8080/api/admin/login/${username}/${password}`, {
        method : 'POST',
        headers : { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);
    return data; 
}

// adminLogin('Bagus', '123');