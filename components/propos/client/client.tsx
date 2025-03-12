import Image from "next/image";

export default function Client() {
    type News = {
        title: string;
        description: string;
        profil: string;
    };

    const news: News[] = [
        {
            title: "AITECH",
            description:
                "Depuis que nous avons confié l'entretien de nos bureaux à <strong class='text-primary'>BRIN SERVICE CLEAN</strong>, nous sommes ravis de la qualité du travail fourni. L'équipe est toujours ponctuelle, discrète et efficace. Nos locaux sont impeccables, ce qui contribue grandement au bien-être de nos employés et à l'image professionnelle de notre entreprise.",
            profil: "/assets/images/illustrations/propos/logo1.png",
        },
        {
            title: "TURBO",
            description:
                "<strong class='text-primary'>BRIN SERVICE CLEAN</strong> a su s'adapter à nos besoins spécifiques et à nos horaires. Leur flexibilité est un véritable atout pour nous. Ils sont toujours prêts à ajuster leurs prestations en fonction de nos demandes et à trouver des solutions pour les situations particulières. Nous apprécions leur professionnalisme et leur réactivité.",
            profil: "/assets/images/illustrations/propos/logo2.jpg",
        },
        {
            title: "LUNION-LAB",
            description:
                "Nous travaillons avec <strong class='text-primary'>BRIN SERVICE CLEAN</strong> depuis plusieurs années et nous avons développé une véritable relation de confiance. Leur équipe est composée de professionnels compétents et discrets, qui connaissent parfaitement nos locaux et nos exigences. Nous sommes sereins de savoir que nos bureaux sont entre de bonnes mains.",
            profil: "/assets/images/illustrations/propos/logo5-2.png",
        },
    ];

    return (
        <div className="bg-white p-10">
            <div className="flex flex-col gap-6 py-20 items-center">
                <div className="text-gray-700 text-2xl font-black">RETOURS CLIENTS</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                    {news.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col gap-4 items-center justify-between p-6 bg-white hover:bg-secondary hover:text-white shadow-md rounded-lg border border-gray-200 relative"
                        >
                            <Image
                                src={item.profil}
                                alt="profil"
                                width={60}
                                height={60}
                                className="rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
                            />

                            <div className="mt-8 text-xl font-bold">{item.title}</div>
                            <div
                                className="text-sm text-center"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                            <div className="mt-4 text-yellow-400 text-lg font-bold">★★★★☆</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
