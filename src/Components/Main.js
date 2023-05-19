import React from 'react';
import Tab from './Tab';
import {GoLocation} from 'react-icons/go'
import {MdModeEditOutline} from 'react-icons/md'
import {RiErrorWarningLine} from 'react-icons/ri'
import posts from './Posts';
import Card from './Card';
import {AiFillLike} from 'react-icons/ai'
import Group from './Group';
import groups from './GroupsData';

const Main = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <main>
        <Tab isLoggedIn={isLoggedIn}/>
        <div className="post-filter">
            <h3>Posts (368)</h3>
            <div className="dropdown">
                <button className='dropdown-toggle btn btn-secondary'>Filter: All</button>
            </div>
        </div>
        <div className="content-main container">
            <div className="row">
                <div className="cards-container col-9">
                    {posts.map((post)=>{
                        return(<Card {...post}/>)
                    })}
                </div>
                <div className="location col-3">
                    <div className="input-group mb-3 location-input">
                        <GoLocation/>
                        <input type="text" placeholder='Enter Your Location' />
                        <MdModeEditOutline/>
                    </div>

                    <div className="location-warning">
                        <span className='row'>
                            <div className="col-1">
                                <span>
                                    <RiErrorWarningLine style={{fontSize: "16px"}}/>
                                </span>

                            </div>
                            <div className="col-9">
                                <span>
                                    Your location will help us serve better and extend a personalised experience. 
                                </span>
                            </div>
                        </span>
                        {
                            isLoggedIn ?
                            <div className="recommended-groups">
                                <span>
                                    <AiFillLike/> RECOMMENDED GROUPS
                                </span>
                                {groups.map((group)=>{
                                    return <Group {...group}/>
                                })}
                            </div>
                            :
                            ""

                        }
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Main;
