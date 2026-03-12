import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'


const dummy_data = [
  {
    id: 1,
    src: "picsum.photos/150",
    filename: "placeholder_1",
    caption: "auto_caption_1",
    customCaption: "user_provided_caption_1"
  },
  {
    id: 2,
    src: "picsum.photos/160",
    filename: "placeholder_2",
    caption: "auto_caption_2",
    customCaption: "user_provided_caption_2"
  },
  {
    id: 3,
    src: "picsum.photos/154",
    filename: "placeholder_3",
    caption: "auto_caption_3",
    customCaption: "user_provided_caption_3"
  },
  {
    id: 4,
    src: "picsum.photos/145",
    filename: "placeholder_4",
    caption: "auto_caption_4",
    customCaption: "user_provided_caption_4"
  },
]


function App() {
  const [photos, setPhotos] = useLocalStorage("photos", dummy_data)
  const [theme, setTheme] = useLocalStorage("theme", 'A')
  const [playbackMode, setPlaybackMode] = useLocalStorage('playback-mode', 'A')

  return (
    <></>
  )
}

export default App
