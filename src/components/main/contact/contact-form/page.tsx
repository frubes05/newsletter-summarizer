"use client";

import { FormEvent, useState } from "react";
import Input from "../../input/page";
import TextArea from "../../textarea/page";
import Button from "../../button/page";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="w-full flex gap-4">
        <Input
          value={name}
          setValue={setName}
          placeholder="Please enter your name"
          className="h-12 px-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white flex-grow whitespace-nowrap overflow-hidden text-ellipsis"
        />
        <Input
          value={title}
          setValue={setTitle}
          placeholder="Please enter title of your suggestion"
          className="h-12 px-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white flex-grow whitespace-nowrap overflow-hidden text-ellipsis"
        />
      </div>
      <TextArea
        value={suggestion}
        setValue={setSuggestion}
        placeholder="Tell us what we can improve"
        className="w-full min-h-96 p-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white"
      />
      <Button label="Submit" className="bg-button-primary w-fit self-center text-white px-12 py-2 outline-none border-none rounded-lg hover:bg-button-secondary transition-colors duration-100" />
    </form>
  );
}
