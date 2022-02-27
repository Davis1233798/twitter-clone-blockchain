const style={
    wrapper:`w-min flex items-center rounded-[100px] p-4 cursor-pointer`,
    iconContainer:`text-xl mr-4`,
    textGeneral:`font-medium`,
    textActive:`font-bold`,
}

function SidebarOption({text,Icon,isActive,setSelected,}){
    return(
    <div
        className={style.wrapper}
        onclick={()=>{
            setSelected(text)
        }}
    >
        <div className={style.iconContainer}>
            <Icon />
        </div>
        <div className={`${isActive ? style.textActive : style.textGeneral}`}>
            {text}
        </div>
    
    
    
    </div>
    )


}





export default SidebarOption