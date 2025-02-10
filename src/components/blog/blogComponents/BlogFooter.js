// Copyright(c) 2023 Berk Kirtay

import { useState } from "react"
import { SignatureModal } from '../../modal/SignatureModal';

const BlogFooter = ({ blog }) => {
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

    return (
        <div className="blogFooter" style={{ paddingBottom: "2%" }}>
            {modalState &&
                <SignatureModal
                    modalState={modalState}
                    setModalState={setModalState}
                    content={modalContent}
                    fileName={modalFileName}
                    contentTitle={modalTitle}
                />
            }
            <i onClick={() => changeModalState(blog.signature, SIGNATURE)}
                style={{ float: "right", margin: "0.5%" }}>{blog.date}</i>
            <i onClick={() => changeModalState(blog.signature, SIGNATURE)}
                style={{ float: "left", margin: "0.5%" }}>© Berk Kirtay</i>
        </div>
    )
}

export default BlogFooter