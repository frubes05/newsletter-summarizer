import clsx from "clsx";
import Link from "next/link";
import HeaderButton from "../header-button/header-button";

interface IHeaderLink {
  label: string;
  href?: string;
  position: number;
  sectionId?: string;
}

export default function HeaderLink({ label, href, position, sectionId }: IHeaderLink) {

  if (!href) {
    return(
      <HeaderButton label={label} sectionId={sectionId} />
    )
  }

  return (
    <Link
      href={href}
      className={clsx("text-white p-6", {
        "mr-auto text-3xl": position === 0,
      })}
    >
      {label}
    </Link>
  );
}
