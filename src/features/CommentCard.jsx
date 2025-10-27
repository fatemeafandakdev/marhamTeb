import React from "react";
import { CiStar } from "react-icons/ci";

export default function CommentCard({ comment, name }) {
  return (
    <div className=" w-[100%] !bg-transparent border rounded-2xl p-4 flex flex-col m-auto items-center text-center gap-2">
  
      <div className="flex justify-center gap-1 text-yellow-600">
        {[...Array(5)].map((_, i) => (
          <CiStar key={i} size={30} fill="currentColor" stroke="none" />
        ))}
      </div>

      <p className="text-green-900 text-2xl leading-relaxed mt-2">
        {comment}
      </p>

     
      <p className="text-green-600 text-base mt-2">— {name}</p>
    </div>
  );
}
