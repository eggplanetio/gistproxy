# gistproxy

## Run locally

```bash
GITHUB_TOKEN=mytoken node index.js
```

## Run locally with Docker
```
docker pull eggplanet/gistproxy
docker run -p 3000:3000 --name gistproxy -t -e "GITHUB_TOKEN=mytoken" eggplanet/gistproxy
```

## Run in the cloud on now

```
now -e GITHUB_TOKEN=mytoken
```
