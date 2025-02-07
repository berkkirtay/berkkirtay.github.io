// Copyright(c) 2024 Berk Kirtay

import Footer from "../footer/Footer";

const Experience = () => {
    const tableStyle = {
        width: "100%",
        paddingLeft: "3%",
    };

    const tableItemStyle = {
        color: "rgb(20, 175, 100)",
        width: "65%",
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
            <Footer />
        </div>
    )
}

export default Experience