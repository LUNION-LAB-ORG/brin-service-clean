import About from "@/components/home/about/about";
import Action from "@/components/home/action/action";
import Hero from "@/components/home/hero/hero";
import Service from "@/components/home/service/service";
import Solution from "@/components/home/solution/solution";
import Statistic from "@/components/home/statistic/statistic";
import Walk from "@/components/home/walk/walk";
import Request from "@/components/home/request/request";
import { Partner } from "@/components/home/partner/partners";
// import News from "@/components/home/news/news";




export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Statistic/>
      <Service/>
      <Action/>
      <Solution/>
      <Walk/>
      <Request/>
      <Partner/>
      {/* <News/> */}
    </div>
  );
}

