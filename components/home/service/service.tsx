import { Button } from "@nextui-org/react";
import { ArrowUpRight, Building, House, Recycle } from "lucide-react";
import Link from "next/link";

export default function Service() {
  return (
    <div className="bg-white p-10">
      <div className="flex flex-col gap-6 py-20 items-center">
        <div className="text-primary text-lg font-bold">NOS SERVICES</div>
        <div className="text-primary-600 text-2xl font-black">CE QUE NOUS OFFRONS</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 w-full max-w-6xl">
          {[
            {
              icon: <Building className="w-8 h-8 text-primary-400" />,
              title: "Nettoyage bureaux et locaux professionnels",
              description:
                "Bien que la plupart de nos clients optent pour des services de nettoyage réguliers, nous sommes également spécialisés dans les nettoyages ponctuels après événements ou travaux. Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.",
            },
            {
              icon: <Recycle className="w-8 h-8 text-primary-400" />,
              title: "Nettoyage des lieux publics",
              description:
                "Nous comprenons que chaque lieu public a ses propres spécificités. C'est pourquoi nous travaillons en étroite collaboration avec nos clients pour élaborer des plans de nettoyage sur mesure, adaptés à leurs besoins et à leurs contraintes. Contactez-nous pour discuter de votre projet.",
            },
            {
              icon: <House className="w-8 h-8 text-primary-400" />,
              title: "Nettoyage résidentiel",
              description:
                "Nous savons que chaque maison est unique. C'est pourquoi nous prenons le temps de comprendre vos besoins et vos préférences, afin de vous proposer un plan de nettoyage sur mesure. Contactez-nous pour obtenir un devis personnalisé.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between gap-6 bg-gray-100 rounded-xl p-8 h-full min-h-[350px] shadow-md"
            >
              <div className="rounded-full border border-gray-300 p-2 bg-white absolute -top-8 left-1/2 transform -translate-x-1/2">
                {service.icon}
              </div>
              <div className="flex flex-col justify-between items-center text-center gap-4 mt-4 flex-grow">
                <div className="text-black font-semibold">{service.title}</div>
                <div className="text-gray-600 text-sm">{service.description}</div>
              </div>
              <Button
                as={Link}
                href="/brinner"
                className="flex self-stretch justify-center items-center gap-2 text-white bg-primary px-4 py-2 rounded-md"
              >
                Obtenir un devis
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
