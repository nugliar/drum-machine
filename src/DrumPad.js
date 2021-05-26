import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setDisplay, selectPower, selectVolume } from './soundbankSlice'

const padDownStyle = {
  backgroundColor: '#ffa331fa',
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

  const handlePointerDown = (e) => {
    if (e.cancelable) {
      e.preventDefault()
    }
    dispatch(setDisplay({text: name}))
    setActive(true)
    playAudio()
  }

  const handlePointerUp = (e) => {
    setActive(false)
  }

  useEffect(() => {

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

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <div
      id={name}
      className='drum-pad'
      style={active ? padDownStyle : {}}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchCancel={handlePointerUp}
    >
      {keyChar}
      <audio id={keyChar} className='clip' src={audioUrl}></audio>
    </div>
  )
}
