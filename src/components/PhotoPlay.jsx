import React, { useEffect, useRef } from 'react'
import "./PhotoPlay.css"

const PhotoPlay = ({photos, playbackMode, currIndex, setCurrIndex, playbackSettings}) => {

    const wrapperRef = useRef(null)

    useEffect(() => {
        const toggleFullScreen = () => {
            if(!document.fullscreenElement) {
                wrapperRef.current.requestFullscreen()
            }else {
                document.exitFullscreen()
            }
        }

        const handleKeyDown = (e) => {
            if (e.key === "/" || e.key.toLowerCase() === "f") {
                e.preventDefault(); 
                toggleFullScreen();
            }

            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
                e.preventDefault();
                toggleFullScreen();
            }

            if (playbackMode === "manual")
            {
                if(e.key == "ArrowRight") {
                    setCurrIndex(prev => (prev + 1) % photos.length)
                }else if (e.key == "ArrowLeft") {
                    setCurrIndex(prev => (prev - 1 + photos.length) % photos.length)
                }
            }
        }

        if(playbackMode === "auto")
        {
            setTimeout(() => setCurrIndex(prev => (prev + 1) % photos.length), playbackSettings.playbackDuration * 1000)
        }else if(playbackMode === "random")
        {
            setTimeout(() => setCurrIndex(Math.floor(Math.random() * (photos.length-1))), playbackSettings.playbackDuration * 1000)
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [photos.length, playbackMode, setCurrIndex, playbackSettings.playbackDuration])

    
    useEffect(() => {
        const toggleFullScreen = () => {

        }
    }, [])


  return (
    <div className='photo-wrapper' ref={wrapperRef}>
      <img src={photos[currIndex].src} alt={photos[currIndex].caption} className="image" />
      <p className="caption">{photos[currIndex].caption}</p>
    </div>
  )
}

export default PhotoPlay
