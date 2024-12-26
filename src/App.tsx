import { useState } from "react";
import Container from "./components/container/container";
import Modal from "./components/modal/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <button onClick={() => setIsOpen(true)}>open</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h1>Modal</h1>
        <p>This is a modal</p>
      </Modal>
    </Container>
  );
}

export default App;
