import React from "react";

export const metadata = {
  title: "About",
  description: "A Super Power full NextJS Website - About Page  ",
};

export const GetTime = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Time`, {
    next: { revalidate: 5 },
  });

  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const currentTime = await GetTime();
  return (
    <div>
      <p className="text-center text-3xl font-bold pt-5">About Page</p>
      <p className="text-center text-3xl font-bold pt-5">Time: {currentTime}</p>
    </div>
  );
};

export default AboutPage;
