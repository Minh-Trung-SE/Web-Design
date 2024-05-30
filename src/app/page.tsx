import Banner from "@src/components/Banner";
import Featured from "@src/components/Featured";
import Footer from "@src/components/Footer";
import GetInTouch from "@src/components/GetInTouch";
import Header from "@src/components/Header";
import Team from "@src/components/Team";
import Template from "@src/components/Template";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Web Design",
    description: "Web Design",
    keywords: ["web design", "web development", "website design", "web design company", "web design services", "web design agency", "web design and development", "web design studio", "web design tools", "web design trends", "web design inspiration", "web design portfolio", "web design examples", "web design tutorial", "web design course", "web design software", "web design templates", "web design ideas", "web design principles"],
    icons: "/logo/logo.png",
    openGraph: {
        title: "Web Design",
        description: "Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design.",
        url: "https://webdesign.com",
        type: "website"
    }
}
export default function Home() {
    return (
        <main>
            <Header className="py-4"/>
            <section id="home">
                <div className="py-20">
                    <Banner/>
                </div>
                <Featured/>
            </section>
            <section id="about">
                <div className="py-20">
                    <Team/>
                </div>
            </section>
            <section id="templates">
                <Template/>
            </section>
            <section id="contact">
                <GetInTouch/>
            </section>
            <Footer/>

        </main>
    );
}
