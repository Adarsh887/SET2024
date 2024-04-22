import Footer from "./Footer";
import Header from "./Header";

function Imp_dates(){

    return(
        <div className="bg-light text-dark">
            <Header/>
            <br/>
            <div className="container justify-content-center">
                <div>
                    <h1>Important dates</h1>
                </div>
                <br/>
                <div className="justify-content-center">
                <table className='table table-primary table-striped table-hover w-50'>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Title submission with Author’s name</td>
                            <td>1st April, 2024</td>
                        </tr>
                        <tr>
                            <td>Abstract Submission</td>
                            <td>12th April, 2024</td>
                        </tr>
                        <tr>
                            <td>Conference Date</td>
                            <td>2nd and 3rd May, 2024</td>
                        </tr>
                        <tr>
                            <td>Presentation of the work and Paper Submission for first review</td>
                            <td>2nd and 3rd May, 2024</td>
                        </tr>
                        <tr>
                            <td>Final paper presentation</td>
                            <td>30th June, 2024</td>
                        </tr>
                </tbody>
                </table>
                </div>
            </div>
            <br/>  <br/>
            <Footer/>
        </div>
    )
}

export default Imp_dates;