import React, { useEffect, useState } from "react";
import myPhoto from "../Image/image.png";
import photo2 from "../Image/DSC_34133.jpg";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

const roles: string[] = ["Full Stack Developer", "API Engineer", "QA Engineer"];
const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, index, isDeleting]);
  return (
    <>
      <div
        className="w-[100%] h-full bg-gray-800 flex justify-center items-center xl:py-[111px] py-5"
        id="home"
      >
        <div className=" bg-gray-800 flex flex-col sm:h-auto gap-5 md:flex md:flex-row md:justify-between md:items-center w-[1400px]  px-5 2xl:px-0 h-[100%] ">
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
            <div className="mt-4">
              <motion.span
                className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[55px] font-[700] text-gray-600 mt-4"
                key={currentText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className=" text-center uppercase text-[30px] md:text-[40px]  lg:text-[60px] xl:text-[50px] font-[800]">
                  {currentText}
                </span>
                <span className="animate-blink">|</span>
              </motion.span>
            </div>

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
              src={myPhoto}
              alt=""
              className=" w-[200px] h-[200px]   md:w-[210px] md:h-[210p/x] lg:w-[350px]  lg:h-[350px] xl:w-[450px]  xl:h-[450px]  object-cover rounded-[100%] border-[10px]"
            />
          </div>
        </div>
      </div>

      <section className=" xl:w-[1300px] mx-auto px-4 py-10 " id="about">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block font-heading ">
            About Me
            <span className="absolute left-0 bottom-[-5px] h-1 w-16 bg-blue-500 rounded "></span>
          </h2>

          <p className="text-gray-500 mt-3 ">
            I am a passionate Full Stack Web Developer dedicated to building
            dynamic and scalable web applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 ">
            <img
              src={photo2}
              alt=""
              className=" w-[1000px]  md:w-[370px] h-[350px] object-contain "
            />
          </div>

          <div>
            <div className=" flex flex-col items-start justify-start mb-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 italic ">
                Full Stack Web Developer
              </h3>
              <span className="text-gray-500 mb-4 text-left italic">
                Skilled in JavaScript, React, Next.js, Node.js, Express, and
                TSOA..., I bring both frontend and backend expertise to every
                project I work on.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 left-0">
              <div className=" flex flex-col justify-start items-start gap-3 ">
                <p>
                  <span className="font-semibold">Birthday:</span> 09 Setember
                  2002
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href="https://seyhaoeurn.pages.dev"
                    target="blank"
                    className="text-blue-500"
                  >
                    https://seyhaoeurn.pages.dev
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> 017431324
                </p>
                <p>
                  <span className="font-semibold">City:</span> Phnom Penh
                </p>
              </div>
              <div className=" flex flex-col justify-start items-start gap-3 ">
                <p>
                  <span className="font-semibold">Age:</span> 22
                </p>
                <p>
                  <span className="font-semibold">Degree:</span> Bachelor Degree
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:email@example.com" className="text-blue-500">
                    seyhaoeurn.dev@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Freelance:</span> Unavailable
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-5 text-left">
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
      <section className="max-w-6xl mx-auto px-4 py-10" id="resume">
        {/* <!-- Header --> */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Resume</h2>
          <p className="text-gray-500 mt-2">
            I am a results-driven Full Stack Developer with a passion for
            building scalable web applications and interactive user experiences.
            With a strong foundation in JavaScript and modern frameworks, I
            specialize in developing robust applications using React, Next.js,
            Node.js, and Express. My expertise extends to database design, API
            development, and cloud integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Left Column --> */}
          <div>
            {/* <!-- Summary --> */}
            <div className="mb-8 ">
              <h3 className=" font-heading text-left text-2xl font-semibold text-gray-800 mb-4">
                Summary
              </h3>
              <div className="relative pl-6 flex flex-col justify-start items-start">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]">
                  {" "}
                </div>
                <h4 className="font-bold text-gray-800">Seyha OEURN</h4>
                <p className="text-gray-500 italic text-left">
                  Experienced Full Stack Web Developer with 2+ years of building
                  scalable web applications using modern technologies.
                </p>
                <ul className="mt-3 text-gray-700 p-0 flex flex-col items-start gap-2">
                  <li>📍 Location: Phnom Penh</li>
                  <li>📞 Phone: 017431324</li>
                  <li>
                    📧 Email:{" "}
                    <a
                      href="mailto:email@example.com"
                      className="text-blue-500"
                    >
                      seyhaoeurn.dev@gmail.com
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Education --> */}
            <div>
              <h3 className=" font-heading text-left text-2xl font-semibold text-gray-800 mb-4">
                Education
              </h3>
              <div className="relative pl-6 mb-6  ">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px] "></div>
                <h4 className="font-bold text-gray-800 text-left">
                  Bachelor of Computer Science
                </h4>
                <p className="text-gray-500 italic text-left">
                  Royal University of Phnom Penh, 2020 - 2024
                </p>
                <p className="text-gray-700 text-left">
                  Focused on software engineering and web application
                  development.
                </p>
              </div>
              <div className="relative pl-6 mb-6">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 className="font-bold text-gray-800 text-left">
                  Full Stack Developer Bootcamp 4.0
                </h4>
                <p className="text-gray-500 italic text-left">
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
              <div className="relative pl-6">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 className="font-bold text-gray-800 text-left">
                  High School
                </h4>
                <p className="text-gray-500 italic text-left">
                  Hun sen khsac kandal high school, 2017 - 2020
                </p>
                <p className="text-gray-700 text-left">
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left font-heading">
                Professional Experience
              </h3>
              <div className="relative pl-6 mb-6">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 className="font-bold text-gray-800 text-left">
                  QA Engineer
                </h4>
                <p className="text-gray-500 italic text-left">
                  Wing Bank for cambodia, 2024
                </p>
                <p className=" text-left text-gray-800 mb-2">
                  Mobile financial system
                </p>
                <ul className="mt-2 text-gray-700 list-disc pl-4">
                  <li className=" text-left">
                    As a QA Engineer, I worked on ensuring the{" "}
                    <b>functionality</b>, <b>security</b>, <b>performance</b>,
                    and <b>reliability</b> of banking applications by
                    implementing test automation and validation strategies. I
                    utilized tools such as Robot Framework, Selenium, JMeter,
                    Postman, and Karate to conduct thorough API, UI, and
                    performance testing.
                  </li>
                </ul>
              </div>
              <div className="relative pl-6 mb-6">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 className="font-bold text-gray-800 text-left">
                  Web Developer Apprentice
                </h4>
                <p className="text-gray-500 italic text-left">
                  Wing Bank for cambodia, 2024
                </p>
                <p className=" text-left text-gray-800 mb-2">
                  Mobile financial system
                </p>
                <ul className="mt-2 text-gray-700 list-disc pl-4">
                  <li className=" text-left">
                    Backend Development: During my apprenticeship at a bank, I
                    contributed to the development of a mobile banking system
                    API (Payment Limit), enabling customers to set transaction
                    limits using FaceID and PIN. The system ensures secure,
                    service-specific threshold management for a seamless banking
                    experience.
                  </li>
                  <li className=" text-left">
                    Automation Testing Performed automation testing on the App
                    Wing eKYC solution, validating API fields and ensuring
                    compliance with security standards to enhance system
                    reliability and data protection.
                  </li>
                </ul>
              </div>
              <div className="relative pl-6 mb-6">
                <span className="absolute text-left left-0 top-1.5 w-4 h-4 border-[2px] border-blue-600  rounded-full"></span>
                <div className="h-full  w-[2px] bg-blue-600  absolute left-[7px] top-[22px]"></div>
                <h4 className="font-bold text-gray-800 text-left">
                  Junior JavaScript Web Developer
                </h4>
                <p className="text-gray-500 italic text-left">
                  Dolpin Tek, 2022 - 2024
                </p>
                <p className=" text-left text-gray-800 mb-2">
                  Developed a business matching website so that every trader can
                  sell all his products, hire and reduce company work, and join
                  the merchants in the same business to share with customers...
                </p>
                <ul className="mt-2 text-gray-700 list-disc pl-4">
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

      <div
        className="mt-20 mb-5  w-[100%] xl:w-[1200px] m-auto font-heading"
        id="skill"
      >
        <div className="flex justify-center items-center">
          <span className="text-[28px] md:text-[30px] font-[600] uppercase">
            {" "}
            My Skill{" "}
          </span>
        </div>
        <div className="2xl:w-[1400px] w-[100%] m-auto py-5 px-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap">
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2  text-white">
                HTML
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                CSS
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                TAILWIND CSS
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                BOOTSTRAP
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JAVASCRIPT
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                TYPESCRIPT
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JQuery
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                REACT JS
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                NEXT JS
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-wrap">
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                PHP
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                AJAX
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                NODE JS
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                EXPRESS JS
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JAVA
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Spring Boot
              </div>
              <div className="  uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                MY SQL
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                MONGO DB
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                AWS
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                CI/CD
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                DOCKER
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Karate Test
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Supert Test
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Jest
              </div>
              <div className=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Junit
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                JMETER
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Selenium
              </div>
              <div className="uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                ROBOT FRAMEWORK
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-wrap">
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Story Book
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Git
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Git Hub
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Git Lab
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                BitBucket
              </div>
              <div className=" uppercase border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                Appium
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
