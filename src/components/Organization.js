import Footer from "./Footer";
import Header from "./Header";

function Org(){

    return(
        <div className="bg-light text-dark">
            <Header/>
            <div >
                <h1 className="container justify-content-center">Organizing Committee</h1>
            </div>
            <br/>
            <div className="container d-flex flex-wrap justify-content-center text-justify">
                <div className="container w-50 text-align-class">
                    <h4>Chief Patron</h4>
                    <p>Dr. G. Viswanathan, Chancellor</p>

                    <h4>Patrons</h4>
                    <p>
                    Mr. Sankar Viswanathan, Vice President,<br/>
                    Dr. Sekar Viswanathan, VicePresident,<br/>
                    Dr. G.V. Selvam, Vice President<br/>
                    Dr. Sandhya Pentareddy, Executive Director<br/>
                    Ms. Kadhambari S. Viswanathan, Assistant Vice - President
                    </p>

                    <h4>Co-Patrons</h4>
                    <p>
                    Dr. V S Kanchana Bhaaskaran, Vice Chancellor<br/>
                    Dr. T. Tyagarajan, Pro- Vice Chancellor

                    </p>

                    <h4>Conveners</h4>
                    <p>
                    Dr. Susan Elias, Dean SENSE<br/>
                    Dr. John Sahaya Rani Alex, Associate Dean (Research), SENSE<br/>
                    Dr. Reena Monica, Associate Dean (Academics), SENSE
                    </p>

                    <h4>Program Chair</h4>
                    <p>
                    Dr. Mohanaprasad K, HoD ECE<br/>
                    Dr. Annis Fathima A, HoD ECM<br/>
                    Dr. Anita Angeline A, HoD VLSI and ES
                    </p>

                    <h4>Organizers</h4>
                    <p>  
                    Dr. Nagajayanthi, SENSE<br/>
                    Dr. Usha Rani S, SENSE<br/>
                    Dr. Jean jenifer Nesam J, SENSE
                    </p>
                </div>
                <div className="container w-50">
                    
                    <h4>Co-Organizers</h4>
                    <p>
                    Dr. Nilanjan Tewari, SELECT<br/>
                    Dr. Anik Goswami, SELECT<br/>
                    Dr. Akaitab Mukherjee, SSL<br/>
                    Dr. Anuja Raj, SSL<br/>
                    Dr. Sanjit Das, SAS<br/>
                    Dr. R. Navamathavan, SAS<br/>
                    Dr. Somnath Bera, SAS<br/>
                    Dr. Sowndararajan P T, SAS<br/>
                    Dr. N.Ganesh, SCOPE<br/>
                    Dr. Praveen Jeo, SCOPE<br/>
                    Dr. Chitra Devi N, VITBS<br/>
                    Dr. Rekhapriyadharshini A, VITBS<br/>
                    Dr. M. Helen sab thik, SCE<br/>
                    Dr. I. Yamini Sreevalli, SCE<br/>
                    Dr. L Bhaskara Rao, SMEC<br/>
                    Dr. G Murali Mohan, SMEC<br/>
                    </p>

                    <h4>Website Comittee</h4>
                    <p>
                    Dr.Kalaivanan K, SENSE<br/>
                    
                    </p>

                    <h4>Publication Comittee</h4>
                    <p>
                    Dr. Sofana Reka S, SENSE<br/>
                    Dr. Sridhar C, SENSE
                    </p>
                </div>
            </div>
            <br/> <br/>
            <Footer/>
        </div>
    )

}

export default Org;