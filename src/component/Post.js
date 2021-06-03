import { Avatar } from '@material-ui/core'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedICon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import {  MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import '../css/Post.css'

function Post() {
  return (
    <div className = "post">
      <div className = "post_info">
        <Avatar />
        <h5>Username</h5>
        <small>Timestamp</small>
      </div>
        
      <div className ="post_body">
        <div className="post_question">
          <p>Question</p>
          <button className ="post_btnAnswer">
            Answer
          </button>
        </div>
        <img src= "https://qphs.fs.quoracdn.net/main-qimg-54c410af45d36057be09b23397fea9bb"
             alt=""/>
      </div>
      <div className ="post_footer">
          <div className="post_footerAction">

            <ArrowUpwardOutlinedIcon />
            <ArrowDownwardOutlinedICon />

          </div>
          
          <RepeatOutlinedIcon/>
          <ChatBubbleOutlineOutlinedIcon/>

          <div className="post_footerLeft">
            <ShareOutlined/>
            <MoreHorizOutlined/>
          </div>

      </div>
    </div>
  )
}

export default Post
