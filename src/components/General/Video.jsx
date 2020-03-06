/**
 * Component for videos
 * 
 * Example component from: https://www.gatsbyjs.org/docs/working-with-video/
 */
import React from "react"

const Video = ({ srcUrl, title, ...props }) => (
  <div className="video">
    <iframe
      src={srcUrl}
      title={title}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video