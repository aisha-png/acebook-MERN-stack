import React from 'react';
import logo from '../../assets/acebookLogo.svg';
import searchIcon from '../../assets/searchIcon.svg';
import notifications from '../../assets/notifications.svg';
import logoOut from  '../../assets/logOut.svg';


const NavBar = () => {
    return (
        <>
            <nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900 ">
                <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                            <img src={logo} className="h-10 md:h-10" alt="Acebook Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                        <div className="p-3  rounded-full bg-gray-100">
                            <img src={searchIcon} className="h-4 md:h-4 md:w-auto cursor-pointer" alt="notification" />
                        </div>
                    </div>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
                        <div className="p-2 bg-gray-200 rounded-full">
                            <img src={notifications} className="h-6 md:h-6 md:w-auto cursor-pointer" alt="notification" />
                            <span className="absolute -mt-8 ml-5 rounded-full bg-danger px-[0.70em] py-[0.35em] text-[0.6rem] font-bold leading-none bg-red-500 text-white">
                                1
                            </span>
                        </div>
                        <div className="p-2 bg-gray-200 rounded-full cursor-pointer">
                            {/* To be replaces with profile pic - just a place holder for now. */}
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="1.5em"
                                width="1.5em">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
                            </svg>
                            
                        </div>
                        <div className="p-2 bg-gray-200 rounded-full">
                            <img src={logoOut} className="h-6 md:h-6 md:w-auto cursor-pointer" alt="notification" />
                            
                        </div>
                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className='cursor-pointer'>
                                <svg 
                                    viewBox="0 0 24 24" 
                                    width="24" height="24" 
                                    fill="currentColor" 
                                    className=''
                                    >
                                    <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
                                </svg>
                            </li>
                            <li className='cursor-pointer'>
                                <svg 
                                    viewBox="0 0 24 24" 
                                    width="24" height="24" 
                                    fill="currentColor" 
                                    className=''
                                    >
                                    <path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z"></path>
                                </svg>
                            </li>
                            <li className='cursor-pointer'>
                                <svg 
                                    viewBox="0 0 24 24" 
                                    width="24" 
                                    height="24" 
                                    fill="currentColor" 
                                    className=''>
                                    <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                    <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar