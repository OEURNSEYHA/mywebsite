import React from "react";
import photo from "../Image/mind.jpg";
import photo2 from "../Image/DSC_34133.jpg";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet-async";
function Page() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>{" "}
      </Helmet>
      <div
        className="w-[100%] h-full bg-gray-800 flex justify-center items-center xl:py-[111px] py-5"
        id="home"
      >
        <div className="flex flex-col sm:h-auto gap-5 md:flex md:flex-row md:justify-between md:items-center w-[1400px]  px-5 2xl:px-0 h-[100%] ">
          <div
            id="title"
            className=" w-[100%] h-49%] flex flex-col items-center  md:h-auto md:w-[50%] md:py-40 md:flex md:flex-col md:gap-2"
          >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <span className="text-[25px] md:text-[28px] lg:text-[40px] font-[300]">
              {" "}
              Hi!, I'm OEURN SEYHA
            </span>
            <span className="text-[40px] md:text-[40px]  lg:text-[60px] xl:text-[75px] font-[800]">
              {" "}
              WEB DEVELOPER
            </span>
            <span className="text-[16px] lg:text-[20px] font-[400] mb-2">
              Based in PHNOM PENH
            </span>
            <a
              href="oeurnseyha(CV).pdf"
              download="oeurnseyha(CV).pdf"
              className={
                isMobile
                  ? "bg-gray-500 text-white px-4 py-2 rounded-[25px] text-[13px]"
                  : "bg-gray-700 text-white px-4 py-2 rounded-[25px] text-[13px]"
              }
            >
              {" "}
              Download CV{" "}
            </a>
          </div>
          <div className="w-[100%] h-[50%] flex justify-center  md:h-0 md:w-[50%] md:flex md:items-center md:justify-end md:p-20">
            <img
              src={photo}
              alt=""
              className=" w-[200px] h-[200px]   md:w-[210px] md:h-[210p/x] lg:w-[350px]  lg:h-[350px] xl:w-[450px]  xl:h-[450px]  object-cover rounded-[100%] border-[10px]"
            />
          </div>
        </div>
      </div>

      {/* <div className="w-[100%] mt-20 flex flex-col gap-5" id="about">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-[18px] font-[600]"> ABOUT</span>
          <span className="text-[28px] md:text-[35px] font-[700]">
            {" "}
            Know Me More
          </span>
        </div>
        <div className="2xl:w-[1400px] w-[100%] m-auto px-5 2xl:p-0">
          <div className="flex flex-col gap-10">
            <div className="w-[100%] flex flex-col items-center md:flex md:flex-row md:justify-between gap-5">
              <div className="md:w-[70%] w-[100%] text-left">
                <span className="text-[20px] font-[400] leading-10 text-left ">
                  <span className="text-[35px] font-[400] text-left">
                    {" "}
                    Hi,{" "}
                  </span>{" "}
                  <span className=" text-[28px] text-left sm:text-[35px] font-[700] text-blue-500">
                    {" "}
                    I'm OEURN SEYHA{" "}
                  </span>{" "}
                  <br />I am a developer with a passion for website design. I
                  enjoy creating simple, clean and smooth websites that provide
                  real value to users. Not only that, I also like to analyze as
                  well as solve problems.
                </span>
              </div>
              <div className="md:w-[30%] w-[100%] flex justify-center md:justify-end items-center">
                <div className="flex flex-col items-center gap-5">
                  <div className=" w-[120px] h-[120px] bg-slate-300 rounded-[100%] flex justify-center items-center p-3">
                    <span className="text-[80px]"> 1 </span>
                  </div>
                  <span className="text-[20px] font-[600]">
                    {" "}
                    Years of Experiance{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[100%]   flex  sm:flex-row  flex-wrap justify-between gap-1 sm:gap-3">
              <div className="md:w-[15%] w-[49%] ">
                <p className=" text-[16px] sm:text-[18px] font-[600] text-slate-400">
                  Name:
                </p>
                <p className="  text-[14px] sm:text-[16px] font-[600] ">
                  OEURN SEYHA
                </p>
              </div>
              <div className="md:w-[30%] w-[49%]">
                <p className="text-[16px] sm:text-[18px]  font-[600] text-slate-400">
                  Email:
                </p>
                <p className="text-[14px] sm:text-[16px] font-[600] underline ">
                  seyhaoeurn920@gmail.com
                </p>
              </div>
              <div className="md:w-[15%] w-[49%]">
                <p className="text-[16px] sm:text-[18px]  font-[600] text-slate-400">
                  Birth Of Date:
                </p>
                <p className="text-[14px] sm:text-[16px] font-[600] ">
                  09-09-2002
                </p>
              </div>
              <div className="md:w-[15%] w-[49%]">
                <p className="text-[16px] sm:text-[18px]  font-[600] text-slate-400">
                  From:
                </p>
                <p className="text-[14px] sm:text-[16px] font-[600] ">
                  PHNOM PENH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section class=" xl:w-[1300px] mx-auto px-4 py-10 " id="about">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-gray-800 relative inline-block font-heading ">
            About Me
            <span class="absolute left-0 bottom-[-5px] h-1 w-16 bg-blue-500 rounded "></span>
          </h2>

          <p class="text-gray-500 mt-3 ">
            I am a passionate Full Stack Web Developer dedicated to building
            dynamic and scalable web applications.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="flex-shrink-0 ">
            <img
              src={photo2}
              alt=""
              class=" w-[1000px]  md:w-[370px] h-[350px] object-contain "
            />
          </div>

          <div>
            <div className=" flex flex-col items-start justify-start mb-5">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2 italic ">
                Full Stack Web Developer
              </h3>
              <span class="text-gray-500 mb-4 text-left italic">
                Skilled in JavaScript, React, Next.js, Node.js, Express, and
                TSOA..., I bring both frontend and backend expertise to every
                project I work on.
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 left-0">
              <div className=" flex flex-col justify-start items-start gap-3 ">
                <p>
                  <span class="font-semibold">Birthday:</span> 09 Setember 2002
                </p>
                <p>
                  <span class="font-semibold">Website:</span>{" "}
                  <a
                    href="https://seyhaoeurn.pages.dev"
                    target="blank"
                    class="text-blue-500"
                  >
                    https://seyhaoeurn.pages.dev
                  </a>
                </p>
                <p>
                  <span class="font-semibold">Phone:</span> 017431324
                </p>
                <p>
                  <span class="font-semibold">City:</span> Phnom Penh
                </p>
              </div>
              <div className=" flex flex-col justify-start items-start gap-3 ">
                <p>
                  <span class="font-semibold">Age:</span> 22
                </p>
                <p>
                  <span class="font-semibold">Degree:</span> Bachelor Degree
                </p>
                <p>
                  <span class="font-semibold">Email:</span>{" "}
                  <a href="mailto:email@example.com" class="text-blue-500">
                    seyhaoeurn.dev@gmail.com
                  </a>
                </p>
                <p>
                  <span class="font-semibold">Freelance:</span> Unavailable
                </p>
              </div>
            </div>

            <p class="text-gray-500 mt-5 text-left">
              I enjoy collaborating with teams to deliver innovative solutions
              and stay updated with the latest trends in web development.
              Whether working on complex backend architectures or creating
              seamless user interfaces, I am dedicated to producing high-quality
              results.
            </p>
          </div>
        </div>
      </section>

      {/* resume */}

      {/* <!-- Resume Section --> */}
      <section class="max-w-6xl mx-auto px-4 py-10" id="resume">
        {/* <!-- Header --> */}
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-gray-800">Resume</h2>
          <p class="text-gray-500 mt-2">
            I am a results-driven Full Stack Developer with a passion for
            building scalable web applications and interactive user experiences.
            With a strong foundation in JavaScript and modern frameworks, I
            specialize in developing robust applications using React, Next.js,
            Node.js, and Express. My expertise extends to database design, API
            development, and cloud integrations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Left Column --> */}
          <div>
            {/* <!-- Summary --> */}
            <div class="mb-8 ">
              <h3 class=" font-heading text-left text-2xl font-semibold text-gray-800 mb-4">
                Summary
              </h3>
              <div class="relative pl-6 flex flex-col justify-start items-start">
                <span class="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]">
                  {" "}
                </div>
                <h4 class="font-bold text-gray-800">Seyha OEURN</h4>
                <p class="text-gray-500 italic text-left">
                  Experienced Full Stack Web Developer with 2+ years of building
                  scalable web applications using modern technologies.
                </p>
                <ul class="mt-3 text-gray-700 p-0 flex flex-col items-start gap-2">
                  <li>📍 Location: Phnom Penh</li>
                  <li>📞 Phone: 017431324</li>
                  <li>📧 Email: seyhaoeurn.deve@gmail.com</li>
                </ul>
              </div>
            </div>

            {/* <!-- Education --> */}
            <div>
              <h3 class=" font-heading text-left text-2xl font-semibold text-gray-800 mb-4">
                Education
              </h3>
              <div class="relative pl-6 mb-6  ">
                <span class="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px] "></div>
                <h4 class="font-bold text-gray-800 text-left">
                  Bachelor of Computer Science
                </h4>
                <p class="text-gray-500 italic text-left">
                  Royal University of Phnom Penh, 2020 - 2024
                </p>
                <p class="text-gray-700 text-left">
                  Focused on software engineering and web application
                  development.
                </p>
              </div>
              <div class="relative pl-6 mb-6">
                <span class="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 class="font-bold text-gray-800 text-left">
                  Full Stack Developer Bootcamp 4.0
                </h4>
                <p class="text-gray-500 italic text-left">
                  Sabaicode school, 2024
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-left">
                  During the <b>Bootcamp 4.0</b> course with a team of 3
                  members. As the team lead, I was responsible for handling the
                  front-end, back-end, and DevOps. I structured the project
                  folder, divided tasks, and created a detailed product backlog.
                  The platform allows users to post, sell, or rent real estate
                  such as land, houses, and shops. Users can also create
                  accounts to manage and list their real estate properties.
                </p>
                <div className="mb-4 flex flex-col items-start">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Responsibilities:
                  </h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 p-0 m-0 flex flex-col items-start justify-start">
                    <li className=" text-left">
                      Planned and divided tasks into a structured product
                      backlog.
                    </li>
                    <li className=" text-left">
                      Designed and implemented the front-end using ReactJS and
                      Next.js.
                    </li>
                    <li className=" text-left">
                      Built the back-end with Node.js, Express.js, and TSOA.
                    </li>
                    <li className=" text-left">
                      Set up and managed the DevOps pipeline with GitHub Actions
                      and Docker.
                    </li>
                    <li className=" text-left">
                      Deployed front-end on AWS Lambda (via SST) and back-end on
                      AWS EC2 for scalability.
                    </li>
                  </ul>
                </div>
                {/* Technology Stack */}
                <div className="mb-4">
                  <h5 className="font-semibold text-left">Tech Stack:</h5>

                  <ul className="list-disc pl-6 text-gray-600 space-y-1 p-0 m-0 flex flex-col items-start justify-start">
                    <li className=" text-left">
                      {" "}
                      Front End : ReactJS, Next.js, Tailwind CSS, TypeScript
                    </li>
                    <li className=" text-left">
                      Back End : Node.js, Express.js, TSOA, MongoDB,
                      Microservices Architecture, API Proxy
                    </li>
                    <li className=" text-left">
                      Monorepo Management : Unified Codebase, Yarn Workspaces
                    </li>
                    <li className=" text-left">
                      DevOps & CI/CD:Docker, GitHub Actions, PM2, Git
                    </li>
                    <li className=" text-left">
                      Cloud & Infrastructure : AWS EC2, AWS Cognito, AWS S3, SST
                    </li>
                  </ul>
                </div>
              </div>
              <div class="relative pl-6">
                <span class="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 class="font-bold text-gray-800 text-left">High School</h4>
                <p class="text-gray-500 italic text-left">
                  Hun sen khsac kandal high school, 2017 - 2020
                </p>
                <p class="text-gray-700 text-left">
                  Graduated with a focus on mathematics, science, and
                  technology.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div>
            {/* <!-- Professional Experience --> */}
            <div className=" mb-6">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-left font-heading">
                Professional Experience
              </h3>
              <div class="relative pl-6 mb-6">
                <span class="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 class="font-bold text-gray-800 text-left">
                  Junior Web Developer
                </h4>
                <p class="text-gray-500 italic text-left">
                 Wing Bank for cambodia, 2024
                </p>
                <p className=" text-left text-gray-800 mb-2">
                  Mobile financial system
                </p>
                <ul class="mt-2 text-gray-700 list-disc pl-4">
                  <li className=" text-left">
                    Tech Stack: Java, Spring Boot ,Unit Test, Intergration test, API Test
                  </li>
                </ul>
              </div>
              <div class="relative pl-6 mb-6">
                <span class="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 class="font-bold text-gray-800 text-left">
                  Junior JavaScript Web Developer
                </h4>
                <p class="text-gray-500 italic text-left">
                  Dolpin Tek, 2022 - 2024
                </p>
                <p className=" text-left text-gray-800 mb-2">
                
                  Developed a business matching website so that every trader can
                  sell all his products, hire and reduce company work, and join
                  the merchants in the same business to share with customers...
                </p>
                <ul class="mt-2 text-gray-700 list-disc pl-4">
                  <li className=" text-left">
                    Front-End Development: Proficient in React.js and Next.js
                    for modern, responsive web applications.
                  </li>
                  <li className=" text-left">
                    Back-End Experience: Skilled in Node.js and Express for
                    building RESTful APIs and server-side logic.
                  </li>
                  <li className=" text-left">
                    Project Management: Familiar with managing GitHub projects,
                    version control, and agile-like backlogs.
                  </li>
                  <li className=" text-left">
                    Deployment & Hosting: Experience deploying static sites and
                    applications, utilizing Cloudflare for CDN and security, and
                    deploying on OnRender.
                  </li>
                  <li className=" text-left">
                    Additional Tools: Knowledge of Nodemailer for email services
                    and JSON Server for lightweight backend mock-ups.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div
        className="w-[100%] mt-20 flex flex-col gap-10 px-5 2xl:p-0 "
        id="project"
      >
        <div className="flex justify-center items-center">
          <span className="text-[28px] md:text-[30px] font-[600] uppercase">
            Project
          </span>
        </div>

        <div className="2xl:w-[1400px] m-auto w-[100%]  flex flex-wrap  lg:gap-8 xl:gap-7 gap-6 2xl:gap-7 ">
          <div className="w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
              alt=""
              className="w-full h-[70%] object-cover"
            />
            <div className="p-2 sm:p-4 line-clamp-3">
              <span className="text-[14px] sm:text-[16px] font-[500] text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </span>
            </div>
          </div>
          <div className="w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2125422/pexels-photo-2125422.jpeg?cs=srgb&dl=pexels-hassan-ouajbir-2125422.jpg&fm=jpg"
              alt=""
              className="w-full h-[70%] object-cover"
            />
            <div className="p-2 sm:p-4  line-clamp-3">
              <span className="text-[14px] sm:text-[16px] font-[500] text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </span>
            </div>
          </div>
          <div className="w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden">
            <img
              src="https://st.depositphotos.com/1400069/2827/i/600/depositphotos_28270335-stock-photo-grass-field-sunset.jpg"
              alt=""
              className="w-full h-[70%] object-cover"
            />
            <div className="p-2 sm:p-4 line-clamp-3">
              <span className="text-[14px] sm:text-[16px] font-[500] text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </span>
            </div>
          </div>
          <div className="w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595966038591-a765111f190f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
              alt=""
              className="w-full h-[70%] object-cover"
            />
            <div className="p-2 sm:p-4 line-clamp-3">
              <span className="text-[14px] sm:text-[16px] font-[500] text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-20 mb-5  w-[100%] xl:w-[1200px] m-auto font-heading" id="skill">
        <div className="flex justify-center items-center">
          <span className="text-[28px] md:text-[30px] font-[600] uppercase">
            {" "}
            My Skill{" "}
          </span>
        </div>
        <div className="2xl:w-[1400px] w-[100%] m-auto py-5 px-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap">
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2  text-white">
                HTML
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                CSS
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                TAILWIND CSS
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                BOOTSTRAP
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JAVASCRIPT
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                TYPESCRIPT
              </div>
              <div class=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JQuery
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                REACT JS
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                NEXT JS
              </div>
              
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-wrap">
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                PHP
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                AJAX
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                NODE JS
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                EXPRESS JS
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JAVA
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Spring Boot
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                MY SQL
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                MONGO DB
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                AWS
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                CI/CD
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                DOCKER
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Karate Test
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Supert Test
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Jest
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
               Junit
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-wrap">
            <div class=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Story Book
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Git
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Git Hub
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Git Lab
              </div>
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                BitBucket
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
