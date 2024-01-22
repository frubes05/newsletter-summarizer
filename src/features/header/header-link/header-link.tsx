import clsx from "clsx";
import Link from "next/link";
import HeaderButton from "../header-button/header-button";
import Image from "next/image";

interface IHeaderLink {
  label: string;
  href?: string;
  position: number;
  sectionId?: string;
}

export default function HeaderLink({
  label,
  href,
  position,
  sectionId,
}: IHeaderLink) {
  if (!href) {
    return <HeaderButton label={label} sectionId={sectionId} />;
  }

  return (
    <Link
      href={href}
      className={clsx("text-white p-2 flex gap-4 text-base items-center", {
        "w-full justify-center lg:mr-auto text-3xl lg:w-fit lg:justify-start": position === 0,
      })}
    >
      <Image
        src="./icon.svg"
        height={36}
        width={36}
        alt="newsletter icon"
        className="relative"
        />
        <span>{label}</span>
    </Link>
  );
}
