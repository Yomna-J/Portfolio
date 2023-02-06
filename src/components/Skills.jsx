import data from "../data";
import { HiOutlineDocument } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { BiPaint } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import SkillCard from "./ui/SkillCard";

const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Skills
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <SkillCard title="Languages" tools={data.languages}>
          <BiCodeAlt className="text-secondary" size={35} />
        </SkillCard>
        <SkillCard title="Libs & Frameworks" tools={data.lib}>
          <HiOutlineDocument className="text-secondary " size={35} />
        </SkillCard>
        <SkillCard title="Design" tools={data.design}>
          <BiPaint className="text-secondary" size={35} />
        </SkillCard>
        <SkillCard title="Tools" tools={data.tools}>
          <FiTool className="text-secondary" size={35} />
        </SkillCard>
      </div>
    </div>
  );
};

export default Skills;
