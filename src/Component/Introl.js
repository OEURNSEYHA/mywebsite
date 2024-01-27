import React from "react";

function Introl() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-lg p-5 flex items-start text-left text-[18px] font-[400]  flex-col gap-2">
        <span className="text-[18px] font-[500]">Intro</span>I am a developer
        with a passion for website design. I enjoy creating simple, clean and
        smooth websites that provide real value to users. Not only that, I also
        like to analyze as well as solve problems.
        <span></span>
      </div>
      <div className="bg-white rounded-lg p-5 flex items-start text-left text-[18px] font-[400]  flex-col gap-2">
        <span className="text-[18px] font-[500]">About me</span>
        <table>
          <tr>
            <td className="pr-10">Full Name</td>
            <td>: OEURN SEYHA</td>
          </tr>
          <tr>
            <td className="pr-10">Sex</td>
            <td>: Male</td>
          </tr>
          <tr>
            <td className="pr-10"> Date of Birth </td>
            <td>: 09 september 2002</td>
          </tr>
          <tr>
            <td className="pr-10">Nationality</td>
            <td>: Khmer</td>
          </tr>
        </table>
      </div>
      <div className="bg-white rounded-lg p-5 flex items-start text-left text-[18px] font-[400]  flex-col gap-2">
        <span className="text-[18px] font-[500]">Education Information</span>
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
  );
}

export default Introl;
