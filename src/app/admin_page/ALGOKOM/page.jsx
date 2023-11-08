"use client";

import Layout from "@/components/layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {

  const router = useRouter();

  useEffect(() => {
    // Check for the presence of the token in local storage
    const token = localStorage.getItem('token');
    if (!token) {
        // Token exists, so redirect to the admin page
        router.push("/admin_login");
    }
}, []);

  // if (loading) {
  //   return <div>LOADING...</div>;
  // }

  // if (!user) {
  //   router.push("/admin_login");
  //   return <div>Sign In</div>;
  // }

  // Add a function to log the user out
  const signOut = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect to the login page
    router.push("/admin_login"); // Change this to the login page URL
  }

  return (
    <div>
      <Layout
        title={"Lab Algoritma dan Komputasi"}
        iframevisitorlist="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnAHJLyFMieZIQC0IGvsiN0RzOOfBCG94jG1uOfJ17KAEpR9Vqv7owS0Z1m_AdjQ3Sk_qtTtfhKnaV/pubhtml?gid=241214832&amp;single=true&amp;widget=true&amp;headers=false"
        iframevisitordash="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnAHJLyFMieZIQC0IGvsiN0RzOOfBCG94jG1uOfJ17KAEpR9Vqv7owS0Z1m_AdjQ3Sk_qtTtfhKnaV/pubhtml?gid=1545419633&amp;single=true&amp;widget=true&amp;headers=false"
        iframetoolslist="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnAHJLyFMieZIQC0IGvsiN0RzOOfBCG94jG1uOfJ17KAEpR9Vqv7owS0Z1m_AdjQ3Sk_qtTtfhKnaV/pubhtml?gid=922969363&amp;single=true&amp;widget=true&amp;headers=false"
        iframetoolsdash="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnAHJLyFMieZIQC0IGvsiN0RzOOfBCG94jG1uOfJ17KAEpR9Vqv7owS0Z1m_AdjQ3Sk_qtTtfhKnaV/pubhtml?gid=1583627477&amp;single=true&amp;widget=true&amp;headers=false"
        //auth={auth}
      />
    </div>
  );
}
