import Card from "./ui/Card";

const Experience = () => {
  var mozn = [
    `Worked as part of a cybersecurity team responsible for identifying,
            analyzing, and resolving security incidents.`,
    `Utilized various security tools and technologies to secure the
            company's products.`,
    `Developed strong problem-solving skills by identifying, analyzing,
            and remedying security threats.`,
    `Acquired a deeper understanding of software security and the
            importance of developing secure software through my experience in
            cybersecurity.`,
    `Demonstrated strong skill in increasing the cybersecurity awareness
            of the employees`,
  ];

  var yu = [`Bachelor of science in Software Engineering`, `CGPA of: 4.0/4.0`];

  return (
    <div className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center  md:justify-between lg:max-w-7xl">
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Experience & Education
      </h1>

      {/* Card */}
      <Card
        logo="https://mozn.sa/uploads/images/mozn_gradient.svg"
        name="Mozn"
        job="Cybersecurity Intern"
        duration="Sep. 2022 - Present"
        skills={mozn}
      />
      <Card
        logo="https://yu.edu.sa/wp-content/themes/Yamamah%20University/images/yulogo.svg"
        name="YU"
        job="Software Engineering"
        duration="Sep. 2018 - Present"
        skills={yu}
      />
    </div>
  );
};

export default Experience;
