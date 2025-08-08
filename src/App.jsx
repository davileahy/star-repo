import React, { useState } from "react";
import { bubbleSort, mergeSort } from "./algorithms/sort";
import { fetchReposByTag } from "./services/githubApi";
import RepoList from "./components/RepoList";

function App() {
  const [tag, setTag] = useState("");
  const [reposBubble, setReposBubble] = useState([]);
  const [reposMerge, setReposMerge] = useState([]);
  const [timeBubble, setTimeBubble] = useState(0);
  const [timeMerge, setTimeMerge] = useState(0);
  const [loading, setLoading] = useState(false);

  async function buscarRepos() {
    if (!tag) return;
    setLoading(true);

    try {
      const repos = await fetchReposByTag(tag);

      // Bubble Sort
      let bubbleArray = [...repos];
      let startBubble = performance.now();
      bubbleArray = bubbleSort(bubbleArray);
      let endBubble = performance.now();

      // MergeSort
      let mergeArray = [...repos];
      let startMerge = performance.now();
      mergeArray = mergeSort(mergeArray);
      let endMerge = performance.now();

      setReposBubble(bubbleArray);
      setReposMerge(mergeArray);
      setTimeBubble((endBubble - startBubble).toFixed(4));
      setTimeMerge((endMerge - startMerge).toFixed(4));

    } catch (error) {
      console.error("Erro:", error);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Pesquisa de Repositórios do GitHub</h1>
      <input
        type="text"
        placeholder="Digite a tag (ex: IA)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        style={{ padding: "8px" }}
      />
      <button onClick={buscarRepos} style={{ padding: "8px", marginLeft: "10px" }}>
        Buscar
      </button>

      {loading && <p>Carregando...</p>}

      {!loading && reposBubble.length > 0 && (
        <>
          <RepoList title="Bubble Sort (O(n²))" time={timeBubble} repos={reposBubble} />
          <RepoList title="MergeSort (O(n log n))" time={timeMerge} repos={reposMerge} />
        </>
      )}
    </div>
  );
}

export default App;
