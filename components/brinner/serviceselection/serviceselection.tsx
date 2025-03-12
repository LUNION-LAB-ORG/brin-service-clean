"use client";

import React, { useState } from "react";
import { Building2, Trees, Home, Building, WavesLadder } from "lucide-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

type Service = {
  id: "business" | "public" | "residential";
  icon: React.JSX.Element;
  title: string;
};

interface Prestation {
  id: string;
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
}

export default function ServiceSelection() {
  const [selectedService, setSelectedService] = useState<Service>({
    id: "business",
    icon: <Building2 size={40} />,
    title: "Nettoyage bureaux et\nlocaux professionnels",
  });

  const [selectedPrestation, setSelectedPrestation] = useState<Prestation | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const services: Service[] = [
    { id: "business", icon: <Building2 size={40} />, title: " Nettoyage de bureaux et\nlocaux professionnels" },
    { id: "public", icon: <Building size={40} />, title: " Nettoyage des lieux\npublics" },
    { id: "residential", icon: <Home size={40} />, title: " Nettoyage résidentiel" },
  ];

  const prestations: {
    business: Prestation[];
    public: Prestation[];
    residential: Prestation[];
  } = {
    business: [
      { id: "green", icon: <Trees size={24} />, title: "Entretien regulier", subtitle: "Dépoussiérage des surfaces (bureaux, étagères, etc.)\nNettoyage des sols (aspiration, lavage) \nVidage des poubelles et remplacement des sacs \n Nettoyage des sanitaires (toilettes, lavabos, etc.) \n Nettoyage des espaces communs (cuisine, salle de pause, etc.)" },
      { id: "deep", icon: <WavesLadder size={24} />, title: "Ménage approfondi", subtitle: "Lavage des vitres\nNettoyage des moquettes et tapis\nLavage des murs et plafonds\nDésinfection des surfaces de contact (poignées de porte, interrupteurs, etc.)\nRemise en état après travaux ou événements" },
    ],
    public: [
      { id: "laundry", icon: <WavesLadder size={24} />, title: "Entretien courant", subtitle: "Balayage et lavage des sols (rues, trottoirs, places publiques, etc.)\n Vidage et nettoyage des poubelles et conteneurs\n Nettoyage et désinfection des sanitaires publics\n Nettoyage des bancs, mobilier urbain et aires de jeux\n " },
      { id: "rat", icon: <WavesLadder size={24} />, title: "Nettoyage spécialisé", subtitle: "Nettoyage des espaces verts (parcs, jardins, etc.) : tonte, ramassage des feuilles, etc.\n  Nettoyage des parkings et voiries : balayage mécanique, lavage haute pression, etc.\n Nettoyage des marchés et halles : nettoyage des stands, des sols, etc.\n Décapage et lustrage des sols : élimination des salissures tenaces, protection des surfaces.\n Nettoyage après événements : ramassage des déchets, nettoyage des espaces utilisés.\n Enlèvement de graffitis et affichages sauvages.\n" },
    ],
    residential: [
      { id: "deep", icon: <WavesLadder size={24} />, title: "Ménage approfondi", subtitle: "Nettoyage des vitres (intérieur et extérieur)\n Nettoyage intérieur des appareils électroménagers (four, réfrigérateur, etc.)\n Nettoyage des placards et rangements (intérieur et extérieur)\n Nettoyage des textiles (rideaux, linge de maison, etc.)\n Remise en état après déménagement ou travaux (nettoyage complet et approfondi)" },
      { id: "versaille", icon: <WavesLadder size={24} />, title: "Ménage classique", subtitle: "Dépoussiérage de toutes les pièces (meubles, objets, etc.)\n Aspiration et lavage des sols (carrelage, parquet, etc.)\n Nettoyage et désinfection des sanitaires (salles de bain, toilettes)\n Nettoyage de la cuisine (plans de travail, évier, électroménager extérieur)\n Rangement des pièces (lits, vêtements, etc.) " },
    ],
  };

  const handleServiceClick = (data: Service) => {
    setSelectedService(data);
  };

  const handlePrestationClick = (prestation: Prestation) => {
    setSelectedPrestation(prestation);
    onOpen();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto border-2 border-gray-200 rounded-lg relative -top-12 bg-white">
      <h2 className="text-2xl font-bold text-primary mb-8">Sélectionnez un service</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 rounded-lg border-2 transition-all cursor-pointer 
            ${selectedService.id === service.id ? "bg-secondary text-white border-white" : "border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary"}`}
            onClick={() => handleServiceClick(service)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 border-2 p-2 rounded-full">{service.icon}</div>
              <p className="whitespace-pre-line">{service.title}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-medium text-primary mb-8">
        Sélectionnez les prestations pour <br />
        {selectedService.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {prestations[selectedService.id].map((prestation) => (
          <Button
            key={prestation.id}
            className="p-6 rounded-lg border-2 border-gray-200 hover:border-secondary transition-all"
            onClick={() => handlePrestationClick(prestation)}
          >
            <div className="flex p-2 items-center text-center">
              <div className="mb-2 text-secondary">{prestation.icon}</div>
              <p className="text-sm whitespace-pre-line">{prestation.title}</p>
            </div>
          </Button>
        ))}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {selectedPrestation && (
            <>
              <ModalHeader className="flex flex-col gap-1">{selectedPrestation.title}</ModalHeader>
              <ModalBody className="whitespace-pre-line">
                {selectedPrestation.subtitle}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onOpenChange}>
                  Fermer
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="flex justify-center">
        <Button
          as={Link}
          href="/brinner/formulaire"
          className="bg-primary mx-auto items-center self-center text-white py-6 px-20 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}
