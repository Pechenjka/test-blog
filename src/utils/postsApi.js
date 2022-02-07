const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(new Error(`status: ${res.status}, message: ${res.statusText}`));

class PostsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getPosts() {
    return fetch(`${this._baseUrl}`)
      .then(checkResponse)
      .then((res) => res);
  }
  getDetailPost(id) {
    return fetch(`${this._baseUrl}${id}`)
      .then(checkResponse)
      .then((res) => res);
  }
}

const postsApi = new PostsApi({
  baseUrl: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default postsApi;
