import ExperienceCard from "./ui/ExperienceCard";
import { default as moznLogo } from "../assets/mozn.svg";

const Experience = () => {
  var mozn = [
    "Collaborated with the development team to ensure secure software development practices.",
    "Developed and maintained secure coding standards and guidelines.",
    "Integrated security into CI/CD pipelines for enhanced software security.",
    "Conducted static security testing, promptly addressing vulnerabilities.",
    "Contributed to ISO27001 and SAMA cybersecurity policies, emphasizing secure software practices.",
    "Managed cybersecurity awareness and ensured third-party security compliance.",
  ];

  var yu = [`Bachelor of science in Software Engineering`, `CGPA of: 4.0/4.0`];

  return (
    <div
      id="experience"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center  md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Experience & Education
      </h1>

      {/* Experience Cards */}
      <ExperienceCard
        logo={moznLogo}
        name="Mozn"
        job="Cybersecurity Analyst"
        duration="Apr. 2023 - Present"
        skills={mozn}
      />
      <ExperienceCard
        logo="https://yu.edu.sa/wp-content/themes/Yamamah%20University/images/yulogo.svg"
        name="YU"
        job="Software Engineering"
        duration="Sep. 2018 - Apr. 2023"
        skills={yu}
      />
    </div>
  );
};

export default Experience;
