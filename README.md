# Portfolio Website

### Online portfolio showcasing some of my projects and skills

It is expected that entry-level developers have an online portfolio that allows potential employers and recruiters to have clear information on a candidate's skills, experience and contact details. 

This site was containerised with Docker and then deployed on an AWS EC2 instance. 

### Technologies Used:
* HTML / CSS / JavaScript
* ReactJS 17.0.2
* Tailwind CSS 6.3.0
* Node 14.18.1 / Express 4.17.1
* Docker 20.10.8

### The app can be viewed live [here](http://www.danielghazvinie.com/).

### Running the app locally:
```
$ docker build -t portfolio-site:local .
$ docker run -d -p 3000:8080 portfolio-site:local
```

The app will now be available on http://localhost:3000