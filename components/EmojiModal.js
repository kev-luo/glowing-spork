import { useState } from "react";
import Modal from "react-modal";
import EmojiSearch from "./EmojiSearch";

Modal.setAppElement("#__next");

export default function EmojiModal() {
  const [showModal, setShowModal] = useState(false);
  function handleOpenModal() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <Modal
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <EmojiSearch />
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}
