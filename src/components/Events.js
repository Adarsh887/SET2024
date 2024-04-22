import Footer from "./Footer";
import Header from "./Header";
import '@coreui/coreui/dist/css/coreui.min.css';
import './styles.css';


function Events(){
    return(
        <div className="bg-light text-dark">
            <Header/>
            <div >
                <h1 className="container justify-content-center">Topic of Interest</h1>
                <h3 className="container justify-content-center">Sustainable development of industry, innovation and infrastructure</h3>
            </div>
            <br/><br/>
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="container w-50">
                    <h2>About SENSE</h2>
                    <p className="abc">The School of Electronics Engineering (SENSE) at VIT
                        Chennai was established for imparting state-of-the-art
                        education, training and research in the field of Electronics &
                        Communication Engineering and allied areas. The school
                        offers three B.Tech programmes, one in Electronics and
                        Communication Engineering, Electronics and Computer
                        Engineering and one in VLSI Design. It also offers two
                        M.Tech programmes, one in Embedded Systems and the
                        other in VLSI Design. In addition, Ph.D. research programme
                        is offered in the areas of Electronics, Communication and
                        Computer Engineering and their allied fields. The school has
                        modern state-of-the-art laboratories in the areas of
                        Semiconductor Devices, Micro and Nano Devices, Analog
                        Circuit Design, Digital System Design, Digital Signal
                        Processing, Embedded Systems and Architecture,
                        Microprocessors and Microcontrollers, Communication
                        Engineering, Wireless Technologies, Internet of Things (IoT),
                        Microwave and Optical Communication, Computer Networks
                        and Advanced VLSI Design
                    </p>
                </div>
                <div className="container w-50">
                    <h2>Objective</h2>
                    <p className="abc">The SET 2024 conference will deliver the
                        recent developments on research across
                        various discipline of engineering and
                        technology. It provide the platform for the
                        students and research scholars to showcase
                        their innovative works in a global platform.
                        It is certain that presentations, discussion
                        and interventions of this conference,
                        generates innovative ideas to tackle real
                        world problems on Science, Engineering
                        and Technology more efficiently
                    </p>
                </div>
            </div>
            <br/> <br/>
            <Footer/>
        </div>
    )

}

export default Events;
