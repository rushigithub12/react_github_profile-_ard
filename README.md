
# React GitHub Card

As a part of Dice's assessment, created GitHub Repos card using GitHub API.


## Demo

Insert gif or link to demo

Deployed on Vercel checkout the link below

https://react-github-profile-card.vercel.app
## Installation

Install my-project with npm

```bash
  git clone 
  npm install 
  cd react-github-card
  npm start
```
    
## Deployment

To deploy this project run

```bash
  npm run build
```


## API Reference

#### Get all items

```http
  GET https://api.github.com
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /users/${githubprofilename}/repos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `githubusername`      | `string` | **Required**. username of item to fetch |

#### fetch(URL)

Fetch github repos and show in a card

