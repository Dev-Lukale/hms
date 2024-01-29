/** @format */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";

// icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillBellFill, BsBell } from "react-icons/bs";
import { TbMailFilled, TbMail } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { PiNotepadFill, PiNotepad } from "react-icons/pi";
import { Card } from "@/components/ui/card";

type Props = {};

interface SideNavItemType {
  icon?: {
    icon: React.ReactNode;
    fillIcon: React.ReactNode;
  };
  label: string;
  href: string;
}

const sidebarItmes: SideNavItemType[] = [
  {
    icon: {
      icon: <GoHome />,
      fillIcon: <GoHomeFill />,
    },
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    icon: {
      icon: <BsBell />,
      fillIcon: <BsFillBellFill />,
    },
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: {
      icon: <TbMail />,
      fillIcon: <TbMailFilled />,
    },
    label: "Messages",
    href: "/messages",
  },
  {
    icon: {
      icon: <PiNotepad />,
      fillIcon: <PiNotepadFill />,
    },
    label: "Lists",
    href: "/lists",
  },

  {
    icon: {
      icon: <HiOutlineUsers />,
      fillIcon: <HiUsers />,
    },
    label: "Communities",
    href: "/communities",
  },

  {
    icon: {
      icon: <BiUser />,
      fillIcon: <BiSolidUser />,
    },
    label: "Profile ",
    href: "/profile",
  },
];
export default function Sidebar({}: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Card
      className={cn(
        "min-h-screen max-h-screen overflow-y-auto w-fit  px-4 flex flex-col text-foreground   bg-background items-center justify-evenly rounded-none ",
        isSidebarOpen && "md:w-fit"
      )}
    >
      {/* logo */}
      <Link href={"/"}>
        <FaXTwitter className="text-3xl" />
      </Link>
      {/* Toggle button */}
      <Card
        className={cn(
          "hidden md:flex w-ful  justify-end fixed top-16 left-44 bg-primary",
          !isSidebarOpen && "justify-start left-14 "
        )}
      >
        <RiArrowLeftDoubleFill
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className={cn(
            "text-primary-foreground transition-all text-4xl cursor-pointer ",
            !isSidebarOpen && "rotate-180"
          )}
        />
      </Card>
      {/* sidenavitems */}
      {sidebarItmes.map((d, i) => (
        <SideNavItem
          key={i}
          icon={d.icon}
          href={d.href}
          isSidebarOpen={isSidebarOpen}
          label={d.label}
        />
      ))}
    </Card>
  );
}

function SideNavItem({
  href,
  isSidebarOpen,
  icon,
  label,
}: SideNavItemType & { isSidebarOpen: boolean }) {
  const pathname = usePathname();
  const isActivePage = pathname == href;
  return (
    <Link
      href={href}
      className="flex gap-2 items-center cursor-pointer   w-full text-xl "
    >
      {/* icon */}
      <div className=" ">
        {/* <FaXTwitter /> */}
        {isActivePage ? icon?.fillIcon : icon?.icon}
      </div>
      {isSidebarOpen && (
        <p
          className={cn(
            " hidden md:block transition-all ",
            isActivePage && "font-bold"
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
}

function HoverContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-3 transition-all rounded-full cursor-pointer hover:bg-gray-200 w-fit dark:hover:bg-zinc-900 group-hover:dark:bg-zinc-900 group-hover:bg-gray-200 ">
      {children}
    </div>
  );
}
