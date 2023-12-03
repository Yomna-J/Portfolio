import { default as Hurairah } from "../assets/hurairah.svg";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import MiniProjectCard from "./ui/MiniProjectCard";
import { default as blob } from "../assets/blob.svg";
import data from "../data";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
        title="Bookish"
        subtitle="Full-stack Bookstore"
        description="Bookish is a full-stack responsive fake online bookstore meticulously crafted for mastering TypeScript skills. This dynamic endeavor seamlessly integrates various technologies, including the Google Books API, RESTful API, and Stripe for secure payment processing, utilizing Node.js with Express.js on the backend and React on the frontend."
        picture={p5}
        github="https://github.com/Yomna-J/Bookish"
        website="https://bookish-client-one.vercel.app"
        tools={data.project3}
      />
      <ProjectCard
        title="Fast Box"
        subtitle="Landing Page"
        description="FastBox is a courier and product delivery services website. The UI is designed by uitaskteam on Figma with some adjustments made to create the mobile design."
        picture="https://github.com/Yomna-J/fastbox/raw/main/resources/demo.png"
        github="https://github.com/Yomna-J/fastbox"
        website="https://fastbox-opal.vercel.app"
        tools={data.project2}
        isImageOnLeft={true}
      />
      <ProjectCard
        title="LandGPT"
        subtitle="Landing Page"
        description="LandGPT is a project that was introduced as a solution during the SaudiChatGPT Hackathon that allows users to create websites using ChatGPT API."
        picture={p6}
        github="https://github.com/Yomna-J/SaudichatGPTHackathon-LandGPT"
        tools={data.project4}
      />
      <ProjectCard
        title="Hurairah"
        subtitle="Graduation Project"
        description="A mobile application that allows the users to find veterinary or veterinarian that matches their needs and to view all information related to each veterinary such as their services, employed veterinarians, other users’ reviews, and more. In addition to being able to create posts to communicate with the community."
        picture={Hurairah}
        tools={data.project1}
        isImageOnLeft={true}
      />
      {/* OTHER PROJECTS */}
      <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2 lg:grid-cols-4">
        {/* PROJECT CARD */}
        <MiniProjectCard
          github="https://github.com/Yomna-J/public_transport_app_Flutter"
          picture="https://github.com/Yomna-J/public_transport_app_Flutter/raw/main/ui.jpg"
          title="Public Transport Application - UI"
          description="Mobile application that allows users to check available transports and buy
          tickets"
        >
          {data.card1.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/Yomna-J/habits_tracking_app_Flutter"
          picture="https://github.com/Yomna-J/habits_tracking_app_Flutter/raw/main/ui.jpg"
          title="Habits Tracking App - UI"
          description="Mobile application that shows the user's habits and activities"
        >
          {data.card2.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
          website="https://yomna-j.github.io/YoumnaJaza-CIS201/"
          picture={p3}
          title="Basic Portfolio - UI"
          description="A simple portfolio that shows skills and certificates"
        >
          {data.card3.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
          picture={p4}
          title="Fit Gym"
          description="A website that allows users to create an account to view and register in sport courses"
        >
          {data.card4.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
      </div>
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
