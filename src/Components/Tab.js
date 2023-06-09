import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdExitToApp} from 'react-icons/md'

const Tab = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className="tabs-container">
        <div className='tabs'>
            <button className='tab-btn active'>All Posts</button>
            <button className='tab-btn'>Article</button>
            <button className='tab-btn'>Event</button>
            <button className='tab-btn'>Education</button>
            <button className='tab-btn'>Job</button>
        </div>
        <div className="btn-container">
            <button className='write-post btn'>Write a Post
                <span>
                    <IoMdArrowDropdown/>
                </span>
            </button>
            {
                isLoggedIn ?
                <button className='leave-group btn btn-primary'>
                    <span>
                        <MdExitToApp/>
                    </span> Leave Group
                </button>
                :
                <button className='join-group btn btn-primary'>
                    <span>
                        <AiOutlineUsergroupAdd/>
                    </span> Join Group
                </button>
            }
        </div>
    </div>
  );
}

export default Tab;
