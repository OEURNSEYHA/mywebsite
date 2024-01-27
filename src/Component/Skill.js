import React from 'react'

function Skill() {
  return (
    <div>
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
                REACT JS
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-wrap">
              <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                PHP
              </div>
              {/* <div class=" border border-gray-300  bg-gray-400 focus:ring-4 rounded-full  px-5 py-2.5 mr-2 mb-2 text-white">
                LARAVEL
              </div> */}
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
  )
}

export default Skill