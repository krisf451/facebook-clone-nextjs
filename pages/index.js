import { useSession } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main className="flex bg-gray-100">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
