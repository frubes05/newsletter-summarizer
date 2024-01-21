"use client";

import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export default function AboutWrapper() {
  const { ref, inView } = useInView({ threshold: 0.25, rootMargin: '-50px 0px 0px -50px'});

  return (
    <div className="bg-primary-200 mx-12 py-48 px-52" ref={ref}>
      <article className={clsx("transition-opacity duration-500",{
        "opacity-100": inView,
        "opacity-0": !inView,
      })}>
        <h2 className="text-6xl mb-8">About</h2>
        <p className="leading-10">
            A Newsletter Summarizer is a web application designed to curate and
            condense news content based on user preferences, providing a streamlined
            and tailored news-reading experience. By leveraging advanced AI
            technologies like ChatGPT, this platform can intelligently analyze and
            summarize news articles, blog posts, or research papers, presenting them
            in an easily digestible format. Users can input specific topics,
            keywords, or URLs, and the aggregator delivers concise summaries,
            highlighting key information and context. This not only saves time but
            also offers a customized way to stay informed about topics of personal
            or professional interest.
        </p>
      </article>
    </div>
  );
}
