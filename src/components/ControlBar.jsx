import React from 'react'
import "./ControlBar.css"
import PhotoReordering from './PhotoReordering'
const playbackOptions = ['manual', 'auto', 'random']
const themeOptions = ['A', 'B', 'C', 'D']


const ControlBar = ({setPlaybackMode, playbackMode, setTheme, theme, playbackSettings, setPlaybackSettings, photos, setPhotos}) => {

  const handleChangePlayback = (e) => {
    setPlaybackMode(e.target.value)
  }

  const handleChangeTheme = (e) => {
    setTheme(e.target.value)
  }



  return (
    <div className='bar-wrapper'>
      <fieldset className="section">
        <legend className='playback-heading'>Playback Mode</legend>
        {
          playbackOptions.map(option => (
            <label className='radio-lbl'>
              <input 
                type='radio'
                checked={playbackMode===option}
                name='playback'
                value={option}
                onChange={handleChangePlayback}
                className='radio-inp'
                />
                {option}
            </label>
          ))
        }
      </fieldset>


      <fieldset className="section">
      <legend className='playback-heading'>Select Theme</legend>
      {
        themeOptions.map(option => (
            <label className='radio-lbl'>
              <input 
                type='radio'
                checked={theme===option}
                name='theme'
                value={option}
                onChange={handleChangeTheme}
                className='radio-inp'
                />
                {option}
            </label>
          ))
      }
      

      </fieldset>
      <div className="section">
        <h3 className="animation-duration-heading">Playback Duration: {playbackSettings.playbackDuration}</h3>
        <input type="range" max="30" min="1" step="1" value={playbackSettings.playbackDuration} 
          onChange={(e) => {
            setPlaybackSettings({...playbackSettings, playbackDuration: e.target.value})
          }} className='animation-duration-input'/>

      </div>

      <div className="section">
        <h3 className="animation-duration-heading">Animaton Duration: {playbackSettings.animationDuration}</h3>
        <input type="range" max="2" min="0.2" step="0.1" value={playbackSettings.animationDuration} 
          onChange={(e) => {
            setPlaybackSettings({...playbackSettings, animationDuration: e.target.value})
          }} className='animation-duration-input'/>

      </div>


          <PhotoReordering photos={photos} setPhotos={setPhotos}/>
    </div>
  )
}

export default ControlBar
