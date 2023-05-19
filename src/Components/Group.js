import React, { useState } from 'react';

const Group = ({img, name}) => {

  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className='group'>
      <div style={{display: "flex"}}>
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      {
        isFollowing ?
        <button onClick={()=> setIsFollowing(!isFollowing)} className='btn following'>Followed</button>
        :
        <button onClick={()=> setIsFollowing(!isFollowing)} className='btn follow'>Follow</button>

      }
    </div>
  );
}

export default Group;
