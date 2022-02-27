import React from 'react'

const POST = ({
    displayname,
    username,
    text,
    avatar,
    timestamp,
    isProfileImageNft,
}) => {
  return (
    <div className={style.wrapper}>
        <div>
            <img src={avatar} alt={username} classname={isProfileImageNft ?} />
        </div>
    </div>
  )
}

export default POST