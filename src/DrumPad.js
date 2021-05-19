import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setDisplay, selectPower, selectVolume } from './soundbankSlice'

const padDownStyle = {
  backgroundColor: '#ffa331fa',
  border: 'none',
  borderRadius: '2px'
}

export const DrumPad = ({ keyChar, keyCode, name, audioUrl }) => {
  const [ active, setActive ] = useState(false)

  const power = useSelector(selectPower)
  const volume = useSelector(selectVolume)

  const dispatch = useDispatch()

  const playAudio = () => {
    const audio = document.getElementById(keyChar)

    if (power && audio) {
      setDisplay({text: name})
      audio.currentTime = 0
      audio.volume = volume / 100
      audio.play()
    } else {
      setDisplay({text: '---'})
    }
  }

  useEffect(() => {

    const handleClick = (e) => {
      if (e.target.id === name) {
        dispatch(setDisplay({text: name}))
        playAudio()
      }
    }

    const handleKeyDown = (e) => {
      if (e.repeat) {
        return
      }
      if (e.keyCode === keyCode) {
        dispatch(setDisplay({text: name}))
        setActive(true)
        playAudio()
      }
    }

    const handleKeyUp = (e) => {
      if (e.keyCode === keyCode) {
        setActive(false)
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <div
      id={name}
      className='drum-pad'
      style={active ? padDownStyle : {}}
    >
      {keyChar}
      <audio id={keyChar} className='clip' src={audioUrl}></audio>
    </div>
  )
}
