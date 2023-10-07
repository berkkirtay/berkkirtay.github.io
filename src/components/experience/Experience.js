// Copyright(c) 2022 Berk Kırtay

import Footer from "../footer/Footer";

const Experience = () => {
    const tableStyle = {
        width: "100%",
        paddingLeft: "3%",
    };

    const tableItemStyle = {
        color: "rgb(20, 175, 100)",
        width: "72%",
    };

    return (
        <div>
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Experience: </h4>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Software Engineer - Amadeus</span>
                            </td>
                            <td align="center">Mar 2023</td>
                            <td align="center">-</td>
                            <td align="center">Present</td>
                        </tr>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Software Engineer Intern - Amadeus</span>
                            </td>
                            <td align="center">July 2022</td>
                            <td align="center">-</td>
                            <td align="center">Sep 2022</td>
                        </tr>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Software Developer - Medyasoft</span>
                            </td>
                            <td align="center">July 2021</td>
                            <td align="center">-</td>
                            <td align="center">June 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr />

            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Education: </h4>

                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <td style={tableItemStyle}>
                                <span style={{ display: "list-item" }}>
                                    Computer Science and Engineering - Marmara University</span>
                            </td>
                            <td align="center">Sep 2018</td>
                            <td align="center">-</td>
                            <td align="center">June 2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr />
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>Other Links: </h4>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/berkkirtay/" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/berkkirtay <i style={{ zoom: "0.9" }} className="fas fa-external-link-alt"></i></a>
                        <p >My linkedin profile</p>
                    </li>

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
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Experience