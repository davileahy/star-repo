import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import GlassSearchBar from "../components/main/GlassSearchBar";

import logo from "../assets/logo.png"; 
import GradientBackground from "../components/main/GradientBackground";

const Home = () => {
  return (
    <GradientBackground>
      <Image src={logo} alt="logo star-repo" boxSize={"200px"}/>

      <Box 
        minH="auto"
        w={"100vw"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        
        <Flex justifyContent="center" alignItems="center" w="100%">
          <GlassSearchBar />
        </Flex>

      </Box>
    </GradientBackground>
  );
};

export default Home;
