import {BsStars} from 'react-icons/bs'
import TweetBox from'./TweetBox'
import Post from './post'

const style={
    wrapper :`flex-[2] border-r border-l border-[#38444d]`,
    header:`sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle:`text-xl font-bold`,
}
const tweets = [
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    },
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    },
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    },
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    },
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    },
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    },
    {
        displayname:'Qazi',
        username:'0xBi',
        avatar = 'https://pbs.twimg.com/profile_images/1450859641001242627/UWRwfw-5_reasonably_small.png',
        text:'gm',
        isProfileImageNft: false,
        timestamp:'2022-02-27T11:03:00.00Z'

    }
]
function Feed(){
    return(
        <div className={`${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />                
            </div>
            <TweetBox />
            {tweets.map((tweet,index)=>(
                <Post
                  key={index}
                  displayname={tweet.displayname}
                  username={tweet.username}
                  avatar={tweet.avatar}
                  text={tweet.text}
                  isProfileImageNft={tweet.isProfileImageNft}
                  timestamp={tweet.timestamp}
                 />
                
            ))}
        </div>
    )
}

export default Feed