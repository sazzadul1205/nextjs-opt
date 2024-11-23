// import { fetchPostsData } from "@/Services/getPostAPI";
import Link from "next/link";
import React from "react";
import { Lora } from "next/font/google";
import { redirect } from "next/navigation";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Posts",
  description: "A Super Power full NextJS Website - Posts Page  ",
};

// export const fetchPostsData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   if (data) {
//     redirect(`/Posts/${data[0].id}`);
//   }
//   return data;
// };

export const fetchPostsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();
  // if (data) {
  //   redirect(`/Posts/${data[0].id}`);
  // }
  return data;
};

const PostsPage = async () => {
  const postedData = await fetchPostsData();

  return (
    <div className={`${lora.className}`}>
      <p className="text-center text-3xl font-bold pt-5">Posts Page</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {postedData.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
            <p className="text-gray-500 mt-4 text-sm">User ID: {post.userId}</p>
            <button className="border border-re-500 text-black px-5 py-2 hover:bg-red-300">
              <Link href={`/Posts/${post.id}`}>See more</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
