import React from "react";
import myphoto from "../Image/mind.jpg";
import { FaFacebookF, FaTelegram, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FacebookShareButton } from "react-share";

function Page1() {
  const shareUrl = "https://seyhaoeurn.pages.dev/aboutme";
  return (
    <>
      <div className="2xl:w-[1400px] w-[100%] h-auto m-auto flex md:flex-row flex-col gap-5 py-5 px-5 2xl:px-0">
        <div className="w-[100%] md:w-[30%] lg:w-[20%] h-fit bg-white rounded-[10px] overflow-hidden shadow-sm">
          <div className="h-[250px] relative">
            <img src={myphoto} alt="" className="w-full h-full object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#00000020] flex flex-row gap-3 items-end justify-end p-5 ">
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
                className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center text-blue-800 text-[20px]"
              >
                <FaShare className="text-white" />
              </FacebookShareButton>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start p-5 gap-5">
            <Link className="text-[16px] font-[500]"> Into</Link>
            <Link className="text-[16px] font-[500]"> Skill</Link>
            <Link className="text-[16px] font-[500]"> Project</Link>
            <Link className="text-[16px] font-[500]"> Habbit</Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[70%] lg:w-[80%] flex flex-col gap-5">
          <div className="bg-white rounded-lg p-5 flex items-start text-left text-[18px] font-[400]  flex-col gap-2">
            <span className="text-[18px] font-[500]">Intro</span>
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our moto.
            <span></span>
          </div>
          <div className="bg-white rounded-lg p-5 flex items-start text-left text-[18px] font-[400]  flex-col gap-2">
            <span className="text-[18px] font-[500]">
              Education Information
            </span>
            <table>
              <tr>
                <td className="pr-10">Colleage</td>
                <td>: HUNSEN Khsach Kandal Hight School</td>
              </tr>
              <tr>
                <td className="pr-10">University</td>
                <td>: Royal University Of Phnom Penh</td>
              </tr>
            </table>
          </div>
          <div className="bg-white rounded-lg p-5 flex items-start text-left text-[18px] font-[400]  flex-col gap-2">
            <span className="text-[18px] font-[500]">Contact</span>
            <table>
              <tr>
                <td className="pr-10 ">Email</td>
                <td>: seyhaoeurn920@gmail.com</td>
              </tr>
              <tr>
                <td className="pr-10">Tel</td>
                <td>: 017431324</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
