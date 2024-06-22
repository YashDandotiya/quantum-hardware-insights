import React, { useState } from 'react';
import nlogo from '../assets/navbar logo.png'
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    
    { id: 5, text: 'Contact' }
  ];

  return (
    <header className="dark:bg-[#3A6EA5] text-gray-100">
			<div>
				<nav className="flex flex-row justify-between items-center p-2 md:p-3">
					<div className="flex items-center ml-4 md:ml-10">
						<img src={nlogo} alt="" className="h-6 md:h-8 pe-2 md:px-3" />
						<h1 className="md:text-2xl font-bold flex ml-4 text-sm">Quantum Hardware Insights</h1>
					</div>
					<ul>
						<li>
							<a href="mailto:dandotiya.yash73@gmail.com" className="text-white hover:underline underline-offset-2 mr-2 md:mr-14 md:text-xl text-xs">
								Contact&nbsp;Us
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
  );
};

export default Navbar;