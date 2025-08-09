
// Função para buscar repositórios por tags usando a API do GitHub
// tags: array de strings (tags a serem pesquisadas)
// sort: critério de ordenação (ex: 'stars')
// order: 'desc' ou 'asc'
export async function buscarRepositoriosPorTags(tags = [], sort = 'stars', order = 'desc') {
	// Monta a query de pesquisa com as tags
	// Exemplo: 'topic:react topic:javascript'
	const query = tags.map(tag => `topic:${tag}`).join(' ');
	const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=${sort}&order=${order}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Erro ao buscar repositórios');
		}
		const data = await response.json();
		// Retorna apenas os itens relevantes
		return data.items || [];
		} catch {
			// Em caso de erro, retorna array vazio
			return [];
		}
}
