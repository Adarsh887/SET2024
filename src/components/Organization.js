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
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="container w-50">
                    <h4>Chief Patron</h4>
                    <p>Dr. G. Viswanathan, Chancellor</p>

                    <h4>Patrons</h4>
                    <p>
                    Mr. Sankar Viswanathan, Vice President,<br/>
                    Dr. Sekar Viswanathan, VicePresident,<br/>
                    Dr. G.V. Selvam, Vice President
                    </p>

                    <h4>Co Patrons</h4>
                    <p>
                    Dr. Kanchana bhaaskaran, Vice Chancellor
                    </p>

                    <h4>Convenors</h4>
                    <p>
                    Dr. Susan Elias, Dean SENSE<br/>
                    Dr. John Sahaya Rani Alex, Associate Dean<br/>
                    Dr. Reena Monica, Associate Dean
                    </p>

                    <h4>Program Chair</h4>
                    <p>
                    Dr. Mohanaprasad K, HoD ECE<br/>
                    Dr. Annis Fathima A, HoD ECM<br/>
                    Dr. Anita Angeline A, HoD VLS
                    </p>

                    <h4>Organizers</h4>
                    <p>  
                    Dr. Nagajayanthi, SENSE<br/>
                    Dr. Usharani, SENSE<br/>
                    Dr. Jean jenifer, SENSE
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
                    Adarsh S
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