import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



const Sidebar = () => {
    return (
        <div className='sidebar'>

            {/*sidebarLeft*/}

            <div className='sidebarLeft'>

                <div className='serverIcon'>
                    <img src="./logo192.png" alt=""></img>
                </div>

                <div className='serverIcon'>
                    <img src="./logo192.png" alt=""></img>
                </div>

            </div>

            {/*SidebarRight*/}
            <div className='sidebarRight'>
                
                <div className='sidebarTop'>
                    <h3>Discord</h3>
                    <ExpandMoreIcon />
                </div>

                <div className="sidebarChannels">
                    <div className="sidebarChannelsHeader">
                        <div className="sidebarHeader">
                            <AddCircleOutlineIcon />
                            <h4>プログラミングチャンネル</h4>
                        </div>
                        {/*    <AddIcon className="sidebarAddChannel" onClick={addChannel} />    */}
                    </div>
                <div/>

            </div>
        </div>
    )
}

export default Sidebar