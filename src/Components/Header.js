import React from 'react';
import logo from '/home/adrish/Documents/atg-react-assignment-01/src/Components/Images/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = ({isLoggedIn, setIsLoggedIn, profileImg, username}) => {
    const placeholder = "Search for your favorite groups in ATG"
  return (
    <header>
      <img src={logo} alt="atg world" />
        <div className="search-box">
            <span>
                <AiOutlineSearch className='search-icon'/>
            </span>
            <input type="text" placeholder = {placeholder} name="search"/>
        </div>
        {
          isLoggedIn ? 
        <div className="user dropdown-toggle">
          <img className='pfp-img-top' src={profileImg} alt="" />
          <h3>{username}</h3>
        </div>
        :
        <span>
          Create an account. <a href="#">It's free!</a>
        </span> 
        }
    </header>
  );
}

export default Header;
