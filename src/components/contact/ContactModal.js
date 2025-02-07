// Copyright(c) 2025 Berk Kirtay

import Modal from "react-modal";
import { useRef, useEffect } from "react"

Modal.setAppElement('#root');

export const ContactModal = ({ modalState, setModalState, content, fileName, contentTitle }) => {
    const ref = useRef(null);
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setModalState(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    const copyToClipboard = () => {
        if (content) {
            navigator.clipboard
                .writeText(content)
                .then(() => alert("Text is copied to clickboard!"))
                .catch(err => console.log(err));
        }
    }

    return (
        <div onClick={handleClickOutside}>
            <Modal isOpen={modalState}
                shouldCloseOnEsc={true}
                onRequestClose={() => setModalState(false)}
                centered
                style={
                    {
                        content: {
                            borderRadius: "3%",
                            backgroundColor: "#101820ff",
                            color: "white",
                            width: "40%",
                            height: "60%",
                            margin: "auto"
                        },
                    }
                }>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <i style={{ cursor: "pointer", fontSize: "48px" }} className="fa fa-copy" onClick={() => copyToClipboard()}></i>

                        <a style={{ color: "white" }} href={fileName} download={contentTitle}>
                            <i style={{ fontSize: "48px" }} className="fa fa-download" aria-hidden="true"></i>
                        </a>

                        <i style={{ cursor: "pointer", fontSize: "48px" }} className="fa fa-times" aria-hidden="true" onClick={() => setModalState(!modalState)}></i>
                    </div>

                    <div className="modal-content">
                        <pre>
                            <code>{content}</code>
                        </pre>
                    </div>
                </div>
            </Modal>
        </div>
    )
}