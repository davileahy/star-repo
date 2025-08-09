
import { Input, InputGroup, Tag, TagCloseButton ,TagLabel, Box, Wrap, WrapItem, List, ListItem, Button } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import React, { useState } from "react";

// Lista de sugestões de tags populares (pode ser expandida)
const TAG_SUGESTOES = [
  "react", "javascript", "nodejs", "python", "api", "vite", "chakra-ui", "nextjs", "typescript", "css", "html"
];

// Componente de busca com múltiplas tags e sugestões
const GlassSearchBar = ({ onTagsChange }) => {
  // Estado para tags selecionadas
  const [tags, setTags] = useState([]);
  // Estado do input
  const [input, setInput] = useState("");
  // Estado para sugestões filtradas
  const [sugestoes, setSugestoes] = useState([]);

  // Atualiza sugestões conforme o usuário digita
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      // Sugere tags que começam com o texto digitado e não estão já selecionadas
      setSugestoes(
        TAG_SUGESTOES.filter(
          (tag) => tag.startsWith(value.toLowerCase()) && !tags.includes(tag)
        )
      );
    } else {
      setSugestoes([]);
    }
  };

  // Adiciona tag ao pressionar Enter ou clicar na sugestão
  const adicionarTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      const novasTags = [...tags, tag];
      setTags(novasTags);
      setInput("");
      setSugestoes([]);
      if (onTagsChange) onTagsChange(novasTags);
    }
  };

  // Remove tag selecionada
  const removerTag = (tagRemover) => {
    const novasTags = tags.filter((tag) => tag !== tagRemover);
    setTags(novasTags);
    if (onTagsChange) onTagsChange(novasTags);
  };

  // Ao pressionar Enter no input
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      adicionarTag(input.trim().toLowerCase());
    }
  };

  // Ao clicar em sugestão
  const handleSugestaoClick = (tag) => {
    adicionarTag(tag);
  };

  return (
    <Box maxW="500px" w="100%">
      {/* Tags selecionadas */}
      <Wrap mb={2}>
        {tags.map((tag) => (
          <WrapItem key={tag}>
            <Tag borderRadius="full" variant="solid" colorScheme="blue">
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => removerTag(tag)}/>
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
      <InputGroup
        startElement={<BiSearchAlt />}
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        borderRadius="2xl"
        bg="rgba(255, 255, 255, 0.15)"
        style={{ backdropFilter: "blur(16px) saturate(180%)" }}
        border="1.5px solid rgba(255, 255, 255, 0.25)"
        p={2}
        alignItems="center"
        position="relative"
      >
        <Input
          placeholder="Adicionar tag e pressione Enter"
          size="lg"
          borderRadius="xl"
          fontSize="xl"
          color="whiteAlpha.900"
          bg="transparent"
          _placeholder={{ color: "whiteAlpha.700" }}
          border="none"
          boxShadow="none"
          px={10}
          py={4}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
      {/* Lista de sugestões */}
      {sugestoes.length > 0 && (
        <List bg="whiteAlpha.900" color="black" borderRadius="md" mt={1} boxShadow="md" position="absolute" zIndex={10} maxW="500px">
          {sugestoes.map((tag) => (
            <ListItem
              key={tag}
              px={3}
              py={2}
              cursor="pointer"
              _hover={{ bg: "blue.100" }}
              onClick={() => handleSugestaoClick(tag)}
            >
              {tag}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default GlassSearchBar;
