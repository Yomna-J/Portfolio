import data from "../data";
import { HiOutlineDocument } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { BiPaint } from "react-icons/bi";
import { FiTool } from "react-icons/fi";

const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Skills
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center rounded-2xl bg-darkPrimary py-6 px-4">
          <BiCodeAlt className="text-darkGray" size={35} />
          <h2 className="pb-8 text-2xl font-bold text-darkGray">Languages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.languages.map((lang) => {
              return <img key={lang.id} alt={lang.alt} src={lang.img} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center rounded-2xl bg-darkPrimary py-6 px-4 ">
          <HiOutlineDocument className="text-darkGray " size={35} />
          <h2 className="pb-8 text-2xl font-bold text-darkGray">
            Libs & Frameworks
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.lib.map((lib) => {
              return <img key={lib.id} alt={lib.alt} src={lib.img} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center rounded-2xl bg-darkPrimary py-6 px-4 ">
          <BiPaint className="text-darkGray" size={35} />
          <h2 className="pb-8 text-2xl font-bold text-darkGray">Design</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.design.map((tool) => {
              return <img key={tool.id} alt={tool.alt} src={tool.img} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center rounded-2xl bg-darkPrimary py-6 px-4">
          <FiTool className="text-darkGray" size={35} />
          <h2 className="pb-8 text-2xl font-bold text-darkGray">Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.tools.map((tool) => {
              return <img key={tool.id} alt={tool.alt} src={tool.img} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
