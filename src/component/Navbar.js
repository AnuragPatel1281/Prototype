import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar, Button } from '@material-ui/core';

function Navbar() {
  return (
    <div className = "qHeader">
       <div className = "qHeader_logo">
       <img
           src="data:image/png;base64,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"
           alt=""
      />
    </div>
    <div className = "qHeader_icons">
      <div className = "qHeader_icon">
          <HomeIcon />
      </div>
      <div className = "qHeader_icon">
          <FeaturedPlayListOutlinedIcon />
      </div>
      <div className = "qHeader_icon">
          <AssignmentTurnedInOutlinedIcon />
      </div>
      <div className = "qHeader_icon">
          <PeopleAltOutlinedIcon/>
      </div>
      <div className = "qHeader_icon">
          <NotificationOutlinedIcon/>
      </div>
      <div className = "qHeader_icon">
          
      </div>
    </div>
     <div className="qHeader_input">
       <SearchIcon/> 
       <input type = "text" placeholder ="Search Quora" />
     </div>
     <div className = "qHeader_Rem">
       <div className = "qHeader_avatar">
         <Avatar/>
       </div>
       <LanguageIcon />
       <Button>Add question</Button>
     </div>
    </div>
  )
}

export default Navbar
