import React from 'react'
import myImg from './Images/sukanyaBGremove.png'
import { MdOutlineEmail} from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Resume = () => {
  return (
    <div>
    <div className='controlWholeLayout'>
      {/* part 1 on top */}

      {/* below control both box --parent box*/}
<div class="flex md:flex-row flex-col">

  {/* left box */}
  <div class="flex-initial md:w-[50%] lg:w-[30%] w-full bg-blue-200 p-4 space-y-2">
    {/* space -y-5 top and botton --- space-y-control all children */}
   <h2 className='text-2xl font-bold mx-4'>TIPARPRON SUKANYA</h2>

   <div className='iconText flex items-center'>
<div className='icon mx-4'><MdOutlineEmail/></div>
<a href='mailto:sukanyat2022a@gmail.com'>sukanyat2022a@gmail.com</a>
   </div>

   <div className='iconText flex items-center'>
<div className='icon mx-4'><IoIosPhonePortrait/></div>
<a href='tel:+13474419148'>3474419148</a>
   </div>

   <div className='iconText flex items-center'>
<div className='icon mx-4'><RiHome5Fill/></div>
<a href=''>Weston, CT 06883 </a>
   </div>

   <div className='iconText flex items-center'>
<div className='icon mx-4'><BsGlobeAmericas/></div>
<a href='https://sukanyat.com/'>https://sukanyat.com/</a>
   </div>

   <div className='iconText flex items-center'>
<div className='icon mx-4'><FaGithub/></div>
<a href='https://github.com/SukanyaT2022'>https://github.com/SukanyaT2022</a>
   </div>
  </div>

  {/* right Box */}
  <div class="flex-initial md:w-[50%] lg:w-[70%] w-full bg-pink-200 p-5 md:p-3 lg:p-5 flex items-center justify-center flex-col">
 <h3 className='text-2xl font-bold self-start ml-8'>FRONT-END DEVELOPER</h3>
 <p className='px-8 pt-4'>Motivated front-end developer. An associate degree in computer science, August 2023, Norwalk Community College. Two years of experience with web development at NCC and personal projects, and self-taught through FreeCodeCamp.com and w3school. Seeking to use proven skills in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, OOP, React, Rest APIs, SQL, and PHP to help businesses reach their goals.</p>
  </div>
</div>

{/* part 2 */}
      {/* below control both box --parent box*/}
      <div class="flex md:flex-row flex-col">
 {/* left box */}
 <div class="flex-initial md:w-[50%] lg:w-[30%] w-full bg-green-200 p-4 space-y-2">
    <h3 className='font-bold'>SKILLS</h3>
    <h4 className='font-bold'>Soft Skills</h4>
    <ul className='skills'>
<li>Communication Skills</li>
<li>Collaboration</li>
<li>Self-awareness</li>
<li>Teamwork</li>
<li>Problem – Solving</li>
    </ul>

    <h4 className='font-bold' >Technical Skills</h4>
    <ul className='skills'>
<li>React</li>
<li>HTML & CSS, JavaScript</li>
<li>Bootstrap</li>
<li>Tailwind CSS</li>
<li>SQL</li>
<li>PHP</li>
<li>Swift</li>
<li>GitHub</li>
<li>User Interface Design</li>
<li>Responsive design</li>
<li>Debugging skills</li>
    </ul>

<h2 className='font-bold'>EDUCATION</h2>
<h3 className='font-bold'>Norwalk Community College</h3>
<p>Norwalk, CT • 08/2023 </p>
<h3>Associate of Science</h3>
<p>Computer Science | GPA: 3.4</p>

<h3 className='font-bold'>Long Island University </h3>
<p>Brooklyn, New York • 06/2008 </p>
<p>MBA: Finance | GPA: 3.3 </p>
  </div>



{/* right Box */}
<div class="flex-initial md:w-[50%] lg:w-[70%] w-full bg-pink-200 p-5 md:p-3 lg:p-5 flex items-center justify-center flex-col">
    03
  </div>
</div>

{/* part 3 */}

      {/* below control both box --parent box*/}
      <div class="flex md:flex-row flex-col">
 {/* left box */}
 <div class="flex-initial md:w-[50%] lg:w-[30%] w-full bg-blue-200 p-4 space-y-2">
    02
  </div>
{/* right Box */}
<div class="flex-initial md:w-[50%] lg:w-[70%] w-full bg-pink-200 p-5 md:p-3 lg:p-5 flex items-center justify-center flex-col">
    03
  </div>
</div>


    </div>
    </div>
  )
}

export default Resume
