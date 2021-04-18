// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }

        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrateClick}>Increase bitrate 8 ➤ 12</button><br></br> 
                <button className='resolution' onClick={this.handleResolutionClick}>Throttle resolution 1080p ➤ 720p</button> 
            </div>
        )
    }
}