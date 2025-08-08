// Bubble Sort - O(n²)
export function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i].stargazers_count < arr[i + 1].stargazers_count) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}

// MergeSort - O(n log n)
export function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const meio = Math.floor(arr.length / 2);
    const esquerda = mergeSort(arr.slice(0, meio));
    const direita = mergeSort(arr.slice(meio));
    return merge(esquerda, direita);
}

function merge(esquerda, direita) {
    let resultado = [];
    let i = 0, j = 0;
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i].stargazers_count > direita[j].stargazers_count) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}
