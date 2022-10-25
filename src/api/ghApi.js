// base url https://api.github.com
// serch start user https://api.github.com/users/natatashkin
import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

const getCurrentUser = async name => {
  const { data } = await axios.get(`/users/${name}`);
  return data;
};

export { getCurrentUser };

// {
//   "login": "Natatashkin",
//   "id": 65089155,
//   "node_id": "MDQ6VXNlcjY1MDg5MTU1",
//   "avatar_url": "https://avatars.githubusercontent.com/u/65089155?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Natatashkin",
//   "html_url": "https://github.com/Natatashkin",
//   "followers_url": "https://api.github.com/users/Natatashkin/followers",
//   "following_url": "https://api.github.com/users/Natatashkin/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Natatashkin/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Natatashkin/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Natatashkin/subscriptions",
//   "organizations_url": "https://api.github.com/users/Natatashkin/orgs",
//   "repos_url": "https://api.github.com/users/Natatashkin/repos",
//   "events_url": "https://api.github.com/users/Natatashkin/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Natatashkin/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Nataliia Semeshenko",
//   "company": null,
//   "blog": "",
//   "location": "Ukraine",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 67,
//   "public_gists": 0,
//   "followers": 17,
//   "following": 18,
//   "created_at": "2020-05-09T19:13:50Z",
//   "updated_at": "2022-10-21T16:01:58Z"
//   }
