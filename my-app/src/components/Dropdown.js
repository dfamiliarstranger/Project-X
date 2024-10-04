import hamburger from '../assets/icons/primary.png';
import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Cancel from "../assets/icons/multiply.png";


// {/* <button className="dropbtn">

// </button> */}



function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    }

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-6 rounded-md bg-white pl-6 pr-3 pb-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50" onClick={toggleDropdown}>
        <img src={isOpen ? Cancel : hamburger} alt="menu" className="pt-1"/>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="index.html"
              className=" dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="index.html"
              className="dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              About
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="index.html"
              className="dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Get in Touch
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="index.html"
              className="dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Project
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="index.html"
              className="dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              How it works
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="index.html"
              className="dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              The process
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="index.html"
              className="dropdown-items block pl-5 pr-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              FAQ
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="dropdown-items block w-full pl-5 pr-4 pt-2 pb-10 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Blog
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default Dropdown ;