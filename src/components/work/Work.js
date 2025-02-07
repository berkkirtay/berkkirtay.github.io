// Copyright(c) 2024 Berk Kirtay

import Footer from '../footer/Footer';

const Work = () => {
    const workStyle = {
        paddingLeft: "5%"
    };

    return (
        <div>
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Projects: </h4>
                <ul>
                    <li>
                        <a href="https://github.com/berkkirtay/basicblockchain" target="_blank" rel="noopener noreferrer">
                            A Proof-of-Work Based Blockchain Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/adaptive-genetic-algorithm-for-n-queens" target="_blank" rel="noopener noreferrer">
                            An Adaptive Genetic Algorithm for N-Queens Problem <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/berk-8" target="_blank" rel="noopener noreferrer">
                            A CHIP-8 (berk-8) Emulator with C++ and SDL2 <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/blockchain-web-api" target="_blank" rel="noopener noreferrer">
                            A Blockchain Based Wallet Web App <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/basicencryptorGUI" target="_blank" rel="noopener noreferrer">
                            A Basic RSA Algorithm Based File Encryptor <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/PasswordManager" target="_blank" rel="noopener noreferrer">
                            Password Manager Service <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/berkcoin" target="_blank" rel="noopener noreferrer">
                            Berkcoin Decentralized App <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/personal-website" target="_blank" rel="noopener noreferrer">
                            Source Code of This Website <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/geneticalgorithms" target="_blank" rel="noopener noreferrer">
                            Genetic Algorithms Applications <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/enigmamachine" target="_blank" rel="noopener noreferrer">
                            Enigma Machine Emulator <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/ai-assignments" target="_blank" rel="noopener noreferrer">
                            Game Benchmarking With Various AI Algorithms  <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/machine-learning" target="_blank" rel="noopener noreferrer">
                            Basic Machine Learning Programming Concepts <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/CSE3038_MIPS_Project/blob/main/src/mips_project_v2.asm" target="_blank" rel="noopener noreferrer">
                            MIPS Assembly Language Programming <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/group-messaging-in-go" target="_blank" rel="noopener noreferrer">
                            P2P Group messaging in Go with AES and ECDH <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/signature" target="_blank" rel="noopener noreferrer">
                        A simple digital signature processor program <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>
                </ul>
            </div>

            <hr />
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Research: </h4>
                <p style={workStyle}>Will be filled later.</p>

            </div>
            <Footer />
        </div >
    )
}

export default Work