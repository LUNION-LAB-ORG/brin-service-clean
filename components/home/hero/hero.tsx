"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-10px)]">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/background_1.png"
        alt="hero section"
        width={1920}
        height={1080}
        priority
      />
      <div className="absolute w-full h-full bg-gradient-to-r from-primary to-transparent px-4"></div>

      {/* Contenu principal */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl gap-20 lg:gap-32 mb-4">
        <div className="relative flex items-start text-start justify-start left-0 md:left-12 p-10 mt-8 gap-20 max-w-5xl w-full ">
          {/* Partie gauche : Texte et formulaire */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <p className="text-white font-bold mt-3 text-4xl">
            Services de nettoyage spécialisés, efficaces et minutieux
            </p>
            <h2 className="text-xl font-extralight text-white">Nous effectuons des tâches de nettoyage en utilisant le moins de temps et d’énergie possible.</h2>

            <div className="flex flex-row gap-4">
            <Button as={Link} href="/services" radius="md" className="mt-6 bg-transparent border-2 text-white border-white hover:bg-white w-1/2 hover:text-primary transition-all p-6">
              Voir tous les services
            </Button>
            <Button as={Link} radius="md" href="/brinner" className="mt-6 bg-transparent border-2 text-white border-white hover:bg-white w-1/2 hover:text-primary transition-all p-6">
              Demander un devis
            </Button>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}