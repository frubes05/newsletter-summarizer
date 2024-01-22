import Link from "next/link";
import React from "react";

interface IFooterLink {
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, children }: IFooterLink) {
  return (
    <Link
      href={href}
      target={"_blank"}
      className="block hover:translate-y-[-0.25rem] transition-all ease-in duration-200"
    >
      {children}
    </Link>
  );
}
