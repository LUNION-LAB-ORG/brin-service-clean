import { Mail, MapPin, Phone } from "lucide-react";


export default function Info(){
    return(
        <div className="bg-white p-10">
            <div className="flex flex-col lg:flex-row gap-12 justify-start lg:justify-center items-start lg:items-center p-4">
                <div className="flex flex-col w-auto lg:w-1/2 gap-4">
                    <div className="text-primary text-xl md:text-2xl lg:text-3xl font-extrabold">Garantie de nettoyage complet</div>
                    <div className="text-base md:text-lg text-justify lg:text-start">Si vous n&apos;êtes pas satisfait de votre nettoyage, appelez-nous dans les 24 heures et nous ferons tout notre possible pour vous satisfaire. Si nous ne pouvons pas nettoyer à votre entière satisfaction, nous vous rembourserons jusqu&apos;à 100 % (nettoyages horaires et vacants exclus). Cette garantie de remboursement a été lancée dans l&apos;industrie par <span className="font-bold">Brin Service Clean</span>  pour soutenir notre revendication et notre objectif de toujours vous offrir le meilleur service du secteur. Nous pensons que vous n&apos;avez droit à rien de moins !</div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 items-center">
                        <Phone size={40} className="bg-primary text-white rounded-full p-2"/>
                        <div>(+225) 05 01 23 62 05</div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Mail size={40} className="bg-primary text-white rounded-full p-2"/>
                        <div>info@brin-serviceclean.com</div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <MapPin size={40} className="bg-primary text-white rounded-full p-2"/>
                        <div>Marcory centre, 9ème arrondissement</div>
                    </div>
                </div>
            </div>
        </div>
    );
}