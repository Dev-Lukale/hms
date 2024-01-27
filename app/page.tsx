import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col items-center justify-start container  ">
      <Navbar />

      <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24 w-ful">
        <div className=" mx-auto">
          <div className="grid items-center  grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
            <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
              <h1 className="text-4xl font-normal text-primary uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
                Get goods
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  delivered
                </span>
              </h1>
              <p className="mt-6 text-lg font-normal text-secondary-foreground/70 sm:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam.
              </p>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="/login"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-secondary rounded-sm bg-primary "
                >
                  Login Now
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:order-first">
              <Image
                className="w-full max-w-sm mx-auto"
                src="/landing-page.jpg"
                alt="landing page banner"
                height={800}
                width={800}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
