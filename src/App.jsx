import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import DropZone from './components/DropZone'
import PhotoReordering from './components/PhotoReordering'
import PhotoPlay from './components/PhotoPlay'
import ControlBar from './components/ControlBar'



function App() {
  const [photos, setPhotos] = useState([])
  // useLocalStorage("photos", [])
  const [currIndex, setCurrIndex] = useLocalStorage("currIndex", 0)
  const [theme, setTheme] = useLocalStorage("theme", 'A')
  const [playbackMode, setPlaybackMode] = useLocalStorage('playback-mode', 'random')
  const [reorder, setReorder] = useState(true)
  const [playbackSettings, setPlaybackSettings] = useLocalStorage("playback-settings", {
    playbackDuration: 3,
    animationDuration: 3
  })

  let render;

  if (photos.length === 0) render = <DropZone setPhotos={setPhotos} photos={photos}/>
  else render = (<>
      <PhotoPlay photos={photos} currIndex={currIndex} setCurrIndex={setCurrIndex} playbackMode={playbackMode} playbackSettings={playbackSettings}/>
      <ControlBar setPlaybackMode={setPlaybackMode} playbackMode={playbackMode} 
        setTheme={setTheme} theme={theme} 
        playbackSettings={playbackSettings} setPlaybackSettings={setPlaybackSettings}
        photos={photos} setPhotos={setPhotos}/>
        
    </>
  )

  return (
    <>
    {
      render
    }
    </>
  )
}

export default App
