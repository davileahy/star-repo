

import { Box, Flex, Image, VStack, useToast, Text, IconButton } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

import { InfoOutlineIcon } from "@chakra-ui/icons";
import InfoModal from "../components/main/InfoModal";

import GradientBackground from "../components/main/GradientBackground";
import SearchBar from "../components/search/SearchBar";
import RepoList from "../components/repo/RepoList";
import Pagination from "../components/repo/Pagination";
import { buscarRepositoriosPorTags } from "../api/github";
import { sortByStars } from "../algorithms/sortByStars";

const PER_PAGE = 10;


const Home = () => {
  const [tags, setTags] = useState([]);
  const [order, setOrder] = useState("desc");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const toast = useToast();
  const [modalOpen, setModalOpen] = useState(true);

  // Modal fecha sozinho após 5s
  useEffect(() => {
    if (modalOpen) {
      const timer = setTimeout(() => setModalOpen(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  // Busca repositórios populares caso não haja tags
  const fetchPopularRepos = async () => {
    setLoading(true);
    setPage(1);
    try {
      // Busca os repositórios mais populares do GitHub
      const response = await fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc');
      const data = await response.json();
      const sorted = sortByStars(data.items || [], order);
      setRepos(sorted);
      setTotalPages(Math.ceil(sorted.length / PER_PAGE));
    } catch {
      toast({ title: "Erro ao buscar repositórios populares.", status: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (tags.length === 0) {
      fetchPopularRepos();
      return;
    }
    setLoading(true);
    setPage(1);
    try {
      const data = await buscarRepositoriosPorTags(tags, "stars", order);
      const sorted = sortByStars(data, order);
      setRepos(sorted);
      setTotalPages(Math.ceil(sorted.length / PER_PAGE));
    } catch {
      toast({ title: "Erro ao buscar repositórios.", status: "error" });
    } finally {
      setLoading(false);
    }
  };
  // Busca populares ao carregar a página
  useEffect(() => {
    fetchPopularRepos();
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  // Paginação dos repositórios
  const paginatedRepos = repos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <GradientBackground>
      <Flex direction="column" align="center" justify="flex-start" w="100%" minH="100vh" pt={[8, 12, 16]}>
        {/* Logo e botão de info */}
        <Box w="100%" display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Image src={logo} alt="logo star-repo" boxSize={["150px","200px","300px"]} mx="auto" />
        </Box>
        {/* Barra de pesquisa centralizada */}
          <IconButton
            icon={<InfoOutlineIcon boxSize={6} />}
            aria-label="Informações"
            ml={4}
            mt={[0, 2, 4]}
            colorScheme="whiteAlpha"
            variant="ghost"
            onClick={() => setModalOpen(true)}
          />
        <Box w="100%" maxW="600px" px={[2, 4, 0]} mb={6}>
          <SearchBar
            tags={tags}
            setTags={setTags}
            onSearch={handleSearch}
            order={order}
            setOrder={setOrder}
          />
        </Box>
        {/* Funções/resultados abaixo da barra de pesquisa */}
        <Box w="100%" maxW="700px" minH="400px" px={[2, 4, 0]}>
          {loading ? (
            <Text color="gray.300" fontSize="xl" textAlign="center">Carregando...</Text>
          ) : (
            <RepoList repos={paginatedRepos} />
          )}
        </Box>
        <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
        <InfoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </Flex>
    </GradientBackground>
  );
};

export default Home;
