"use client";

import Layout from "@/components/layout";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { initFirebase } from "../../firebase/firebase";

export default function AdminPage() {
  initFirebase();
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (!user) {
    router.push("/admin_login");
    return <div>Sign In</div>;
  }

  //ini tinggal call auth.signOut() hrsnya auto sign out sih

  return (
    <div>
      <Layout
        title={"Lab Sistem Komputer dan Jaringan"}
        iframevisitorlist="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqQ6K3BKQe-GHGc-v_HhYqZGWu39HziJs8Iufd5ifsKCT6PhF19KMRy899lBLwM_wd4wJLlpbQ4_nr/pubhtml?gid=241214832&amp;single=true&amp;widget=true&amp;headers=false"
        iframevisitordash="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqQ6K3BKQe-GHGc-v_HhYqZGWu39HziJs8Iufd5ifsKCT6PhF19KMRy899lBLwM_wd4wJLlpbQ4_nr/pubhtml?gid=1545419633&amp;single=true&amp;widget=true&amp;headers=false"
        iframetoolslist="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqQ6K3BKQe-GHGc-v_HhYqZGWu39HziJs8Iufd5ifsKCT6PhF19KMRy899lBLwM_wd4wJLlpbQ4_nr/pubhtml?gid=922969363&amp;single=true&amp;widget=true&amp;headers=false"
        iframetoolsdash="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqQ6K3BKQe-GHGc-v_HhYqZGWu39HziJs8Iufd5ifsKCT6PhF19KMRy899lBLwM_wd4wJLlpbQ4_nr/pubhtml?gid=1583627477&amp;single=true&amp;widget=true&amp;headers=false"
        auth={auth}
      />
    </div>
  );
}
