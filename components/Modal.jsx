import React from "react"

const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    modalOpen && (
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          modalOpen ? "" : "hidden"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        {children}
      </div>
    )
  )
}

export default Modal
