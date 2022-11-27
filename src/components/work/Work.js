// Copyright(c) 2022 Berk Kırtay

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
                        <a href="https://github.com/berkkirtay/basicblockchain" target="_blank" rel="noopener noreferrer">A Proof-of-Work Based Blockchain
                            Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/blockchain-web-api" target="_blank" rel="noopener noreferrer">A Web App for My Blockchain
                            Implementation <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/PasswordManager" target="_blank" rel="noopener noreferrer">Password Manager Service <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/geneticalgorithms" target="_blank" rel="noopener noreferrer">Genetic Algorithms Applications <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/basicencryptorGUI" target="_blank" rel="noopener noreferrer">Basic File Encryptor <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/enigmamachine" target="_blank" rel="noopener noreferrer">Enigma Machine Emulator <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/berkcoin" target="_blank" rel="noopener noreferrer">Berkcoin Decentralized App <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/personal-website" target="_blank" rel="noopener noreferrer">Source Code of This Website <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/berkkirtay/adaptive-genetic-algorithm-for-n-queens" target="_blank" rel="noopener noreferrer">An Adaptive Genetic Algorithm for N-Queens Problem <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                    </li>
                </ul>

                <p style={workStyle}>You can access my projects on :   <a href="https://github.com/berkkirtay" target="_blank" rel="noopener noreferrer">GitHub <i style={{ zoom: "0.8" }} className="fas fa-external-link-alt"></i></a></p>
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