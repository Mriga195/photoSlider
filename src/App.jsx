import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import DropZone from './components/DropZone'





function App() {
  const [photos, setPhotos] = useLocalStorage("photos", [])
  const [theme, setTheme] = useLocalStorage("theme", 'A')
  const [playbackMode, setPlaybackMode] = useLocalStorage('playback-mode', 'A')

  return (
    <>
      <DropZone setPhotos={setPhotos} photos={photos}/>
    </>
  )
}

export default App
