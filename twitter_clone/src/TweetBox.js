import React from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        // Tweetbox is that whole area with TweetBox, avatar and text input area        
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar 
                        src="https://lh3.googleusercontent.com/ogw/ADea4I5OeipD_9Tk2q7g6xvEcQ9COoxpNybCVOLG69Gn7g=s32-c-mo"
                    />
                    <input placeholder="What's happening?" type="text"/>
                    
                </div>

                <input 
                className="tweetBox__imageInput"
                placeholder="Enter Image url" 
                type="text"
                />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
