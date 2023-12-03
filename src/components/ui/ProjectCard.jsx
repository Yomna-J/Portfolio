import { HiLink } from "react-icons/hi2";
import { GoMarkGithub } from "react-icons/go";

const ProjectCard = ({
  picture,
  github = null,
  website,
  title,
  subtitle,
  description,
  tools,
  isImageOnLeft = false,
}) => {
  const orderClass = isImageOnLeft ? "" : "md:flex-row-reverse";

  return (
    <div
      className={`flex flex-col rounded-2xl bg-darkPrimary md:flex-row ${orderClass}`}
    >
      <div
        data-aos-easing="ease-in-out"
        data-aos="fade-up"
        className="flex flex-col justify-center p-8 md:w-1/2"
      >
        <div className={`flex gap-4 ${!isImageOnLeft && "justify-end"}`}>
          {github && (
            <a href={github}>
              <GoMarkGithub
                className="text-secondary hover:text-darkGray"
                size={20}
              />
            </a>
          )}
          {website && (
            <a href={website}>
              <HiLink
                className="text-secondary hover:text-darkGray"
                size={20}
              />
            </a>
          )}
        </div>
        <h1 className="py-1 text-3xl font-extrabold md:text-4xl ">{title}</h1>
        <h1 className="pb-7 text-2xl font-bold md:text-2xl ">{subtitle}</h1>
        <p>{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:py-6">
          {tools.map((tool) => (
            <img key={tool.id} alt={tool.alt} src={tool.img} />
          ))}
        </div>
      </div>
      <img
        data-aos-easing="ease-in-out"
        data-aos="fade-up"
        className="rounded-2xl md:w-1/2"
        src={picture}
        alt={title}
      />
    </div>
  );
};

export default ProjectCard;
