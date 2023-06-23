const fetchApi = (input: RequestInfo, init?: RequestInit) => {
  if (typeof input !== "string") return fetch(input, init);

  return fetch(`${process.env["NEXT_PUBLIC_API_URL"]}${input}`, init);
};

export default fetchApi;
