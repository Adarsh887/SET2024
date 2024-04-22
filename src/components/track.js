import Footer from "./Footer";
import Header from "./Header";

function track(){

    return(
        <div className="bg-light text-dark">
            <Header/>
            <br/>
            <div className="container justify-content-center">
                <div>
                    <h1>Paper Tracks</h1>
                </div>
                <br/>
                <div className="justify-content-center">
                <table className='table table-primary table-striped table-hover w-50'>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Hyperlinks</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>SENSE</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/13tP9WzTQm0Wp9d43QJEMFkjrd7sXmptV/edit?usp=drive_link&ouid=103394094838625606612&rtpof=true&sd=true" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SCOPE</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1NFDLLuXq3Fm2GBOjs_UikaoE99hFcG6yCFicFZWwKbU/edit?usp=drive_link" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SMEC</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1ZOEqBUARpDjTtWS-7pIRZ9afjkqQqyAW/edit?usp=sharing&ouid=109356252623973408604&rtpof=true&sd=true" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SAS - Mathematics</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/16LLGni5p8-UHgTCdSzwpSFOrHecuaxyRs3Tl_RZjAgU/edit?usp=sharing" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SSL</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1mJHS1RKSFkzfqERtb63m2VIOpzNs0f8O7CItggqIT3Y/edit?usp=drive_link" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SELECT</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1NLORK-HhNdJ-3z2DOolUs1roQqU6pUzU294EFcmvF4A/edit?usp=sharing" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SCE</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1WzsmOLMOjRwUI046xePoEiiA3E505P3fEPk8XB_yEgA/edit?usp=drive_link" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>VITBS</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1sGKo_B3Wr3ya97xdscth0N0eZ_4L-OXl-gLB60ggB6I/edit?usp=drive_link" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SCOPE - MCA</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1tCnunPG5FopUmIU7Fkna-YgrLwmdXwLyrBg8pxm-kJg/edit?usp=drive_link" target="_blank">Click Here </a></td>
                        </tr>
                        <tr>
                            <td>SAS - Physics & Chemistry</td>
                            <td><a className="link-success" href="https://docs.google.com/spreadsheets/d/1_Z5coXC3mBe1cEPwcgs07mPGY75lLW4SnW6XaxPVbMw/edit?usp=drive_link" target="_blank">Click Here </a></td>
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

export default track;