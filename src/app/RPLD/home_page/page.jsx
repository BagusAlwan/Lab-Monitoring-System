'use client';

export default function HomePage() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Lab Rekayasa Perangkat Lunak dan Data</h1>

            <div className='mt-[60px] grid grid-cols-2 place-items-center'>
                <button onClick={() => alert('Hello World!')}>Log In</button>
                <button onClick={() => alert('Bye bye World!')}>Log Out</button>
            </div>
            
        </div>
    )
}