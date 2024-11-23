import React from "react";

export const fetchPostDetailedData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const postData = await res.json();

  return {
    title: `${postData.title}`,
    description: postData.body,
    keywords: postData.body.split(' ')
  }
};

const PostDetailsPage = async ({ params }) => {
  const PostDetailedData = await fetchPostDetailedData(params.id);
  return (
    <div>
      <p className="text-center text-3xl font-bold pt-5">Posts Details Page</p>
      <div className="max-w-[1200px] mx-auto space-y-4 mt-10">
        <h4 className="text-2xl">
          <strong className="mr-10">Title :</strong> {PostDetailedData.title}
        </h4>
        <p>
          <strong className="mr-10">Description</strong> {PostDetailedData.body}
        </p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
