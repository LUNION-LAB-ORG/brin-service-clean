import { NumberTicker } from "@/components/magicui/number-ticker";
import { CheckCircle, Smile, Users } from "lucide-react";


export default function Statistic(){
    return(
        <div className="bg-white hidden md:block py-10">
            <div className="bg-[#1195FF] m-6 p-10 flex flex-row justify-around items-center rounded-xl">
                <div className="flex flex-row justify-center gap-4 items-center border-r-2 text-white border-white pr-10">
                <Smile className="w-16 h-16 text-white" />
                <div>
                 <h1 className="text-4xl font-semibold"><NumberTicker value={567} className="text-white text-4xl font-semibold"/>+</h1>
                    <p >Clients satisfaits</p>
                </div>
                </div>
                <div className="flex flex-row justify-center gap-4 items-center text-white">
                <Users className="w-16 h-16 text-white" />
                <div>
                    <h1 className="text-4xl font-semibold"><NumberTicker value={48} className="text-white text-4xl font-semibold"/></h1>
                    <p >Membres</p>
                </div>
                </div>
                <div className="flex flex-row justify-center gap-4 text-white items-center border-l-2 border-white pl-10">
                <CheckCircle className="w-16 h-16 text-white" />
                <div>
                    <h1 className="text-4xl font-semibold"><NumberTicker value={759} className="text-4xl text-white font-semibold"/>+</h1>
                    <p >Projets terminés</p>
                </div>
                </div>
            </div>
        </div>
    )
}