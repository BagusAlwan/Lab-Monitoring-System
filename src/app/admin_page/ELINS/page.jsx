"use client";

import Layout from "@/components/layout";

import { useRouter } from "next/navigation";

export default function AdminPage() {

  const router = useRouter();

  // if (loading) {
  //   return <div>LOADING...</div>;
  // }

  // if (!user) {
  //   router.push("/admin_login");
  //   return <div>Sign In</div>;
  // }

  //ini tinggal call auth.signOut() hrsnya auto sign out sih

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
        title={"Lab Elektronika dan Instrumentasi"}
        iframevisitorlist="https://docs.google.com/spreadsheets/d/e/2PACX-1vQoX7l1YvX3bWFBif5AGVysfItjS8VLwtdesfs9kdvB56P6rIO5gnPzulCvsQJyGTBsjZFVTGbCB_tD/pubhtml?gid=241214832&amp;single=true&amp;widget=true&amp;headers=false"
        iframevisitordash="https://docs.google.com/spreadsheets/d/e/2PACX-1vQoX7l1YvX3bWFBif5AGVysfItjS8VLwtdesfs9kdvB56P6rIO5gnPzulCvsQJyGTBsjZFVTGbCB_tD/pubhtml?gid=1545419633&amp;single=true&amp;widget=true&amp;headers=false"
        iframetoolslist="https://docs.google.com/spreadsheets/d/e/2PACX-1vQoX7l1YvX3bWFBif5AGVysfItjS8VLwtdesfs9kdvB56P6rIO5gnPzulCvsQJyGTBsjZFVTGbCB_tD/pubhtml?gid=922969363&amp;single=true&amp;widget=true&amp;headers=false"
        iframetoolsdash="https://docs.google.com/spreadsheets/d/e/2PACX-1vQoX7l1YvX3bWFBif5AGVysfItjS8VLwtdesfs9kdvB56P6rIO5gnPzulCvsQJyGTBsjZFVTGbCB_tD/pubhtml?gid=1583627477&amp;single=true&amp;widget=true&amp;headers=false"
        //auth={auth}
      />
    </div>
  );
}
