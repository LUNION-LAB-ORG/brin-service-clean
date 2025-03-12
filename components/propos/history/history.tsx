"use client";
import Image from "next/image";

export default function History() {
  return (
    <div className="bg-white p-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-20">
        

        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/illustrations/propos/histoire.png"
            alt="histoire"
            className="w-full h-auto object-cover"
            width={500}
            height={800}
            priority
          />
        </div>


        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="text-primary text-3xl font-black">HISTOIRE</div>
          <div className="text-xl leading-relaxed">
            <span className="text-secondary text-justify font-bold">BRIN SERVICE CLEAN</span> est votre partenaire de confiance en nettoyage professionnel. <br />
            Fondée par des professionnels passionnés par la propreté et l&apos;hygiène, notre entreprise se distingue par son engagement total envers la satisfaction de nos clients. 
            Nous combinons expertise technique, équipements modernes et personnel hautement qualifié pour transformer vos espaces professionnels et résidentiels.
          </div>
        </div>

      </div>
    </div>
  );
}
