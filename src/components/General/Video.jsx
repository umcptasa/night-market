/**
 * Component for videos
 * 
 * Example component from: https://www.gatsbyjs.org/docs/working-with-video/
 */
import React from "react"

const Video = ({ srcUrl, title, ...props }) => (
    <iframe
        className="video"
        src={srcUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
)
export default Video