// Algoritmo de ordenação manual (Insertion Sort) para repositórios por estrelas
// direction: 'asc' | 'desc'
export function sortByStars(repos, direction = "desc") {
  const arr = [...repos];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (
      j >= 0 &&
      ((direction === "desc" &&
        arr[j].stargazers_count < key.stargazers_count) ||
        (direction === "asc" && arr[j].stargazers_count > key.stargazers_count))
    ) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
