import { useDispatch, useSelector } from 'react-redux'

import { selectVolume, setVolume, setDisplay } from './soundbankSlice'

export const VolumeControl = () => {
  const volume = useSelector(selectVolume)

  const dispatch = useDispatch()

  const adjustVolume = (e) => {
    dispatch(setVolume({volume: e.target.value}))
    dispatch(setDisplay({text: `Volume: ${e.target.value}`}))
  }

  return (
    <div
      id='volume-control'
      className='container control-container'
    >
      <p className='control-label'>Volume</p>
      <input
        type='range'
        min='0'
        max='100'
        increment='1'
        value={volume}
        onChange={adjustVolume}
      />
    </div>
  )
}
