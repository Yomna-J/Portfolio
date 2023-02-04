import { HiLink } from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const ProjectCard = ({
  picture,
  github,
  website,
  title,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded bg-lightGray p-4">
      <div className="flex justify-end gap-4">
        {github && (
          <a href={github}>
            <HiOutlineCodeBracket
              className="text-secondary hover:text-primary"
              size={20}
            />
          </a>
        )}
        {website && (
          <a href={website}>
            <HiLink className="text-secondary hover:text-primary" size={20} />
          </a>
        )}
      </div>
      <a href={website ? website : github}>
        <img className="rounded" src={picture} alt="hurairah" />
      </a>

      <div className="md:p-1">
        <h1 className="py-3 text-xl font-bold text-secondary ">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-wrap justify-center gap-4 py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
