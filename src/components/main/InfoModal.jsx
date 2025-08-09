import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

export default function InfoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="gray.900" color="white">
        <ModalHeader>Bem-vindo ao Star-Repo!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>
            O Star-Repo permite buscar repositórios do GitHub por tags, ordenando por estrelas e filtrando facilmente.
          </Text>
          <Text mb={2}>
            <b>Como usar:</b>
            <ul style={{ marginLeft: 16 }}>
              <li>Adicione tags para filtrar repositórios.</li>
              <li>Escolha a ordem de estrelas.</li>
              <li>Pesquise e navegue pelos resultados paginados.</li>
            </ul>
          </Text>
          <Text fontSize="sm" color="gray.400">Dica: Clique no botão de info para rever estas instruções.</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
