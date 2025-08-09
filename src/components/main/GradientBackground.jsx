import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Definindo a animação de gradiente
const gradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const animation = `${gradient} 10s ease infinite`;



const GradientBackground = ({ children }) => (
  <Box
    minH="100vh"
    w="100%"
    pos="absolute"
    top={0}
    left={0}
    zIndex={-1}
    overflowX="hidden"
    overflowY="hidden"
    bgSize="cover"
    animation={animation}
    bgGradient="linear-gradient(-45deg, #181C24 0%, #232946 40%, #15467D 80%, #06080cff 100%)"
    backgroundSize="300% 300%"
  >
    <Box pos="relative" minH="100vh">
      {children}
    </Box>
  </Box>
);

export default GradientBackground;
