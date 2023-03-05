// Copyright(c) 2023 Berk Kırtay

const Image = ({ url }) => {
    return (
        <img src={url} alt={url}
            width="90%" height="40%" style={{ display: "block", margin: "auto", padding: "2%" }} />
    );
};

export default Image;
