import React from 'react'
import Links from "../../data/Links";
import MenuLink from '../MenuLink';

const Menu = ({setMenuIsOpen, navHeight}) => {
  
  return <div style={{paddingTop: navHeight + "px"}} className='absolute top-0 bottom-0 right-0 left-0 bg-main h-screen overflow-hidden  '>
    {Links.map(linkEl => {
      const {id, name, link, image, asPath} = linkEl
      return <MenuLink setMenuIsOpen={setMenuIsOpen} key={id} asPath={asPath} image={image} name={name} link={link} />
    })}
  </div>
}

export default Menu