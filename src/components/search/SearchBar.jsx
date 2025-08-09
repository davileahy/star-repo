
import { HStack, Input, IconButton, Select, Box, Text, VStack } from "@chakra-ui/react";
import { SearchIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import TagInput from "./TagInput";
import { useState } from "react";

const SUGESTOES = [
  "react", "javascript", "nodejs", "python", "api", "vite", "chakra-ui", "nextjs", "typescript", "css", "html"
];

export default function SearchBar({ tags, setTags, onSearch, order, setOrder }) {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <Box
      w="100%"
      bg="rgba(20, 24, 36, 0.85)"
      boxShadow="0 4px 32px 0 rgba(31, 38, 135, 0.25)"
      borderRadius="2xl"
      p={[2, 4]}
      display="flex"
      flexDir= "column"
      alignItems="center"
      gap={5}
      position="relative"
    >
      <Box flex={1} minW={0}>
        <TagInput
          tags={tags}
          setTags={setTags}
          onFocus={() => setShowPrompt(true)}
          onBlur={() => setTimeout(() => setShowPrompt(false), 200)}
          sugestoes={SUGESTOES}
        />
        {showPrompt && (
          <Box
            position="absolute"
            left={0}
            top={{ base: 14, md: 12 }}
            w="100%"
            bg="gray.900"
            color="gray.100"
            borderRadius="md"
            boxShadow="lg"
            p={3}
            zIndex={10}
          >
            <Text fontSize="sm">Digite ou selecione tags para buscar repositórios do GitHub. Exemplo: <b>react</b>, <b>nodejs</b>, <b>api</b>...</Text>
          </Box>
        )}
      </Box>
      <Select
        value={order}
        onChange={e => setOrder(e.target.value)}
        width={{ base: "100%", md: "150px" }}
        color={"white"}
        bg="gray.800"
        borderRadius="md"
        fontWeight="bold"
        _focus={{ borderColor: "blue.400" }}
        _hover={{ borderColor: "blue.300" }}
      >
        <option value="desc">Mais estrelas</option>
        <option value="asc">Menos estrelas</option>
      </Select>
      <IconButton
        icon={<SearchIcon />}
        aria-label="Buscar"
        onClick={onSearch}
        colorScheme="blue"
        size="lg"
        borderRadius="full"
        boxShadow="md"
      />
    </Box>
  );
}
