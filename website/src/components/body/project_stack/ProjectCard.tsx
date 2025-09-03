export interface ProjectCardProperties {
  title: string;
  description: string;
  thumbnail: string;
}

function ProjectCard({ title, description, thumbnail }: ProjectCardProperties) {
  return (
    <div
      className={`project-card group`}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <h2 className="project-card-title">{title}</h2>
      <p className="project-card-description custom-scrollbar max-md:hidden">
        {description}
      </p>
    </div>
  );
}

export default ProjectCard;
