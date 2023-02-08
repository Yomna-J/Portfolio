const SkillCard = ({ title, tools, children }) => {
  return (
    <div
      data-aos-easing="ease-in-out"
      data-aos="zoom-in"
      className="flex flex-col items-center rounded-2xl bg-darkPrimary py-6 px-4"
    >
      {children}
      <h2 className="pb-8 text-2xl font-bold text-secondary">{title}</h2>
      {/* <ReactTypingEffect
        speed="400"
        typingDelay="150"
        eraseDelay="6000"
        className="pb-8 text-2xl font-bold text-secondary"
        text={title}
      /> */}
      {/* ICON */}
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => {
          return <img key={tool.id} alt={tool.alt} src={tool.img} />;
        })}
      </div>
    </div>
  );
};

export default SkillCard;
