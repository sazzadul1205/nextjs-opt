import Image from "next/image";
import React from "react";

const AlbumPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <p className="text-center text-3xl font-bold pt-5">Album Page</p>

      <div className="">
        {[1, 2, 3, 4, 5]?.map((img) => (
          <Image
            key={img}
            src={`/Images/Images-${img}.jfif`}
            alt={`Images-${img}`}
            width={1080}
            height={1920}
            className="rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
