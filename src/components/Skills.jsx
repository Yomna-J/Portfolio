import data from "../data";
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
        <div className="flex  flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-4 ">
          <h2 className="py-2 text-xl font-bold">Languages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.languages.map((lang) => {
              return <img key={lang.id} alt={lang.alt} src={lang.img} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-4 ">
          <h2 className="py-2 text-xl font-bold">Libraries & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.lib.map((lib) => {
              return <img key={lib.id} alt={lib.alt} src={lib.img} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-4 ">
          <h2 className=" text-xl font-bold">Design</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.design.map((tool) => {
              return <img key={tool.id} alt={tool.alt} src={tool.img} />;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-3 ">
          <h2 className="py-2 text-xl font-bold">Tools</h2>
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
