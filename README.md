# React Docker Multi-Container

An experiment in a complex multi-container Docker setup with an app using React, Express and Redis, as part of Stephen Grider's [Udemy course](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide). Ready for uploading to TravisCI and DockerHub (just replace DOCKERID/NAME in .travis.yml with the relevant IDs, and create the relevant login and password credentials in your own account for TravisCI). 

<img width="1440" alt="Screenshot 2020-02-03 at 10 45 32" src="https://user-images.githubusercontent.com/25869284/73646944-63a20500-4672-11ea-9c29-74ee0169b892.png">

Main page with example index value displayed.

To get this project running locally, follow these steps:

1) cd complex
2) docker-compose up