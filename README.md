# DockerizedStaticSiteWithNodeJS

## Steps
- Install Docker
- Make an image (your path need to be this project folder): 
```script 
docker build -t nodejssitedemo:latest .
```
- Run this image:
```script 
docker run --name sitedemo -d -p 8080:80 nodejssitedemo:latest
```
- Reach site on {yourDockerHost}:8080

## Endpoints
- HomePage: http://{yourDockerHost}:8080
- LoginPage: http://{yourDockerHost}:8080/login
- 404 Page: http://{yourDockerHost}:8080/{anythingelse}





