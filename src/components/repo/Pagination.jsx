
import { HStack, Button, Icon, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return (
    <HStack spacing={2} mt={4} justifyContent="center">
      <Button onClick={() => onPageChange(page - 1)} isDisabled={page === 1} leftIcon={<ChevronLeftIcon boxSize={5} />} colorScheme="blue" variant="ghost">
        <Text display={["none", "inline"]}>Anterior</Text>
      </Button>
      <Text color="gray.200" fontWeight="bold">Página {page} de {totalPages}</Text>
      <Button onClick={() => onPageChange(page + 1)} isDisabled={page === totalPages} rightIcon={<ChevronRightIcon boxSize={5} />} colorScheme="blue" variant="ghost">
        <Text display={["none", "inline"]}>Próxima</Text>
      </Button>
    </HStack>
  );
}
