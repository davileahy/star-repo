
import { Box, Heading, Text, HStack, Tag, Link, Flex } from "@chakra-ui/react";

export default function RepoListItem({ repo }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} w="100%" bg="whiteAlpha.100" boxShadow="md" backdropFilter="blur(2px)" _hover={{ boxShadow: "xl", bg: "whiteAlpha.200" }} transition="all 0.2s" >
      <HStack justifyContent="space-between" flexWrap="wrap">
        <Heading size="md" wordBreak="break-all">
          <Link href={repo.html_url} isExternal color="blue.300" _hover={{ color: "blue.400", textDecoration: "underline" }}>
            {repo.full_name}
          </Link>
        </Heading>
        <Tag colorScheme="yellow" fontWeight="bold" fontSize="md">⭐ {repo.stargazers_count}</Tag>
      </HStack>
      <Text mt={2} color="gray.200" fontSize="md">{repo.description}</Text>
      {repo.topics && repo.topics.length > 0 && (
        <Flex mt={2} gap={1} wrap="nowrap" overflowX="auto" maxW="100%" pb={1} sx={{ '::-webkit-scrollbar': { height: '6px' }, '::-webkit-scrollbar-thumb': { background: '#222', borderRadius: '4px' } }}>
          {repo.topics.map((tag) => (
            <Tag key={tag} colorScheme="blue" variant="solid" fontSize="sm" px={3} py={1} whiteSpace="nowrap" borderRadius="full" _hover={{ bg: "blue.700" }}>
              {tag}
            </Tag>
          ))}
        </Flex>
      )}
    </Box>
  );
}
