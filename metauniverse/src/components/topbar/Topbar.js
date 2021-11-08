import React from 'react';
import './Topbar.css';
import {Search,Person,Chat,Notifications} from '@material-ui/icons'

function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'> MetaUniverse</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                   <Search/>
                <input placeholder='Search for friends,post or video'  className='searchInput'/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home </span>
                    <span className="topbarLink">TimeLine </span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
