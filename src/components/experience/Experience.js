// Copyright(c) 2022 Berk Kırtay

const Experience = () => {
    const experienceStyle = {
        float: "right"
    };

    const table = {
        padding: "5px",
        width: "100%",
    }
    return (
        <div>
            <div className="projectLinksList">
                <h4 style={{ paddingLeft: "1%" }}>My Experience: </h4>
                <ul style={{ columns: 2 }}>
                    <li style={{ width: "100%", color: "rgb(20, 175, 100)" }}>
                        Software Engineer Intern - Amadeus IT Services

                    </li>

                    <li style={{ width: "100%", color: "rgb(20, 175, 100)" }}>
                        Junior Software Developer - Medyasoft

                    </li>
                    <ol style={{ width: "50%", float: "right" }}>
                        July 2022 – Sep 2022
                    </ol>

                    <ol style={{ width: "50%", float: "right" }}>
                        July 2021 – June 2022
                    </ol>
                </ul>
            </div>

        </div>
    )
}

export default Experience