
import{VscTwitter} from 'react-icons/vsc'
import{SidebarOption} from './SidebarOption'
import{ useState } from 'react'
import{ RiHome7Line , RiHome7Fill,RiFileList2Fill} from 'react-icons/ri'
import {biHash} from 'react-icons/bi'
import{FiBell,FiMoreHorizontal} from 'react-icons/fi'
import{HiOutlineMail,HiMail} from 'react-icons/hi'
import{FaRegListAlt,FaHashtagm,FaBell} from 'react-icons/fa'
import{CgMoreO}from'react-icons/cg'

const style = {
    wrapper:`flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton:`bg-[#1d9bf0] hover:bg-[#1b8cd8] flex item-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainter:`flex-1`,
    profileButton:`flex items-center mb-6 cursor-pointer hover:bg-[#333d45] rounded-[100px] p-2`,
    profileLeft:`flex item-center justify-center mr-4`,
    profileImage:`height-12 w-12 rounded-full`,
    profileRight:`flex-1 flex`,
    details:`flex-1`,
    name:`text-lg`,
    handle:`text-[#8899a6]`,
    moreContainer:`flex items-center mr-2`,
}
function Sidebar({ initialSelectedIcon = 'Home'}){
const[select,setSelected] = useState(initialSelectedIcon)
    return(
        <div className = {style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainter}>
                <SidebarOption Icon={Selected=='Home'? RiHome7Fill : RiHome7Line}
                text = 'Home'
                isActive = {Boolean(selected=='Home')}
                setSelected={setSelected}
                redrict={'/'}
                />
                <div>Explore</div>
                <div>Notifications</div>
                <div>Messages</div>
                <div>Bookmarks</div>
                <div>Lists</div>
                <div>Profile</div>
                <div>More</div>
                <div className={style.tweetButton}>Mint</div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>cleverqazu</div>
                        <div className={style.handle}>@0x22df...f</div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>
            
            
            </div>
            
        
        
        
        
        </div>
    )
    
}

export default Sidebar