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
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
)
export default Video