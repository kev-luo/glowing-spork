import { useState } from "react";
import Modal from "react-modal";

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
      <Modal isOpen={showModal} contentLabel="Minimal Modal Example">
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}
