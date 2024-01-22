import Button from "../../../../components/button/button";
import TextArea from "../../../../components/textarea/textarea";

interface ISummaryFormUrlProps {
  input: string;
  setInput: (val: string) => void;
}

export default function SummaryFormParagraph({
  input,
  setInput,
}: ISummaryFormUrlProps) {
  return (
    <div className="flex justify-center items-start w-full flex-col gap-8">
      <TextArea
        placeholder="Paste paragraphs of text you want to summarize.&#10;Make sure your paragraph contains at least 200 words.&#10;Otherwise, just use url option to summarize text."
        value={input}
        setValue={setInput}
        className="w-full min-h-96 p-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white"
      />
      <Button
        label="Summarize"
        className="w-full bg-button-primary text-white px-4 py-2 outline-none border-none rounded-lg hover:bg-button-secondary transition-colors duration-100"
      />
    </div>
  );
}
