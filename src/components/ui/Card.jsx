import { default as blob } from "../../assets/blob.svg";

const Card = ({ logo, name, job, duration, skills, bgColor }) => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-lg p-5 md:flex-row md:gap-12 md:text-left">
      <div className="relative top-0 left-0 w-3/4 md:w-1/2">
        <img className="relative top-0 left-0" src={blob} alt="blob" />
        <img
          className="absolute top-[43%] left-[28%] w-1/2 md:max-w-[45%]"
          src={logo}
          alt={name}
        />
      </div>
      {/* <div class="relative w-1/2">
        <div class="absolute top-0 left-0 right-0 ">
          <img src={blob} alt="blob" />
        </div>
        <div class="absolute top-[25%] left-0 right-0">
          <img className="" src={logo} alt={name} />
        </div>
      </div> */}

      <div
        data-aos-easing="ease-in-out"
        data-aos="fade-up"
        className="w-full px-9 md:flex md:flex-col"
      >
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
