import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import HomeSection from '../HomeSection/HomeSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import ResumeSection from '../ResumeSection/ResumeSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import SkillsSection from '../SkillsSection/SkillsSection';

const Home = () => {
    const links = <>
        <li className="p-2 hover:text-orange-500">
            <a href="#home-section"><span>Home</span></a>
        </li>
        <li className="p-2 hover:text-orange-500">
            <a href="#about-section"><span>About</span></a>
        </li>
        <li className="p-2 hover:text-orange-500">
            <a href="#resume-section"><span>Resume</span></a>
        </li>
        <li className="p-2 hover:text-orange-500">
            <a href="#services-section"><span>Services</span></a>
        </li>
        <li className="p-2 hover:text-orange-500">
            <a href="#skills-section"><span>Skills</span></a>
        </li>
        <li className="p-2 hover:text-orange-500">
            <a href="#projects-section"><span>Projects</span></a>
        </li>
        <li className="p-2 hover:text-orange-500">
            <a href="#contact-section"><span>Contact</span></a>
        </li>
    </>
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-start">
                    {/* Mobile & Tab View  */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    {/* Mobile & Tab View  */}
                    <a href='#home' className="normal-case text-2xl font-semibold hover:text-orange-500">Fahim Ahmed</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </nav>

            <section id="home-section" className="hero my-10">
                <HomeSection />
            </section>

            <section id="about-section" className="hero my-28">
                <AboutSection />
            </section>

            <section id="resume-section" className="hero my-28">
                <ResumeSection />
            </section>

            <section id="services-section" className="hero my-28">
                <ServicesSection />
            </section>

            <section id="skills-section" className="hero my-28">
                <SkillsSection />
            </section>

            <section id="projects-section" className="hero my-28">
                <ProjectsSection />
            </section>

            <section id="contact-section" className="hero my-28">
                <ContactSection />
            </section>

            <footer className="footer p-10 text-base-content border-t border-base-400 text-xl">
                <div>
                    <span className="footer-title text-3xl">Contact Me</span>
                    <div className='flex justify-center items-center gap-2'>
                        <a href="https://twitter.com/Fahim_Gorbo" target="_blank" rel='noreferrer'>
                            <div className='flex justify-center items-center w-12 h-12 rounded-full bg-gray-600 hover:bg-yellow-500 hover:text-white'>
                                <FaTwitter className='w-8 h-8 text-yellow-500 hover:text-white' />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/"
                            target="_blank" rel='noreferrer'>
                            <div className='flex justify-center items-center w-12 h-12 rounded-full bg-gray-600 hover:bg-yellow-500 hover:text-white'>
                                <FaLinkedin className='w-8 h-8 text-yellow-500 hover:text-white' />
                            </div>
                        </a>
                        <a href="https://github.com/Fahimahmedkhan" target="_blank" rel='noreferrer'>
                            <div className='flex justify-center items-center w-12 h-12 rounded-full bg-gray-600 hover:bg-yellow-500 hover:text-white'>
                                <FaGithub className='w-8 h-8 text-yellow-500 hover:text-white' />
                            </div>
                        </a>
                    </div>

                </div>
                <div>
                    <span className="footer-title text-3xl">Links</span>
                    <a href="#home-section"><span><div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />Home</div></span></a>
                    <a href="#resume-section"><span> <div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />Resume</div></span></a>
                    <a href="#skills-section"><span><div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />Skills</div></span></a>
                    <a href="#projects-section"><span><div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />Projects</div></span></a>
                </div>
                <div>
                    <span className="footer-title text-3xl">Service</span>
                    <a href="#services-section"><span><div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />Web Design</div></span></a>
                    <a href="#services-section"><span><div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />Web Development</div></span></a>
                    <a href="#services-section"><span><div className="flex justify-center items-center gap-6"><AiOutlineArrowRight />UX/UI Design</div></span></a>
                </div>
                <div>
                    <span className="footer-title text-3xl">Have a Questions?</span>
                    <div className="flex justify-center items-center gap-6"><FaLocationArrow />3/238, Uposhohor</div>
                    <div className="flex justify-center items-center gap-6"><MdPhone />	+880 1788844667</div>
                    <div className="flex justify-center items-center gap-6"><MdEmail />	<a href="mailto:fahimkhangorbo@yahoo.com">fahimkhangorbo@yahoo.com</a></div>
                </div>
            </footer>
            <footer className="footer footer-center p-10 border-t text-base-content border-base-400 text-center">
                <div>
                    <p>Copyright © 2022 - All right reserved by <a href="#home" className='hover:text-yellow-500 text-xl'>Fahim Ahmed Khan Gorbo</a></p>
                </div>
            </footer>
        </div >
    );
};

export default Home;