'use client'
import React from 'react';
import Image from 'next/image';
const AboutCats: React.FC = () => {

  return (
    <div className='about-cats tab'>
      <div className='intro-pics'>
        <Image src="/Fran_and_Pepper/15 - r3cgjCk.jpg" alt="Fran" width="200" height="200" />
        <Image src="/Fran_and_Pepper/3 - JGPL39L.jpg" alt="Pepper & Fran" width="200" height="200" />
        <Image src="/Fran_and_Pepper/8 - Ldhr0AH.jpg" alt="Pepper" width="200" height="200" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      {/* timeline gallery */}
      <div>
        <h3>Buy them a gift?</h3>
        <a href="https://www.amazon.com/hz/wishlist/ls/Y7KUBGTDPFSF?ref_=wl_share" target='_blank'>amazon wish list</a>
        <a>throne i guess cause they are queens</a>
        <a>donate</a>
      </div>
    </div>
  )
}

export default AboutCats;