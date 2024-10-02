import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [selectedItem, setselectedItem] = useState('');
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const selectedHoverItem = (item) => {
    setselectedItem(item);
  };

  const showButton = () => {
    if (window.innerWidth <= 360) {
      setButton(false);
    } else {
      setButton(false);// change to true dev purpose changed to false
    }
  };

  useEffect(() => {
    showButton();
    selectedHoverItem();
  }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Campus2Industry
            {/* <i className='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            {navItems.map((item) => {
            
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onClick={()=>selectedHoverItem(item.title)}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => {setDropdown(false); setselectedItem('');}}
                >
                  <Link to={item.path} className='nav-links'>{item.title}</Link>
                  {((selectedItem === item.title) && dropdown) && <Dropdown itemName = {item.title}/>}
                </li>
              );
          })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;