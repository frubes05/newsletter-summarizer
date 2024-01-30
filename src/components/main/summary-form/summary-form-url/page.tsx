import { useContext } from "react";
import Button from "../../button/page";
import Input from "../../input/page";
import { SummaryContext } from "../page";

export default function SummaryFormUrl() {
  const summaryCtx = useContext(SummaryContext);

  return (
    <>
      <Input
        placeholder="Drop a link of page you want to summarize"
        value={summaryCtx?.state.urlInput || ""}
        className="h-12 px-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white flex-grow whitespace-nowrap overflow-hidden text-ellipsis"
      />
      <Button
        label="Summarize"
        className="bg-button-primary text-white px-4 py-2 outline-none border-none rounded-lg hover:bg-button-secondary transition-colors duration-100"
      />
    </>
  );
}
