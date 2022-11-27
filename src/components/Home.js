// Copyright(c) 2022 Berk Kırtay

import Footer from "./footer/Footer";
import pfp from "../assets/img/pfp.jpg";
const Home = () => {
    return (
        <>
            <div className="aboutme">
                <div id="profile">
                    <div id="profile-child-pfp">
                        <img src={pfp} alt="pfp" width="90%" />
                    </div>
                    <div id="profile-child-desc">
                        Hi, I am a senior Computer Science student at Marmara University. I write software. I love
                        learning about anything related to computer science and I am always eager to expand my expertise!
                    </div>
                </div>

                <hr />
                <h4 style={{ paddingLeft: "1%" }}>
                    My primary interests are:
                </h4>
                <ul>
                    <li>Software Engineering</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I am proficient about software development life cycles and knowledgeable about famous software engineering practices. I try to write clean, modular and efficient software.</p>

                    <li>Blockchain Technology</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I am interested in blockchain and web3. I developed some basic applications of blockchain and decentralized transaction systems. I also work on decentralized apps.</p>

                    <li >Cryptography</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I have been interested in Cryptography for a long time and some of my work include PKCS methods and essentials such as SSL, SHA, AES, RSA. </p>

                    <li >Artificial Intelligence</li>
                    <p style={{ width: "85%", paddingLeft: "1%" }}>I am working on evolutionary algorithms and machine learning on my studies and research. </p>
                </ul>
            </div>
            <Footer />
        </>
    )
}
export default Home

