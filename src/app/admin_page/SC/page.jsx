"use client";

import Layout from "@/components/layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AdminPage() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push("/admin_login")
    }
  }, [])

  return (
    <div>
      <Layout
        title={"Lab Sistem Cerdas"}
        // auth={auth}
        lab='SC'
      />
    </div>
  );
}
