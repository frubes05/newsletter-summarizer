"use client";

import Button from "@/components/main/button/page";

interface IHeaderButton {
  label: string;
  sectionId?: string;
}

export default function HeaderButton({ label, sectionId }: IHeaderButton) {
  const handleScrollIntoView = (id?: string) => {
    if (!id) return;

    const section = document?.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={() => handleScrollIntoView(sectionId)}
      className="text-white p-6 hover:translate-y-[-0.25rem] transition-all ease-in duration-200"
    >
      {label}
    </Button>
  );
}
