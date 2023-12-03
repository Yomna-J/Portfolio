import { HiLink } from "react-icons/hi2";
import { GoMarkGithub } from "react-icons/go";

const MiniProjectCard = ({
  picture,
  github,
  website,
  title,
  description,
  children,
}) => {
  return (
    <div
      data-aos-easing="ease-in-out"
      data-aos="zoom-in"
      className="flex flex-col justify-between rounded-2xl bg-darkPrimary p-4 "
    >
      <a href={website ? website : github}>
        <img className="rounded-2xl" src={picture} alt="hurairah" />
      </a>

      <h1 className="py-3 text-xl font-bold ">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-wrap justify-center gap-4 py-4">{children}</div>

      <div className="flex justify-end gap-4">
        {website && (
          <a href={website}>
            <HiLink className="text-secondary hover:text-darkGray" size={20} />
          </a>
        )}
        {github && (
          <a href={github}>
            <GoMarkGithub
              className="text-secondary hover:text-darkGray"
              size={20}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default MiniProjectCard;
