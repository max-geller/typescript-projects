# **Introduction**

---

  This is a collection of TypeScript projects that I have worked on, wrapped in
  an Angular application. Each project is a separate component, and can be
  accessed by clicking on the corresponding link in the navigation bar.

  Use the sidebar to navigate to the project you want to view.

  The source code for this application can be found on [GitHub](http://github.com/max-geller/typescript-projects).

## Application Structure

This application was generated using Angular, which renders each page using a combination of Angular component(s), markdown files, and source code snippets.  The project uses npm-markdown, a library that allows Angular to parse markdown files and render them as HTML.  The source code snippets are stored in the `src/assets/projects/...` directory, and are rendered with syntax color using the `PrismJS` library.

  The application is structured as follows:

- `src/app` contains the Angular application
- `src/app/projects` contains each project packaged in Angular components
- `src/assets/projects/...` contains the project information in Markdown, as well as the source code snippets

## Application Setup

To download the application, clone the repository using git:

  ```
  git clone 
  ```

### **npm and Angular CLI**

The application can be ran using two methods: npm and docker.

  To run the application locally, clone the repository and install the dependencies. Then run `ng serve` to start the application. The application will be available at `localhost:4200`.

To install dependencies, run:

```
  npm install
```

then run:

```
  ng serve
```

## Running with Docker

This project uses Docker to containerize the application. You can learn more about Docker [here](https://www.docker.com/).

### Build Docker Image

To build the Docker image, run the following command:

    docker build -t typescript-projects .

### Run Docker Container

To run the Docker container, run the following command:

    docker run -d -p 3000:3000 typescript-projects
