// Copyright(c) 2024 Berk Kirtay

import { useState } from "react"
import { ContactModal } from './ContactModal';
import Footer from "../footer/Footer";
import signature from "../../assets/pkcs/signature.pem";
import publicKey from "../../assets/pkcs/public_key.pem";


const Contact = () => {
    const PUBLIC_KEY = "public_key.pem";
    const SIGNATURE = "signature.pem";
    const [modalState, setModalState] = useState(false);
    const [modalFileName, setModalFileName] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");

    const changeModalState = (selectedContent, contentTitle) => {
        fetch(selectedContent)
            .then(selectedContent => selectedContent.text())
            .then(text => {
                const formattedText = text
                    .split('\n')
                    .map(line => line.replace(/^ +/, match => '&nbsp;'.repeat(match.length)))
                    .join('\n');
                setModalContent(formattedText);
                setModalFileName(selectedContent);
                setModalTitle(contentTitle);
            })
            .catch(err => console.log(err));
        setModalState(!modalState);
    }

    const pStyle = {
        width: "85%",
        paddingLeft: "2%"
    };
    const tableItemStyle = {
        color: "rgb(20, 175, 100)",
        width: "65%",
        cursor: "pointer"
    };
    return (
        <div>
            {modalState &&
                <ContactModal
                    modalState={modalState}
                    setModalState={setModalState}
                    content={modalContent}
                    fileName={modalFileName}
                    contentTitle={modalTitle}
                />
            }
            <div className="aboutme">
                <h4 style={{ paddingLeft: "1%" }}>
                    Verify this website with my signature
                </h4>
                <ul>
                    <li>
                        My public key
                    </li>
                    <p style={pStyle}>You can verify contents on this website with my&nbsp;
                        <span style={tableItemStyle} onClick={() => changeModalState(publicKey, PUBLIC_KEY)}>public key <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></span></p>
                    <li>
                        8192-bit RS256 Certificate
                    </li>
                    <p style={pStyle}>Please click to see the&nbsp;
                        <span style={tableItemStyle} onClick={() => changeModalState(signature, SIGNATURE)}>signature <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></span></p>
                </ul>
            </div>
            <hr />

            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>
                    Send me an email:
                </h4>
                <p style={pStyle}>Please send me an email at <a style={tableItemStyle} href="mailto:berkkrty@gmail.com">berkkrty@gmail.com</a> for your queries.</p>
                <hr />
            </div>

            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Links: </h4>
                <ul>
                    <li>
                        <a href="https://github.com/berkkirtay" target="_blank" rel="noopener noreferrer">
                            github.com/berkkirtay <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                        <p>My all open-source projects.</p>
                    </li>

                    <li>
                        <a href="https://gitlab.com/berkkirtay" target="_blank" rel="noopener noreferrer">
                            gitlab.com/berkkirtay <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                        <p>My gitlab account for future use.</p>
                    </li>

                    <li>
                        <a href="https://leetcode.com/berkkrty/" target="_blank" rel="noopener noreferrer">
                            leetcode.com/berkkrty <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                        <p>Problem solving.</p>
                    </li>

                    <li>
                        <a href="https://berkkirtay.github.io/berkcoin" target="_blank" rel="noopener noreferrer">
                            berkkirtay.dev/berkcoin <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                        <p >Berkcoin Decentralized App.</p>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/berkkirtay/" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/berkkirtay <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                        <p >My linkedin profile.</p>
                    </li>
                </ul>
            </div>
            <Footer />
        </div >

    )
}

export default Contact