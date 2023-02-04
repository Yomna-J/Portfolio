import { default as Hurairah } from "../assets/hurairah.svg";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import ProjectCard from "./ui/ProjectCard";
import { HiLink } from "react-icons/hi2";
import { GoMarkGithub } from "react-icons/go";
import { default as blob } from "../assets/blob.svg";

const Projects = () => {
  return (
    <div className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl">
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* IMPORTANT PROJECTS */}
      <div className="flex flex-col rounded bg-primary md:flex-row">
        <img className="rounded md:w-1/2" src={Hurairah} alt="hurairah" />
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          {/* PRIVATE REPO */}
          {/* <div className="flex justify-end gap-4">
            <a href="">
              <GoMarkGithub
                className="text-secondary hover:text-primary"
                size={20}
              />
            </a>
           
          </div> */}
          <h1 className="py-2 text-3xl font-bold text-secondary md:text-4xl ">
            Hurairah
          </h1>
          <h1 className="text-2xl font-bold text-secondary md:text-2xl ">
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
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Flutter&color=02569B&logo=flutter&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Dart&color=0175C2&logo=dart&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=PHP&color=777BB4&logo=php&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Xampp&color=FB7A24&logo=Xampp&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=phpMyAdmin&color=6C78AF&logo=phpmyadmin&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Firebase Cloud Messaging&color=FFCA28&logo=Firebase&logoColor=000000"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Android Studio&color=3DDC84&logo=Android Studio&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=MySQL&color=4479A1&logo=mysql&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Adobe XD&color=FF61F6&logo=adobe xd&logoColor=FFFFFF"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded bg-primary md:flex-row ">
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <div className="flex gap-4">
            <a href="https://github.com/Yomna-J/fastbox">
              <GoMarkGithub
                className="text-secondary hover:text-primary"
                size={20}
              />
            </a>
            <a href="https://fastbox-opal.vercel.app">
              <HiLink className="text-secondary hover:text-primary" size={20} />
            </a>
          </div>
          <h1 className="py-2 text-3xl font-bold text-secondary md:text-4xl ">
            FastBox
          </h1>
          <h1 className="text-2xl font-bold text-secondary md:text-2xl ">
            Landing Page
          </h1>
          <p>
            FastBox is a courier and product delivery services website. The UI
            is designed by
            <a
              href="https://www.figma.com/@uitaskca"
              className="mx-1 text-darkGray hover:text-secondary"
            >
              uitaskteam
            </a>
            on
            <a
              href="https://www.figma.com/community/file/1192719418391264734"
              className="mx-1 text-darkGray hover:text-secondary"
            >
              Figma
            </a>
            with some adjustments made to create the mobile design
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:py-6">
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=React Js&color=61DAFB&logo=React&logoColor=000000"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=MUI&color=007FFF&logo=MUI&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Figma&color=F24E1E&logo=figma&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Vercel&color=000000&logo=vercel&logoColor=FFFFFF"
            />
          </div>
        </div>
        <img
          className="rounded md:w-1/2"
          src="https://github.com/Yomna-J/fastbox/raw/main/resources/demo.png"
          alt="fastbox"
        />
      </div>
      {/* OTHER PROJECTS */}
      <div className="flex">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* PROJECT CARD */}
          <ProjectCard
            github="https://github.com/Yomna-J/public_transport_app_Flutter"
            picture="https://github.com/Yomna-J/public_transport_app_Flutter/raw/main/ui.jpg"
            title="Public Transport Application - UI"
            description="Mobile application that allows users to check available transports and buy
          tickets"
          >
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Flutter&color=02569B&logo=flutter&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Dart&color=0175C2&logo=dart&logoColor=FFFFFF"
            />
          </ProjectCard>
          <ProjectCard
            github="https://github.com/Yomna-J/habits_tracking_app_Flutter"
            picture="https://github.com/Yomna-J/habits_tracking_app_Flutter/raw/main/ui.jpg"
            title="Habits Tracking App - UI"
            description="Mobile application that shows the user's habits and activities"
          >
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Flutter&color=02569B&logo=flutter&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Dart&color=0175C2&logo=dart&logoColor=FFFFFF"
            />
          </ProjectCard>
          <ProjectCard
            github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
            website="https://yomna-j.github.io/YoumnaJaza-CIS201/"
            picture={p3}
            title="Basic Portfolio - UI"
            description="A simple portfolio that shows skills and certificates"
          >
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=JavaScript&color=F7DF1E&logo=JavaScript&logoColor=000000"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=HTML5&color=E34F26&logo=html5&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Bootstrap&color=7952B3&logo=bootstrap&logoColor=FFFFFF"
            />
          </ProjectCard>
          <ProjectCard
            github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
            picture={p4}
            title="Fit Gym"
            description="A website that allows users to create an account to view and register in sport courses"
          >
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=JavaScript&color=F7DF1E&logo=JavaScript&logoColor=000000"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=PHP&color=777BB4&logo=php&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=HTML5&color=E34F26&logo=html5&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=MySQL&color=4479A1&logo=mysql&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Bootstrap&color=7952B3&logo=bootstrap&logoColor=FFFFFF"
            />
          </ProjectCard>
        </div>
      </div>
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
