import { default as Hurairah } from "../assets/hurairah.svg";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import ProjectCard from "./ui/ProjectCard";
import { HiLink } from "react-icons/hi2";
import { GoMarkGithub } from "react-icons/go";
import { default as blob } from "../assets/blob.svg";
import data from "../data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* IMPORTANT PROJECTS */}
      <div className="flex flex-col rounded-2xl bg-darkPrimary md:flex-row">
        <img
         data-aos-easing="ease-in-out" data-aos="fade-up"
          className="rounded-2xl md:w-1/2"
          src={Hurairah}
          alt="hurairah"
        />
        <div
         data-aos-easing="ease-in-out" data-aos="fade-down"
          className="flex flex-col justify-center p-8 md:w-1/2"
        >
          {/* PRIVATE REPO */}
          {/* <div className="flex justify-end gap-4">
            <a href="">
              <GoMarkGithub
                className="text-secondary hover:text-primary"
                size={20}
              />
            </a>
          
          </div> */}
          <h1 className="py-1 text-3xl font-bold text-darkGray md:text-4xl ">
            Hurairah
          </h1>
          <h1 className="pb-7 text-2xl font-bold text-darkGray md:text-2xl ">
            Graduation Project
          </h1>
          <p>
            A mobile application that allows the users to find veterinary or
            veterinarian that matches their needs and to view all information
            related to each veterinary such as their services, employed
            veterinarians, other users’ reviews, and more. In addition to being
            able to create posts to communicate with the community.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:py-6">
            {data.project1.map((tool) => {
              return <img key={tool.id} alt={tool.alt} src={tool.img} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl bg-darkPrimary md:flex-row ">
        <div
         data-aos-easing="ease-in-out" data-aos="fade-up"
          className="flex flex-col justify-center p-8 md:w-1/2"
        >
          <div className="flex gap-4">
            <a href="https://github.com/Yomna-J/fastbox">
              <GoMarkGithub
                className="text-secondary hover:text-darkGray"
                size={20}
              />
            </a>
            <a href="https://fastbox-opal.vercel.app">
              <HiLink
                className="text-secondary hover:text-darkGray"
                size={20}
              />
            </a>
          </div>
          <h1 className="py-1 text-3xl font-bold text-darkGray md:text-4xl ">
            Fast Box
          </h1>
          <h1 className="pb-7 text-2xl font-bold text-darkGray md:text-2xl ">
            Landing Page
          </h1>
          <p>
            FastBox is a courier and product delivery services website. The UI
            is designed by
            <a
              href="https://www.figma.com/@uitaskca"
              className="mx-1 font-bold hover:text-darkGray"
            >
              uitaskteam
            </a>
            on
            <a
              href="https://www.figma.com/community/file/1192719418391264734"
              className="mx-1 font-bold hover:text-darkGray"
            >
              Figma
            </a>
            with some adjustments made to create the mobile design
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:py-6">
            {data.project2.map((tool) => {
              return <img key={tool.id} alt={tool.alt} src={tool.img} />;
            })}
          </div>
        </div>
        <img
         data-aos-easing="ease-in-out" data-aos="fade-down"
          className="rounded-2xl md:w-1/2"
          src="https://github.com/Yomna-J/fastbox/raw/main/resources/demo.png"
          alt="fastbox"
        />
      </div>
      {/* OTHER PROJECTS */}
      <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2 lg:grid-cols-4">
        {/* PROJECT CARD */}
        <ProjectCard
          github="https://github.com/Yomna-J/public_transport_app_Flutter"
          picture="https://github.com/Yomna-J/public_transport_app_Flutter/raw/main/ui.jpg"
          title="Public Transport Application - UI"
          description="Mobile application that allows users to check available transports and buy
          tickets"
        >
          {data.card1.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </ProjectCard>
        <ProjectCard
          github="https://github.com/Yomna-J/habits_tracking_app_Flutter"
          picture="https://github.com/Yomna-J/habits_tracking_app_Flutter/raw/main/ui.jpg"
          title="Habits Tracking App - UI"
          description="Mobile application that shows the user's habits and activities"
        >
          {data.card2.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </ProjectCard>
        <ProjectCard
          github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
          website="https://yomna-j.github.io/YoumnaJaza-CIS201/"
          picture={p3}
          title="Basic Portfolio - UI"
          description="A simple portfolio that shows skills and certificates"
        >
          {data.card3.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </ProjectCard>
        <ProjectCard
          github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
          picture={p4}
          title="Fit Gym"
          description="A website that allows users to create an account to view and register in sport courses"
        >
          {data.card4.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </ProjectCard>
      </div>
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
