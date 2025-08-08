import {  Input, InputGroup } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

const GlassSearchBar = () => {
  return (
    <InputGroup
      startElement={<BiSearchAlt />}
      maxW="500px"
      w="100%"
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
        placeholder="Pesquisar"
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
      />
    </InputGroup>
  );
};

export default GlassSearchBar;
