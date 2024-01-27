import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Mail, MessageCircle, TwitterIcon, XIcon } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="py-4 bg-background sm:py-6 container">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-primary">
            HMS
          </Link>

          {/* Add navbar toggle button for small devices */}

          <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
            <Link
              href="#"
              className="text-base font-normal  transition-all duration-200"
            >
              Support
            </Link>

            <Link
              href="#"
              title=""
              className="text-base font-normal  transition-all duration-200 "
            >
              Features
            </Link>

            <Link
              href="#"
              title=""
              className="text-base font-normal  transition-all duration-200 "
            >
              Pricing
            </Link>
          </nav>
          <div className="space-x-4">
            <Button asChild variant="secondary" size="icon">
              <Link href="#" className="">
                <TwitterIcon />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="icon">
              <Link href="#" className="">
                <MessageCircle />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="icon">
              <Link href="#" className="">
                <Mail />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
