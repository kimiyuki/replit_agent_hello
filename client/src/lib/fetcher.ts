export const fetcher = (url: string) => 
  fetch(url.startsWith('/api') ? `http://localhost:3000${url}` : url)
    .then((r) => r.json());
