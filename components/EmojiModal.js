import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function EmojiModal(props) {
  const [showModal, setShowModal] = useState(false);
  function handleOpenModal() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }
  const { children, onClose, isOpen } = props;
  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <Modal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}
