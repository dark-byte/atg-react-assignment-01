import React from 'react';
import {SlOptions} from 'react-icons/sl'
import { RiCalendarEventFill } from 'react-icons/ri';
import {BsBriefcase, BsFillShareFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {AiOutlineEye} from 'react-icons/ai'

const Card = ({type, img, title, subtitle, date, company, location, profileImg, username}) => {

    const emojiSwitch = (type)=>{
        switch(type) {
                    case "Article":
                        return "✍️ Article"
                        break;
                    case "Education":
                        return "🔬 Education"
                        break;
                    case "Meetup":
                        return "📅 Meetup"
                    case "Job":
                        return "💼 Job"
                    default:
                        return "";
                }
    }

  return (
    <div className="card">
        <div className="card-img-container">
            {type === 'Job' ? "" : <img src={img} className="card-img-top" alt={title}/>}
        </div>
        <div className="card-body container">
            <p>{emojiSwitch(type)}</p>
            <div className="row">
            <div className="col-10">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-2" style={{display: "flex", justifyContent: "center"}}>
                <div className="dropdown">
                    <a className='dropdown-btn' hrefLang="#" role="button" itemID="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <SlOptions/>
                    </a>
                    <ul className='dropdown-menu'>
                        <li><a className='dropdown-item' href="#">Edit</a></li>
                        <li><a className='dropdown-item' href="#">Report</a></li>
                        <li><a className='dropdown-item' href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <p className="card-text">{subtitle}</p>
        
            <div className={(type === "Meetup" || type === "Job") ? "" : "hidden"}>
                <div className="info">
                    <p>{type === "Meetup" ? <RiCalendarEventFill/> : <BsBriefcase/>} {type === "Meetup" ? date: company}</p>
                    <p><GoLocation/> {location}</p>
                </div>

                <div className={type === "Meetup" ? "redirect-btn-container orange " : "redirect-btn-container green"}>
                    <button className='btn '>{type === "Meetup" ? "Visit Website" : "Apply on Timesjob"}</button>
                </div>
            </div>

            <div className="profile">
                <div className="user">
                    <img src={profileImg} alt="" />
                    <h3>{username}</h3>
                </div>

                <div className="share">
                    <span><AiOutlineEye/> 1.4k Views</span>
                    <button className='btn'><BsFillShareFill/></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
