"use client";

import Image from "next/image";

export default function Medium(){

   type Article = {
     img: string;
     title: string;
     subtitle: string;
     date: string;
 }

    const list: Article[] = [
        {
          
          img: "/assets/images/illustrations/blog/picture1.png",
          title: "Comment nettoyer vos plinthes efficacement et simplement",
          subtitle: "Techniques de nettoyage simples, conseils et FAQ pour redonner un aspect neuf à vos plinthes Lorsque nous pensons au nettoyage de la maison, les premières choses qui nous viennent ...",
          date: "14 mai 2024"
        },
        {
          
            img: "/assets/images/illustrations/blog/picture2.png",
            title: "Poussière et pollen : comment nettoyer votre...",
            subtitle: "Vous le sentez? Le printemps est dans l’air! Les fleurs s’épanouissent, les oiseaux chantent et… vos yeux pleurent et votre nez coule. Fort Wayne a la chance d’avoir des sources d’eau...",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture3.png",
            title: "Combien coûte réellement le ménage d’une maison ?",
            subtitle: "Les coûts de nettoyage d’une maison varient en fonction de trois facteurs principaux : Si vous avez un espace de vie plus petit et que vous engagez un service de nettoyage hebdomadaire,",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture4.png",
            title: "11 avantages à embaucher une femme de ménage",
            subtitle: "Une maison propre est une chose magnifique : chaque chose est à sa place, les plans de travail sont brillants, les sols brillent presque au soleil, la moquette est impeccable. Mais garder",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture5.png",
            title: "Liste de contrôle du nettoyage avant...",
            subtitle: "Un nettoyage en profondeur vous permettra de prendre un bon départ dans votre nouvelle maison. Nettoyer une maison demande du temps et des efforts. S'il s'agit d'une nouvelle",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture6.png",
            title: "Nettoyeurs professionnels de maisons au Colorado",
            subtitle: "Le chrome est un métal très utilisé dans la plupart des maisons pour la finition des robinets et des luminaires. Et pour cause, le chrome nécessite peu d’entretien, est durable et a une belle",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture7.png",
            title: "Comment nettoyer vos plinthes efficacement et simplement",
            subtitle: "Techniques de nettoyage simples, conseils et FAQ pour redonner un aspect neuf à vos plinthes Lorsque nous pensons au nettoyage de la maison, les premières choses qui nous viennent ...",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture8.png",
            title: "Peut-on blanchir les oreillers ?",
            subtitle: "Techniques de nettoyage simples, conseils et FAQ pour redonner un aspect neuf à vos plinthes Lorsque nous pensons au nettoyage de la maison, les premières choses qui nous viennent ...",
            date: "14 mai 2024"
          },
          {
          
            img: "/assets/images/illustrations/blog/picture9.png",
            title: "Comment nettoyer les robinets et les accessoires",
            subtitle: "Techniques de nettoyage simples, conseils et FAQ pour redonner un aspect neuf à vos plinthes Lorsque nous pensons au nettoyage de la maison, les premières choses qui nous viennent ...",
            date: "14 mai 2024"
          },
      ];

    return(
        <div className="bg-white px-8 py-16">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 place-items-center">
        {list.map((item, index) => (

        <div key={index} className="flex flex-col gap-3 mb-4" >
          <div>
            <Image
              alt={item.title}
              className="w-[200px] object-cover rounded-lg h-[140px]"
              src={item.img}
              width={200}
              height={140}
            />
          </div>
          <div className="text-small flex flex-col justify-between text-start items-start w-[200px]">
            <b className="text-start text-secondary">{item.title}</b>
            <p className="text-start mt-3">{item.subtitle}</p>
            <p className="text-secondary self-start mt-2">{item.date} </p>
          </div>
        </div>
      ))}
        </div>
        </div>
    );
}