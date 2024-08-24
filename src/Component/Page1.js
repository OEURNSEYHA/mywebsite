import React from "react";
import myphoto from "../Image/mind.jpg";
import { FaFacebookF, FaTelegram, FaShare, FaGithub } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import { Helmet } from "react-helmet-async";
// import QRCode from 'qrcode.react';
function Page1() {
  const shareUrl = "https://seyhaoeurn.pages.dev/aboutme";
  // const url = "https://seyhaoeurn.pages.dev";
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta property="og:title" content="Hi!" />
        <meta property="og:description" content="Hello, my name's Seyha" />
        <meta
          property="og:image"
          content={`https://seyhaoeurn.pages.dev${myphoto}`}
        />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="profile" />
        <meta
          property="og:site_name"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="2xl:w-[1400px] w-[100%] h-auto m-auto flex md:flex-row flex-col gap-5 py-5 px-5 2xl:px-0">
        {/* <QRCode /> */}
        <div className="w-[100%] md:w-[30%] lg:w-[20%] h-fit bg-white rounded-[10px] overflow-hidden shadow-sm">
          <div className="h-[250px] relative">
            <img src={myphoto} alt="" className="w-full h-full object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#00000020] flex flex-row gap-3 items-end justify-end p-5 ">
            <Link
                to={`https://github.com/OEURNSEYHA`}
                target="blang"
                className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center text-blue-800 text-[20px]"
              >
                <FaGithub />
              </Link>
              <Link
                to={`https://www.facebook.com/seyha.oeun`}
                target="blang"
                className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center text-blue-800 text-[20px]"
              >
                <FaFacebookF />
              </Link>
              <Link
                to={`https://t.me/oeurnseyha`}
                target="blang"
                className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center text-blue-800 text-[20px]"
              >
                <FaTelegram />
              </Link>

              <FacebookShareButton
                url={shareUrl}
                quote="Please share this post"
                hashtag={myphoto}
                className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center text-blue-800 text-[20px]"
              >
                <FaShare className="text-white" />
              </FacebookShareButton>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start p-5 gap-5">
            <Link to={""} className="text-[16px] font-[500]"> Into</Link>
            <Link to={"skill"} className="text-[16px] font-[500]"> Skill</Link>
            <Link className="text-[16px] font-[500]"> Project</Link>
            <Link to={"habbit"} className="text-[16px] font-[500]"> Habbit</Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[70%] lg:w-[80%]">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default Page1;
