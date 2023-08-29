import React,{useEffect} from 'react'
import imgNotFound from '../Image/mobile_404-removebg-preview.png'
function NotFound() {
    useEffect(() => {
        document.title = '404 Page Not Found';
      }, []);
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
        <img src={imgNotFound} alt='' className='w-[200px]'/>
    </div>
  )
}

export default NotFound