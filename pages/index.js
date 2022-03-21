import { useSession } from "next-auth/react";
import Head from "next/head";

import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ posts }) {
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
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const posts = db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = (await posts).docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      posts: docs,
    },
  };
}
