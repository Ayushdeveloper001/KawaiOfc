import { TNewsFeed } from "@/@types/NewsType";
import React from "react";

function NewsCard({ news }: { news: TNewsFeed }) {
  return (
    <div className="flex gap-5 items-center flex-col bg-base-100 shadow-xl h-[400px]">
      <img
        src={news.thumbnail}
        alt={news.title}
        className="object-cover w-full h-[150px] rounded-lg"
      />
      <div className="flex flex-col space-y-3">
        <h2 className="card-title">{news.title}</h2>
        <p>
          {news.preview.intro.length > 120
            ? news.preview.intro.slice(0, 120) + "..."
            : news.preview.intro}
          .{" "}
          <a
            className="text-blue-500 cursor-pointer"
            href={news.url}
            target="_blank"
          >
            See More (Source: ANN)
          </a>
        </p>
        <p className="text-sm">{news.uploadedAt}</p>
      </div>
    </div>
  );
}

export default NewsCard;