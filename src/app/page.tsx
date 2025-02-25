'use client'

import { List } from "@/components/List";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function Home() {
  const { isLoading, data } = useGetPosts()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Posts</h1>
        {isLoading && <p>Loading...</p>}
        {data && <List posts={data} />}
      </main>
    </div>
  );
}
