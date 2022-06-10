import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubAPI = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

//Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await githubAPI.get(`/search/users?${params}`);
  return res.data.items;
};

//get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const githubAPIUser = githubAPI.get(`/users/${login}`);
  const githubAPIRepos = githubAPI.get(`users/${login}/repos?${params}`);

  const [user, repos] = await axios.all([githubAPIUser, githubAPIRepos]);

  return { user: user.data, repos: repos.data };
};

//Get Single User
// export const getUser = async (login) => {
//   if (response.status === 404) {
//     //navigate to notfound page.
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };
