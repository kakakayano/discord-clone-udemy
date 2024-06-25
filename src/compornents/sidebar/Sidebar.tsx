import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';



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
                            <ExpandMoreIcon />                            
                            <h4>プログラミングチャンネル</h4>
                        </div>
                        <AddIcon className="sidebarAddIcon"   /*onClick={addChannel}*/ />
                    </div>
                    <div className='sidebarChannelList'>
                        <SidebarChannel />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;