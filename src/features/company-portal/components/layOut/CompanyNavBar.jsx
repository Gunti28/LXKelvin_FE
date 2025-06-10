import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { setSelectedLang } from "../../../../store/slice/languageSlice";
import { Const } from "../../../../lib/constants/index"
import { IMAGES } from "../../../../lib/constants/Image_Constants";

const CompanyNavBar = () => {
  const languages = Const?.LANGUAGES;

  const dispatch = useDispatch();

  const selectedLang = useSelector((state) => state.language.selectedLang);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between ">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="flex items-center space-x-2">
                  <img src={IMAGES.logo} className="h-20 w-auto" alt="Logo" />
                  <span className="text-gray-700 font-medium">
                    Welcome, Admin
                  </span>
                </div>

                <div className="lg:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-none">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>

              <div className="w-full lg:w-1/2 my-2 lg:my-0 lg:px-8">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search something here..."
                    className="w-full rounded-full bg-gray-100 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                    <img
                      src={selectedLang.icon}
                      className="h-5 w-auto"
                      alt={selectedLang.name}
                    />
                    <span>{selectedLang.name}</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    {languages.map((lang) => (
                      <MenuItem key={lang.name}>
                        {({ active }) => (
                          <button
                            onClick={() => dispatch(setSelectedLang(lang))}
                            className={`flex items-center w-full px-4 py-2 text-sm ${
                              active ? "bg-gray-100" : ""
                            } text-gray-700`}
                          >
                            <img
                              src={lang.icon}
                              alt={lang.name}
                              className="h-4 w-auto mr-2"
                            />
                            <span>{lang.name}</span>
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>

                <button className="relative text-gray-400 hover:text-gray-600 pr-3">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white mr-3" />
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="flex text-sm items-center space-x-2 rounded-full focus:outline-none">
                    <span className="text-gray-700">Anil Vilson</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                      alt="User"
                    />
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          } text-gray-700`}
                          href="#"
                          style={{ textDecoration: "none", color: "gray" }}
                        >
                          Your Profile
                        </a>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          } text-gray-700`}
                          href="#"
                          style={{ textDecoration: "none", color: "gray" }}
                        >
                          settings
                        </a>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          } text-gray-700`}
                          href="#"
                          style={{ textDecoration: "none", color: "gray" }}
                        >
                          signout
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden border-t border-gray-200 pt-4 pb-3 px-4">
            <div className="pb-4">
              <Menu as="div" className="relative">
                  <MenuButton className="flex items-center border-1 border-blue-500 rounded px-2 py-1 space-x-1 text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                    <img
                      src={selectedLang.icon}
                      className="h-5 w-auto"
                      alt={selectedLang.name}
                    />
                    <span>{selectedLang.name}</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    {languages.map((lang) => (
                      <MenuItem key={lang.name}>
                        {({ active }) => (
                          <button
                            onClick={() => dispatch(setSelectedLang(lang))}
                            className={`flex items-center w-full px-4 py-2 text-sm ${
                              active ? "bg-gray-100" : ""
                            } text-gray-700`}
                          >
                            <img
                              src={lang.icon}
                              alt={lang.name}
                              className="h-4 w-auto mr-2"
                            />
                            <span>{lang.name}</span>
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
            </div>
            <div className="flex items-center flex-row justify-between">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                />
                <div>
                  <div className="text-base font-medium text-gray-800">
                    Welcome, Admin
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div>
                <button className="relative text-gray-400 hover:text-gray-600">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
                </button>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Sign out
              </a>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default CompanyNavBar;
