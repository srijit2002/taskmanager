import React from "react";

const Modal = ({modalCotent,modalClass}) => {
    return (
        <div className={`alert alert--${modalClass}`}>
            {modalCotent}
        </div>
    )
}

export default Modal;