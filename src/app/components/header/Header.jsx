import React from 'react'
import './header.scss'
import Image from 'next/image'

export const Header = () => {
  return (
   <>
<div className="header">
  <div className='innerheader'>
     <Image src="/images/logo.png" alt='logo' width={100} height={30}/>
      <p className="greeting">Bem-vindo de volta, Marcus</p>
      <p className="day">Segunda, 01 de dezembro de 2025</p>
  </div>  
</div>

   </>
  )
}
