import { useSession, signOut } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import Login from "../components/Login";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      {/* Header */}
      <main>
        <div>
          Signed in as {session.user.email} <br />
          <button
            className="bg-blue-500 rounded-full p-2 text-white"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}
