import React from 'react'
import Layout from "../components/Layout"
import Footer from "../components/Footer";
import Image from 'next/image';
import woman from "../Images/woman.png";
const users = () => {
  return (

    <Layout>
      <div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
          <div className='flex justify-evenly mt-2'>
          <Image className="mx-auto rounded-full -mt-20 border-8 border-white" src={woman} width={100} height={100} alt="Woman Avatar" />
          </div>
          <div className="text-center mt-2 text-3xl font-medium">Alex</div>
          <div className="text-center font-normal text-lg">Bangalore</div>
          <div className="px-6 text-center mt-2 font-light text-sm">
            <p>
              Front end Developer, avid reader. Love to take a long walk, swim
            </p>
          </div>
          <hr className="mt-8" />
          <div className="flex p-4">
            <div className="w-1/2 text-center">
              <span className="font-bold">1.8 k</span> Followers
            </div>
            <div className="w-0 border border-gray-300">

            </div>
            <div className="w-1/2 text-center">
              <span className="font-bold">2.0 k</span> Following
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>


  )
}

export default users
