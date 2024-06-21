import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#264653] text-white w-screen">
			<div>
				<div className="flex flex-col md:flex-row justify-center items-center py-2">
					<p className="text-sm text-center">
						&copy; {new Date().getFullYear()} Quantum Hardware Insights. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
  )
}

export default Footer
