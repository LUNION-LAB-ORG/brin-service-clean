import React from 'react';
import { Facebook, Instagram, Linkedin, } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="bg-[#002848] text-white px-8 pt-20 pb-10 ">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col justify-start md:justify-start gap-4 items-start md:items-center">
            <div className="w-32 h-32 relative">
              <Image
                src="/assets/images/logo_2.png"
                alt="Logo"
                layout="fill" // Permet d'adapter l'image à la taille de son conteneur
                objectFit="contain" // Équivalent à "object-contain" en CSS
              />
            </div>
            <div className="flex flex-wrap md:flex-row gap-4 items-center">
            <Link target='_blank' href="https://www.facebook.com/share/14pmD93wNf/?mibextid=wwXIfr" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </Link>
            <Link target='_blank' href="https://www.instagram.com/brinserviceclean?igsh=MTcxY250Zmo1bGcxcw%3D%3D&utm_source=qr" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </Link>
            {/* <Link href="/" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </Link> */}
            <Link target='_blank' href="https://www.linkedin.com/company/brin-serviceclean/" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
            </Link>
          </div>
          </div>

          {/* Explorer Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapide</h3>
            <ul className="space-y-6">
              <li><Link href="/propos" className="hover:text-primary-300">A propos</Link></li>
              <li><Link href="/services" className="hover:text-primary-300">Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary-300">Blog</Link></li>
            </ul>
          </div>

          {/* Légales Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">LÉGALES</h3>
            <ul className="space-y-6">
              <li><Link href="/" className="hover:text-primary-300">Support</Link></li>
              <li><Link href="/politique" className="hover:text-primary-300">Politique de confidentialité</Link></li>
              <li><Link href="/condition" className="hover:text-primary-300">Termes et conditions</Link></li>
            </ul>
          </div>

          {/* Nos Plats Section */}
          <div>
            <div className="flex flex-col gap-0">
            <h3 className="text-xl font-bold mb-4">Contacts</h3>
            {/* <div className="border-b w-20"></div> */}
            </div>
            <ul className="space-y-6">
              <li className="hover:text-primary-300">(+225) 05 01 23 62 05</li>
              <li className="hover:text-primary-300">info@brin-serviceclean.com</li>
              <li className="hover:text-primary-300">Marcory centre, 9ème arrondissement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
        <div className="bg-[#002848] py-6 px-4 text-center text-white border-t  text-sm">
          <p>
            Copyright Brin Service Clean, 2025 Tous droits réservés |{" "}
            <span>
              Designed by{" "}
              <Link 
                href="https://lunion-lab.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-semibold underline hover:text-primary-700"
              >
                Lunions-Lab
              </Link>
            </span>
          </p>
        </div>
    </footer>
  );
};

export default Footer;