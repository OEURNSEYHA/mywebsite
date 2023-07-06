import React,{useRef} from 'react'
import photo from'../Image/mind.jpg'
import { Link } from 'react-router-dom';
// import {useTypewriter} from're

function Page() {
  
  return (
    <>
   
   <div className='w-[100%] h-auto bg-sky-200 flex justify-center items-center xl:py-[111px] py-5' id='home'>
      <div className='flex flex-col h-auto gap-5 md:flex md:flex-row md:justify-between md:items-center w-[1400px]  px-5 2xl:px-0'>
        <div className='w-[100%] h-49%] flex flex-col items-center  md:h-auto md:w-[50%] md:py-40 md:flex md:flex-col md:gap-2'>
          <h1 className='text-[25px] md:text-[28px] lg:text-[40px] font-[300]'> Hi!, I'm  OEURN SEYHA</h1>
          <span className='text-[40px] md:text-[40px]  lg:text-[60px] xl:text-[75px] font-[800]'> WEB DEVELOPER</span>
          <span className='text-[16px] lg:text-[20px] font-[400] mb-2'>Based in  PHNOM PENH</span>
          <a href='seyha.pdf' download='seyha.pdf' 
          className=' bg-gray-700 text-white px-4 py-2 rounded-[25px] text-[13px]'
        
          >Download CV</a>
          
        </div>
        <div className='w-[100%] h-[50%] flex justify-center  md:h-0 md:w-[50%] md:flex md:items-center md:justify-end md:p-20'>
          <img src={photo} alt='' className=' w-[200px] h-[200px]   md:w-[210px] md:h-[210p/x] lg:w-[350px]  lg:h-[350px] xl:w-[450px]  xl:h-[450px]  object-cover rounded-[100%] border-[10px]'/>
        </div>
      </div>
    </div>

    <div className='w-[100%] mt-20 flex flex-col gap-5' id='about'>
      <div className='flex flex-col gap-2 items-center'>
        <span className='text-[18px] font-[600]'> ABOUT</span>
        <span  className='text-[28px] md:text-[35px] font-[700]'> Know Me More</span>
      </div>
      <div className='2xl:w-[1400px] w-[100%] m-auto px-5 2xl:p-0'>

        <div className='flex flex-col gap-10'>

          <div className='w-[100%] flex flex-col items-center md:flex md:flex-row md:justify-between gap-5'>
            <div className='md:w-[70%] w-[100%] text-left'>  
              <span className='text-[20px] font-[400] leading-10 text-left '>
              <span className='text-[35px] font-[400] text-left'>  Hi, </span> <span className=' text-[28px] text-left sm:text-[35px] font-[700] text-blue-500'> I'm OEURN SEYHA </span> <br/>
              I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
              </span>
            </div>
            <div className='md:w-[30%] w-[100%] flex justify-center md:justify-end items-center'>
              <div className='flex flex-col items-center gap-5'>
                  <div className=' w-[120px] h-[120px] bg-slate-300 rounded-[100%] flex justify-center items-center p-3'>
                    <span className='text-[80px]'> 1 </span>
                  </div>
                  <span className='text-[20px] font-[600]'> Years of Experiance </span>
              </div>
              
            </div>
          </div>

          <div className='w-[100%]   flex  sm:flex-row  flex-wrap justify-between gap-1 sm:gap-3'>
            <div className='md:w-[15%] w-[49%] '> 
              <p className=' text-[16px] sm:text-[18px] font-[600] text-slate-400'>Name:</p>
              <p className='  text-[14px] sm:text-[16px] font-[600] '>OEURN SEYHA</p>
            </div>
            <div className='md:w-[30%] w-[49%]'>
              <p  className='text-[16px] sm:text-[18px]  font-[600] text-slate-400'>Email:</p>
              <p  className='text-[14px] sm:text-[16px] font-[600] underline '>seyhaoeurn920@gmail.com</p>
            </div>
            <div className='md:w-[15%] w-[49%]'>
              <p className='text-[16px] sm:text-[18px]  font-[600] text-slate-400'>Birth Of Date:</p>
              <p className='text-[14px] sm:text-[16px] font-[600] '>09-09-2002</p>
            </div>
            <div className='md:w-[15%] w-[49%]'>
              <p  className='text-[16px] sm:text-[18px]  font-[600] text-slate-400'>From:</p>
              <p  className='text-[14px] sm:text-[16px] font-[600] '>PHNOM PENH</p>
            </div>

          </div>

        </div>
              
       

      </div>
    

    </div>

    <div className='w-[100%] mt-20 flex flex-col gap-10 px-5 2xl:p-0 ' id='project'>
      <div className='flex justify-center items-center'>
        <span className='text-[28px] md:text-[30px] font-[600] uppercase'>Project</span>
      </div>

      <div className='2xl:w-[1400px] m-auto w-[100%]  flex flex-wrap  lg:gap-8 xl:gap-7 gap-6 2xl:gap-7 '>
        <div className='w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden'>
            <img src='https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=' alt='' className='w-full h-[70%] object-cover'/>
            <div className='p-2 sm:p-4 line-clamp-3'>
              <span className='text-[14px] sm:text-[16px] font-[500] text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
            </div>
        </div>
        <div className='w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden'>
            <img src='https://images.pexels.com/photos/2125422/pexels-photo-2125422.jpeg?cs=srgb&dl=pexels-hassan-ouajbir-2125422.jpg&fm=jpg' alt='' className='w-full h-[70%] object-cover'/>
            <div className='p-2 sm:p-4  line-clamp-3'>
              <span className='text-[14px] sm:text-[16px] font-[500] text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
            </div>
        </div>
        <div className='w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden'>
            <img src='https://st.depositphotos.com/1400069/2827/i/600/depositphotos_28270335-stock-photo-grass-field-sunset.jpg' alt='' className='w-full h-[70%] object-cover'/>
            <div className='p-2 sm:p-4 line-clamp-3'>
              <span className='text-[14px] sm:text-[16px] font-[500] text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
            </div>
        </div>
        <div className='w-[100%] sm:w-[48%] md:w-[48%] lg:w-[31.2%] xl:w-[23.3%] h-[300px] flex flex-col rounded-md overflow-hidden'>
            <img src='https://images.unsplash.com/photo-1595966038591-a765111f190f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80' alt='' className='w-full h-[70%] object-cover'/>
            <div className='p-2 sm:p-4 line-clamp-3'>
              <span className='text-[14px] sm:text-[16px] font-[500] text-gray-500'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
            </div>
        </div>
        
       
      </div>
    </div>

    <div className='mt-20 bg-slate-100 w-[100%] p-5' id='skill'>
      <div className='flex justify-center items-center'>
        <span className='text-[28px] md:text-[30px] font-[600] uppercase'> My Skill </span>
      </div>
      <div className='2xl:w-[1400px] w-[100%] m-auto py-5 '>
       
        <div className='flex flex-col gap-2'>
          
          <div className='flex flex-wrap'>
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
              REACT JS
           </div>
          </div>
      
        </div>

        <div className='flex flex-col gap-2 mt-3'>
        
          <div className='flex flex-wrap'>
            <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                PHP
            </div>
            <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
              LARAVEL
           </div>
           <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
              NODE JS
           </div>
           <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
              MY SQL
           </div>
           <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
              MONGO DB
           </div>
          </div>
      
        </div>
      
      </div>
    </div>
   
    
    </>
  )
}

export default Page