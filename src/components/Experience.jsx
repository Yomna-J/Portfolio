import Card from "./ui/Card";
import { default as moznLogo } from "../assets/mozn.svg";

const Experience = () => {
  var mozn = [
    `Collaborated with the development team to ensure secure software development practices.`,
    `Implemented security controls and conducted penetration testing.`,
    `Developed and maintained secure coding standards and guidelines.`,
    `Contributed to the design and implementation of secure software architectures.`,
    `Integrated security into the CI/CD pipeline.`,
    `Conducted threat modeling and risk assessments.`,
    `Recommended security tools and technologies for enhanced security.`,
    `Drove cybersecurity awareness initiatives, including graphic design for awareness posts using Figma.`,
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

      {/* Card */}
      <Card
        logo={moznLogo}
        name="Mozn"
        job="Cybersecurity Analyst"
        duration="Apr. 2023 - Present"
        skills={mozn}
      />
      <Card
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
