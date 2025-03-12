"use client";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

type Press = {
  name: string;
  picture: string;
};

const press: Press[] = [
  {
    name: "Client 1",
    picture: "/assets/images/illustrations/page-accueil/logo-5.png"
  },
  {
    name: "Client 2",
    picture: "/assets/images/illustrations/page-accueil/logo-3.png"
  },
  {
    name: "Client 3",
    picture: "/assets/images/illustrations/page-accueil/logo3.png"
  },
  {
    name: "Client 4",
    picture: "/assets/images/illustrations/page-accueil/logo-4.png"
  },
  {
    name: "Client 5",
    picture: "/assets/images/illustrations/page-accueil/logo-2.png"
  },
  {
    name: "Client 6",
    picture: "/assets/images/illustrations/page-accueil/logo6.png"
  },

]

//turbo, lunionlab, aitech, nobilis services, mirna agence...

export function Partner() {
  return (
    <section id="press" >
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col justify-center items-center text-center gap-2">
        <div className="text-primary text-lg font-bold">NOS PARTENAIRES</div>
        <div className="text-gray-700 text-2xl font-black pb-8">CEUX QUI NOUS FONT CONFIANCE</div>
      </div>
          <div className="relative mt-6 bg-[#adafa9] py-4">
            <Marquee className="max-w-full [--duration:40s]">
              {press.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.picture}
                  height={40}
                  width={160}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={`logo-${logo.name}`}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </div>
      </div>
    </section>
  );
}