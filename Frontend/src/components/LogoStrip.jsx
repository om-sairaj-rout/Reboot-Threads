import React from 'react'

const LogoStrip = () => {
  return (
    <>
    {/* Container to center the logos and limit width */}
      <div className="w-full mx-auto px-4 flex items-center justify-center gap-8 bg-gray-50 py-10">
        <img 
          src="https://pngimg.com/uploads/lg_logo/lg_logo_PNG15.png" 
          alt="LG" 
          className="h-12 w-auto object-contain mx-15" 
        />
        <img 
          src="https://www.ipgsnoida.com/images/logo1.png" 
          alt="Indraparastha" 
          className="h-14 w-auto object-contain hidden sm:block mx-15" 
        />
        <img 
          src="https://vectorseek.com/wp-content/uploads/2023/08/Amity-University-Logo-Vector.svg-.png" 
          alt="Amity University" 
          className="h-12 w-auto object-contain hidden md:block mx-15" 
        />
        <img 
          src="https://www.vhv.rs/dpng/d/584-5843236_transparent-billabong-logo-png-billabong-high-international-school.png" 
          alt="Billabong" 
          className="h-16 w-auto object-contain hidden lg:block mx-15" 
        />

      </div>
    </>
  )
}

export default LogoStrip