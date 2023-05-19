import React from 'react';
import Tab from './Tab';
import {GoLocation} from 'react-icons/go'
import {MdModeEditOutline} from 'react-icons/md'
import {RiErrorWarningLine} from 'react-icons/ri'
import posts from './Posts';
import Card from './Card';

const Main = () => {
  return (
    <main>
        <Tab/>
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
                                <RiErrorWarningLine style={{fontSize: "16px"}}/>

                            </div>
                            <div className="col-9">
                              Your location will help us serve better and extend a personalised experience. 
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Main;
