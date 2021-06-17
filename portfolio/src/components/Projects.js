const Projects = ({projects}) => {
    return (
      <div>
        {projects.map(project => (
            <section>
                <h3>{project.title}</h3>
                <p>{project.info}</p>
                <a href={project.url}>View {project.title} live!</a>
                <a href={project.repo}>{project.title} on Github!</a>
            </section>
        ))}
      </div>
    );
  }
  
  export default Projects;
  