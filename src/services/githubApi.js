export async function fetchReposByTag(tag) {
    const url = `https://api.github.com/search/repositories?q=topic:${tag}&per_page=20`;
    const response = await fetch(url, {
        headers: { "User-Agent": "React-App" }
    });
    const data = await response.json();
    return data.items || [];
}
