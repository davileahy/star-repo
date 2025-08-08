import { Box, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import GlassSearchBar from "../components/main/GlassSearchBar";

import logo from "../assets/logo.png"; 

const Home = () => {
  return (
    <Box minH="100vh" w={"100vw"} bgGradient="linear(to-br, #232526, #414345)">
      <Image src={logo} alt="logo star-repo" boxSize={"200px"} />
      <Flex justifyContent="center" alignItems="center" w="100%">
        <GlassSearchBar />
      </Flex>
    </Box>
  );
};

export default Home;
