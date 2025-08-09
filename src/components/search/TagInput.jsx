
import { HStack, Input, Tag, TagLabel, TagCloseButton, IconButton, Box, List, ListItem } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function TagInput({ tags, setTags, onFocus, onBlur, sugestoes = [] }) {
  const [input, setInput] = useState("");
  const [showSugestoes, setShowSugestoes] = useState(false);

  const addTag = (tagValue) => {
    const value = (tagValue ?? input).trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
      setInput("");
      setShowSugestoes(false);
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const filteredSugestoes = sugestoes.filter(
    (s) => s.toLowerCase().startsWith(input.toLowerCase()) && !tags.includes(s)
  );

  return (
    <Box position="relative" w="100%">
      <HStack spacing={2} w="100%">
        {tags.map((tag) => (
          <Tag key={tag} borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => removeTag(tag)} />
          </Tag>
        ))}
        <Input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSugestoes(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTag();
          }}
          onFocus={(e) => {
            setShowSugestoes(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setTimeout(() => setShowSugestoes(false), 150);
            if (onBlur) onBlur(e);
          }}
          placeholder="Adicionar tag"
          width="auto"
          bg="gray.800"
          color="white"
        />
        <IconButton
          icon={<AddIcon />}
          onClick={() => addTag()}
          aria-label="Adicionar tag"
          size="sm"
        />
      </HStack>
      {showSugestoes && filteredSugestoes.length > 0 && (
        <List position="absolute" top="100%" left={0} w="100%" bg="gray.900" color="white" borderRadius="md" boxShadow="lg" zIndex={20} mt={1} maxH="180px" overflowY="auto">
          {filteredSugestoes.map((s) => (
            <ListItem
              key={s}
              px={3}
              py={2}
              cursor="pointer"
              _hover={{ bg: "blue.700" }}
              onMouseDown={() => addTag(s)}
            >
              {s}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
