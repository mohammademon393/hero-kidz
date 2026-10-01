import { fontBangla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        {/* Content */}
        <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
          <h1
            className={`${fontBangla.className} text-4xl font-extrabold leading-tight text-neutral md:text-5xl lg:text-6xl`}
          >
            আপনার শিশুকে দিন একটি
            <span className="block text-primary"> সুন্দর ভবিষ্যৎ!</span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-neutral/70 md:text-lg">
            Discover exciting toys, accessories, and fun products made to bring
            smiles and memorable moments to every child.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/products"
              className="btn btn-primary rounded-full px-6"
            >
              Explore Products
            </Link>

            <Link
              href="/products"
              className="btn btn-primary btn-outline rounded-full px-6"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative w-full max-w-lg">
            <Image
              src="/assets/hero.png"
              alt="Hero Kidzz children's products"
              width={600}
              height={500}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
