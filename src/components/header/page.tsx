"use client";

import useScrollPosition from '@/hooks/use-scroll-position/use-scroll-position';
import HeaderLink from './header-link/page';
import clsx from 'clsx';
import Image from 'next/image';

const headerLinks = [
    {
        href: "/",
        label: "Newsletter Summarizer"
    },
    {
        sectionId: "about",
        label: "About"
    },
    {
        sectionId: "contact",
        label: "Contact"
    }
]

export default function Header(){
  const { scrollPosition, isScrolledUp, isOverThreshold } = useScrollPosition();

  return (
    <header className={clsx('p-4 fixed top-0 z-20 w-full bg-primary-300 transition-transform duration-500 ease-in-out', {
        "shadow-md": scrollPosition > 0,
        "-translate-y-full": isOverThreshold && !isScrolledUp,
    })}>
        <ul className='flex justify-start relative'>
            <Image src="./icon.svg" height={36} width={36} alt='newsletter icon' className='relative left-4'/>
            {headerLinks.map((link, index) => (<HeaderLink key={link.label} label={link.label} href={link.href} sectionId={link.sectionId} position={index} />))}
        </ul>
    </header>
  )
};