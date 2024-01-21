"use client";

import { FormEvent, useState } from "react";
import SummaryToggle from "../summary-toggle/page";
import SummaryFormUrl from "./summary-form-url/page";
import SummaryFormParagraph from "./summary-form-paragraph/page";
import SummaryResults from "./summary-results/page";
import { request } from "@/helpers/requestHelpers";
import SummaryReset from "../summary-reset/page";

export default function SummaryForm() {
  const [urlInput, setUrlInput] = useState<any>("");
  const [paragraphInput, setParagraphInput] = useState<any>("");
  const [summarizedText, setSummarizedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = checked ? "/api/url" : "/api/text";
    const payload = checked ? urlInput : paragraphInput;

    await request.POST(url, payload, setSummarizedText, setIsStreaming);
  };

  const handleReset = () => {
    setUrlInput("");
    setParagraphInput("");
    setSummarizedText("");
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-8">
        <SummaryToggle checked={checked} setChecked={setChecked} />
        <SummaryReset isLoading={isLoading} onClick={handleReset} />
      </div>
      <form className="flex gap-4 mt-12 min-w-[700px]" onSubmit={handleSubmit}>
        {checked ? (
          <SummaryFormUrl input={urlInput} setInput={setUrlInput} />
        ) : (
          <SummaryFormParagraph input={paragraphInput} setInput={setParagraphInput} />
        )}
      </form>
      <SummaryResults isLoading={isLoading} isStreaming={isStreaming} summarizedText={summarizedText} />
    </>
  );
}
