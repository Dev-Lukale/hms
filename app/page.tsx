

import LoginForm from "@/components/login/LoginForm";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
 

  return (
    <section className="h-screen font-poppins ">
      <div className="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
        <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
          <div className="absolute inset-0 lg:bg-[#00000066] "></div>
          <Image
            src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
            fill
            alt=""
            className="hidden object-cover w-full h-full lg:block"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative max-w-6xl px-4 mx-auto">
            <div className="max-w-xl mx-auto lg:max-w-5xl">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                  <h2 className="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl ">
                    Welcome and join our community
                  </h2>
                  <p className="text-lg text-left text-gray-200 dark:text-gray-300 ">
                    You are welcome here!
                  </p>
                </div>
                <div className="w-full px-4 lg:w-2/5">
                  <div className="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 ">
                    <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                      Login your account
                    </h2>
                  <LoginForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
