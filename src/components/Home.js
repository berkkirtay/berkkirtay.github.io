import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="aboutme">

                <p>I am a third-year student at Marmara University Computer Science and Engineering Department. I am always
                    eager to expand my expertise in software engineering as I have been developing software for 2 years and
                    keep
                    learning about computer science in my university classes. I have contributed to open-source and love to collaborate with others. My key point is efficiency.
                </p>
                <hr />
                <h4>
                    My primary interests are:
                </h4>
                <ul>
                    <li>Software Engineering</li>
                    <p style={{ width: "85%" }}>I am proficient about software development cycles and knowledgeable about famous practices that we apply to software. I write clean, modular and efficient software.</p>
                    <li>Blockchain Technology</li>
                    <p style={{ width: "85%" }}>Blockchain is the technology of the future. It is a brilliant idea that people came up with and has enormous amounts of usage areas. I developed basic applications of blockchain and several transaction systems. I can't wait to see how much we can accomplish with this technology!</p>
                    <li >Cryptography</li>
                    <p style={{ width: "85%" }}>I have been interested in Cryptography for a long time and some of my projects include digital signature methods and essentials such as,
                        SSL, SHA, AES, RSA. </p>
                </ul>
                <hr />
            </div>

            <div className="projectLinksList">
                <h4>Check out some of my projects on GitHub:</h4>
                <ul>
                    <li>
                        <a href="https://github.com/berkkirtay/basicblockchain" target="_blank" rel="noopener noreferrer">A General Purpose Blockchain
                            Implementation <i class="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/blockchain-web-api" target="_blank" rel="noopener noreferrer">A Web App for My Blockchain
                            Implementation <i class="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/PasswordManager" target="_blank" rel="noopener noreferrer">Password Manager Service <i class="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/basicencryptorGUI" target="_blank" rel="noopener noreferrer">Basic File Encryptor <i class="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/geneticalgorithms" target="_blank" rel="noopener noreferrer">Genetic Algorithms Applications <i class="fas fa-external-link-alt"></i></a>
                    </li>

                </ul>
            </div>
            <hr />
            <Footer />
        </>
    )
}
export default Home

