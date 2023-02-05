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
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Java&color=orange&logo=Java&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Python&color=3776AB&logo=python&logoColor=FFFFFF"
            />
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
              src="https://img.shields.io/static/v1?label=&message=CSS3&color=1572B6&logo=css3&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Dart&color=0175C2&logo=dart&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=C Sharp&color=239120&logo=C Sharp&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=PHP&color=777BB4&logo=php&logoColor=FFFFFF"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-4 ">
          <h2 className="py-2 text-xl font-bold">Libraries & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Flutter&color=02569B&logo=flutter&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=React Js&color=61DAFB&logo=React&logoColor=000000"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Redux&color=764ABC&logo=Redux&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=MUI&color=007FFF&logo=MUI&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Bootstrap&color=7952B3&logo=bootstrap&logoColor=FFFFFF"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-4 ">
          <h2 className=" text-xl font-bold">Design</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Blender&color=F5792A&logo=blender&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Adobe XD&color=FF61F6&logo=adobe xd&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Figma&color=F24E1E&logo=figma&logoColor=FFFFFF"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 rounded bg-lightGray p-10 hover:border-2 hover:border-primary md:p-3 ">
          <h2 className="py-2 text-xl font-bold">Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Firebase Cloud Messaging&color=FFCA28&logo=Firebase&logoColor=000000"
            />

            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Bash&color=4EAA25&logo=GNUbash&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=MySQL&color=4479A1&logo=mysql&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=phpMyAdmin&color=6C78AF&logo=phpmyadmin&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Snyk&color=4C4A73&logo=Snyk&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Linux&color=FCC624&logo=linux&logoColor=000000"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Unity&color=000000&logo=unity&logoColor=FFFFFF"
            />
            <img
              alt="tool"
              src="https://img.shields.io/static/v1?label=&message=Android Studio&color=3DDC84&logo=Android Studio&logoColor=FFFFFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
