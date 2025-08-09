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
    minHeight="100vh"
    width="100%"
    bgSize={"cover"}
    animation={animation}
    bgGradient="linear-gradient(-45deg, #15467D, #3182CE,rgb(48, 144, 212), #15467D)"
    backgroundSize="300% 300%"
  >
    {children}
  </Box>
);

export default GradientBackground;
