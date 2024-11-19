export const fetcher = (url: string) => 
  fetch(url.startsWith('/api') ? url : url)
    .then((r) => r.json());
