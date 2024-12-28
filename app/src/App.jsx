import { useState } from 'react'
import {FaCode, FaDatabase, FaLaptop} from 'react-icons/fa'

function App() {
  const[isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu=() => setIsMenuOpen(!isMenuOpen)
  

  return (
    <>
      <nav className='bg-gray-900 text-teal-300 shadow-lg fixed w-full top-0 left-0 z-10'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='text-2xl font-bold text-teal-300'>
            <a href="#">DarkVision</a>
          </div>

          <ul className='hidden md:flex space-x-6 text-2xl'>
            <li>
              <a href="#home" className='hover:text-white transition-colors duration-300'>Home</a>
            </li>
            <li>
              <a href="#about" className='hover:text-white transition-colors duration-300'>About</a>
            </li>
            <li>
              <a href="#services" className='hover:text-white transition-colors duration-300'>Services</a>
            </li>
            <li>
              <a href="#contact" className='hover:text-white transition-colors duration-300'>Contact</a>
            </li>
          </ul>
          <button onClick={toggleMenu} className='block md:hidden text-2xl text-teal-300'>
    {isMenuOpen ? "✖" : "☰"}
     </button>
        </div>

        {isMenuOpen && (
          <ul className='md:hidden  bg-gray-800 text-center font-medium space-y-4 py-4 text-teal-300'>
          <li>
            <a href="#home" className='hover:text-white transition-colors duration-300'>Home</a>
          </li>
          <li>
            <a href="#about" className='hover:text-white transition-colors duration-300'>About</a>
          </li>
          <li>
            <a href="#services" className='hover:text-white transition-colors duration-300'>Services</a>
          </li>
          <li>
            <a href="#contact" className='hover:text-white transition-colors duration-300'>Contact</a>
          </li>
        </ul>
        )}
      </nav>

      <section id="home" className='relative bg-gray-900 text-teal-300 overflow-hidden'>
        <div className='absolute top-0 left-30 w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700'></div>
        <div className='absolute top-20 right-10 w-48 h-48 bg-teal-500 bg-opacity-50 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 left-20 w-64 h-64 bg-purple-700 bg-opacity-30 rounded-full blur-3xl'></div>

        <div className='relative z-10 container mx-auto px-6 lg:px-20 py-20 flex lg:flex-row items-center flex-col-reverse'>
          <div className='text-center lg:text-left lg:w-1/2'>
            <h1 className='text-5xl lg:text-8xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-purple-400'>Think Bold,Design Dark</h1>
            <p className='mt-6 text-lg lg:text-xl text-gray-400'>Empower your ideas with cutting-edge, dark-themed designs thatstand out and make a statement.</p>
           <div className='mt-8 flex justify-center lg:justify-start space-x-4'>
            <button className='bg-teal-600 text-white py-3 px-8 rounded-lg shadow-xl hover:scale-105 transform transition'>
              Get Started
            </button>
            <button className='border-2 border-teal-300 text-teal py-3 px-8 rounded-lg shadow-xl hover:bg-teal-300 hover:text-gray-900 transition'>
              Learn More
            </button>
           </div>
          </div>

          <div className='relative lg:w-1/2 flex justify-center items-center'>
            <div className='relative w-3/4 lg:w-full'>
              <img src="image2.png" className='transform hover:scale-105 transition duration-500'>
              </img>
            </div>
          </div>
        </div>
      </section>
     <section id="about"className="relative bg-gray-800 text-white py-12 ">
      <div className='absolute inset-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500'></div>
      <div className='relative container mx-auto px-6 lg:px-20'>
        <div className='flex flex-col lg:flex-row items-center justify-between bg-gray-900 p-8 rounded-lg'>
         <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-2'>
          <h4 className='text-5xl font-bold text-purple-500'>150+</h4>
          <p className='text-lg text-gray-300'>Completed Projects</p>
          
        </div>
        <div className='hidden lg:block w-1 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-8'></div>
       
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-2'>
          <h4 className='text-5xl font-bold text-purple-500'>100+</h4>
          <p className='text-lg text-gray-300'>Happy Clients</p>
          
        </div>
        <div className='hidden lg:block w-1 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-8'></div>
       
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-2'>
          <h4 className='text-5xl font-bold text-purple-500'>20+</h4>
          <p className='text-lg text-gray-300'>Awards Won</p>
          
        </div>
        <div className='hidden lg:block w-1 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-8'></div>
       
        </div>
      </div>
     </section>

    <section className='relative bg-gray-900 text-gray-300 py-20'>
    <div className='absolute top-0 left-30 w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700'></div>
        <div className='absolute top-20 right-10 w-48 h-48 bg-teal-500 bg-opacity-50 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 left-20 w-64 h-64 bg-purple-700 bg-opacity-30 rounded-full blur-3xl'></div>

   <div className='relative container mx-auto px-6 lg:px-20'>
    <div className='flex flex-col lg:flex-row items-center justify-between mb-16'>
      <div className='lg:w-1/2 mb-8 lg:mb-0'>
        <img src="image1.png" className='w-full h-full object-cover'></img>
      </div>

      <div className='lg:w-1/2 text-center lg:text-left'>
        <h2 className='text-5xl font-bold text-teal-300 mb-4'>About Us</h2>
        <p className='text-lg text-gray-400 mb-6'>
        At DarkVision, we believe in empowering businesses and individuals by providing creative and
          innovative solutions. We’re committed to delivering exceptional user experiences through
          collaboration, passion, and cutting-edge technology.
        </p>
        <p className='text-lg text-gray-400 mb-12'>
        At DarkVision, we believe in empowering businesses and individuals by providing creative and
          innovative solutions. We’re committed to delivering exceptional user experiences through
          collaboration, passion, and cutting-edge technology.
        </p>
        <a href="#" className='inline-block px-8 py-3 bg-gradient-to-r from-teal-400 to-purple-500 text-black'>Learn More</a>
      </div>
    </div>

    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      <div className='bg-gray-800 p-6 rounded-lg shadow-xl'>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg'>
            <i className='fas fa-lightbulb'></i>
          </div>
        </div>
        <h3 className='text-xl font-semibold text-teal-300 mb-2 text-center'>Our vision</h3>
        <p className="text-gray-400 text-center">To inspire creativity and faster innovation,leading the way with exceptional design.</p>
      </div>
      <div className='bg-gray-800 p-6 rounded-lg shadow-xl'>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg'>
            <i className='fas fa-lightbulb'></i>
          </div>
        </div>
        <h3 className='text-xl font-semibold text-teal-300 mb-2 text-center'>Our vision</h3>
        <p className="text-gray-400 text-center">To inspire creativity and faster innovation,leading the way with exceptional design.</p>
      </div>
      <div className='bg-gray-800 p-6 rounded-lg shadow-xl'>
        <div className='flex items-center justify-center mb-4'>
          <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg'>
            <i className='fas fa-lightbulb'></i>
          </div>
        </div>
        <h3 className='text-xl font-semibold text-teal-300 mb-2 text-center'>Our vision</h3>
        <p className="text-gray-400 text-center">To inspire creativity and faster innovation,leading the way with exceptional design.</p>
      </div>
    </div>
   </div>
    </section>

    <section className='relative bg-fixed bg-center bg-cover' style={{backgroundImage:"url('image1.png')"}}>
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      <div className='relative container mx-auto px-6 lg:px-20 text-center text-white'>
        <h2 className='text-4xl lg:text-6xl font-bold mb-6'>Showcasing Excellence</h2>
        <p className='text-lg lg:text-xl text-gray-300 mb-8'>
        At DarkVision, we believe in empowering businesses and individuals by providing creative and
          innovative solutions. We’re committed to delivering exceptional user experiences through
          collaboration, passion, and cutting-edge technology.
        </p>
        <a href="#" className='inline-block px-8 py-3 bg-gradient-to-r from-teal-400 to-purple-500 text-black'>Learn More</a>
 
      </div>
    </section>


<section id="services"className='relative bg-gray-900 text-white py-20'>
<div className='absolute top-0 left-30 w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700'></div>
 <div className='absolute top-20 right-10 w-48 h-48 bg-teal-500 bg-opacity-50 rounded-full blur-xl'></div>
  <div className='absolute bottom-0 right-20 w-64 h-64 bg-gradient-to-bl from-pink-500 to-yellow-500 opacity-20 rounded-full blur-3xl '></div>

<div className='relative container mx-auto px-6 lg:px-20'>
  <h2 className='text-4xl lg:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500'>Our Services</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>

    <div className='flex flex-col items-center justify-center text-center p-12 transform transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-none'>
      <div className='text-6xl mb-6 text-blue-500'>
        <i className='fas fa-laptop-code'></i>
      </div>
      <h3 className='text-2xl font-semibold mb-4'>Web Development</h3>
      <p className='text-gray-300'>Bulding fast,responsive, and visually appealing websites tailored to your business.</p>
    </div>
    <div className='flex flex-col items-center justify-center text-center p-12 transform transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-none'>
      <div className='text-6xl mb-6 text-purple-500'>
        <i className='fas fa-paint-brush'></i>
      </div>
      <h3 className='text-2xl font-semibold mb-4'>Web Development</h3>
      <p className='text-gray-300'>Bulding fast,responsive, and visually appealing websites tailored to your business.</p>
    </div>
    <div className='flex flex-col items-center justify-center text-center p-12 transform transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-none'>
      <div className='text-6xl mb-6 text-pink-500'>
        <i className='fas fa-bullhorn'></i>
      </div>
      <h3 className='text-2xl font-semibold mb-4'>Web Development</h3>
      <p className='text-gray-300'>Bulding fast,responsive, and visually appealing websites tailored to your business.</p>
    </div>
    <div className="flex flex-col items-center justify-center text-center p-12 transform transition-all duration-300 shadow-lg shadow-yellow-500/50 hover:shadow-none">
        <div className="text-6xl mb-6 text-yellow-500">
          <i className="fas fa-mobile-alt"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
        <p className="text-gray-300">
          Creating feature-rich mobile applications that are designed for seamless user experiences.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-12 transform transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-none">
        <div className="text-6xl mb-6 text-green-500">
          <i className="fas fa-cloud"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
        <p className="text-gray-300">
          Delivering reliable and scalable cloud solutions to improve business efficiency and security.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-12 transform transition-all duration-300 shadow-lg shadow-red-500/50 hover:shadow-none">
        <div className="text-6xl mb-6 text-red-500">
          <i className="fas fa-shield-alt"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
        <p className="text-gray-300">
          Protecting your business from cyber threats with cutting-edge security measures.
        </p>
      </div>
  </div>
  
</div>
</section>
<section className="relative bg-gray-900 text0white py-20">
<div className='absolute top-0 left-30 w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700'></div>
 <div className='absolute top-20 right-10 w-48 h-48 bg-teal-500 bg-opacity-50 rounded-full blur-xl'></div>
  <div className='absolute bottom-0 right-20 w-64 h-64 bg-gradient-to-bl from-pink-500 to-yellow-500 opacity-20 rounded-full blur-3xl '></div>

<div className='relative container mx-auto px-6 lg:px-20text-center'>
  <h2 className='text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-12'>Get In Touch</h2>
  <div className='flex flex-col lg:flex-row justify-center gap-12'>

    <div className='flex-1'>
      <form className='bg-gray-800 p-10 rounded-lg shadow-xl '>
        <div className='mb-6'>
          <label className='block text-lg font-medium text-gray-300 mb-2'>Your Name</label>
         <input type="text" placeholder="Entr your name"
           className='w-full p-4 bg-gray-700 text-white rounded-lg shadow-md '
         ></input>
        </div>
        <div className='mb-6'>
          <label className='block text-lg font-medium text-gray-300 mb-2'>Your Email</label>
         <input type="text" placeholder="Entr your email"
           className='w-full p-4 bg-gray-700 text-white rounded-lg shadow-md '
         ></input>
        </div>
        <div className='mb-6'>
          <label className='block text-lg font-medium text-gray-300 mb-2'>Your Message</label>
         <textarea type="text" placeholder="Entr your message"
           className='w-full p-4 bg-gray-700 text-white rounded-lg shadow-md '
         ></textarea>
        </div>
        <button className='w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold'>Submit</button>
      </form>
    </div>

    <div className='flex-1 text-center lg:text-left'>
    <h2 className='text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-12'>Contact Info</h2>
  <div className='flex items-center mb-6 justify-center lg:justify-start'>
    <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4'>
      <i className='fas fa-map-marker-alt text-white text-2xl'></i>

    </div>
    <p className='text-gray-300'>123 Steet Name,City</p>
  </div>
  <div className='flex items-center mb-6 justify-center lg:justify-start'>
    <div className='w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4'>
      <i className='fas fa-phone text-white text-2xl'></i>

    </div>
    <p className='text-gray-300'>123 Steet Name,City</p>
  </div>
  <div className='flex items-center mb-6 justify-center lg:justify-start'>
    <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4'>
      <i className='fas fa-envelope text-white text-2xl'></i>

    </div>
    <p className='text-gray-300'>123 Steet Name,City</p>
  </div>
    </div>
  </div>
</div>
</section>

<footer className='bg-gray-900 text-gray-300 py-12'>
   <div className='container mx-auto px-6 lg:px-20'>
    <div className='flex flex-col md:flex-row justify-between  items-center'>
      <div className='text-center md:text-left mb-8 md:mb-0'>
        <div className='text-2xl font-bold text-teal-300'>
          <a href="#">DarkVisiom</a>
        </div>
        <p className='mt-2 text-gray-400'>
          Empowering your digital journey with DarkVision.
        </p>
      </div>

      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left'>
        <div>
          <h3 className='font-semibold text-teal-300'>Quick Links</h3>
          <ul className='space-y-2 mt-2'>
            <li>
              <a href="#home" className='hover:text-white transition-colors duration-300'>Home</a>
            </li>
            <li>
              <a href="#about" className='hover:text-white transition-colors duration-300'>About</a>
            </li>
            <li>
              <a href="#services" className='hover:text-white transition-colors duration-300'>Services</a>
            </li>
            <li>
              <a href="#contact" className='hover:text-white transition-colors duration-300'>Contact</a>
            </li>
          </ul>
        </div>

        <div>
        <h3 className='font-semibold text-teal-300'>Follow Us</h3>
          <div className='flex space-x-6 mt-2'>
            <a><FaLaptop size={24}/></a>
            <a><FaCode size={24}/></a>
            <a><FaDatabase size={24}/></a>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-8 border-t border-gray-700 pt-6 text-center'>
      <p className='text-gray-400 text-sm'>&copy; 2024 DarkVision. All rights reserved | Designed By Baljinder Kaur</p>
    </div>
   </div>
</footer>

    
     
    </>
  )
}

export default App
