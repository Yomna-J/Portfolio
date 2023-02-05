const Card = ({ logo, name, job, duration, skills, bgColor }) => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-lg bg-lightGray p-11 md:flex-row md:gap-12 md:text-left">
      <img className="w-1/2 md:max-w-[20%]" src={logo} alt={name} />
      <div className="w-full md:flex md:flex-col">
        <h2 className="text-xl font-bold">{job}</h2>
        <h2 className="text-xl">{duration}</h2>
        <hr className="my-3 bg-primary text-primary" />
        <ul className="list-disc text-left">
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
