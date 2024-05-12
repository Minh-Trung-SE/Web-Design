import Header from "components/Header"
import {FC} from "react"
import Footer from "components/Footer";
import Banner from "components/Banner";
import Featured from "components/Featured";
import Team from "components/Team";
import Template from "components/Template";
import GetInTouch from "components/GetInTouch";

const App: FC = () => {
    return (
        <>
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
        </>
    )
}

export default App