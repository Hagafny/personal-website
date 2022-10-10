import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import NavLogo from "../public/assets/navLogo.png";
import sections from "../config/sections.json";
import ThemeToggler from "./ThemeToggler";
import { useTheme } from "next-themes";
import { useSocialsData } from "../hooks/useSocials";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const { theme } = useTheme();
  const router = useRouter();

  const navSections = sections.filter((section) => section.active);

  const socialsData = useSocialsData();

  // {
  //   className:
  //     "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
  // }

  useEffect(() => {
    const isInProjectPage =
      router.asPath === "/project/property" ||
      router.asPath === "/project/crypto" ||
      router.asPath === "/project/netflix" ||
      router.asPath === "/project/twitch";

    const isDarkMode = theme === "dark";

    const navBG = isInProjectPage
      ? "transparent"
      : isDarkMode
      ? "#1f2937"
      : "#ecf0f3";

    const linkColor = isInProjectPage || isDarkMode ? "#ecf0f3" : "#070707";

    setNavBg(navBG);
    setLinkColor(linkColor);
  }, [router, theme]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden md:flex items-center'
          >
            {navSections.map((section) => (
              <li
                key={section.name}
                className='ml-10 text-sm uppercase hover:border-b'
              >
                <Link href={section.url}>{section.title || section.name}</Link>
              </li>
            ))}
            <li className='ml-10'>
              <ThemeToggler />
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden cursor-pointer'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-text p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image src={NavLogo} width='87' height='35' alt='Logo' />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {navSections.map((section) => (
                <Link key={section.name} href={section.url}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    {section.title || section.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className='flex justify-center items-center pt-10'>
              <div className='mr-3'>Change Theme:</div>
              <ThemeToggler />
            </div>
            <div className='pt-16'>
              <p className='uppercase tracking-widest text-main'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
