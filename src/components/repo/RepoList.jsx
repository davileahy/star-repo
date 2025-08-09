import { Box, VStack, Text } from "@chakra-ui/react";
import RepoListItem from "./RepoListItem";

export default function RepoList({ repos }) {
  if (!repos.length) return <Text color={"white"}>Nenhum repositório encontrado.</Text>;
  return (
    <VStack spacing={4} w="100%">
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo} />
      ))}
    </VStack>
  );
}
