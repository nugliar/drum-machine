import { useDispatch, useSelector } from 'react-redux'

import { setDisplay, selectPower, switchPower } from './soundbankSlice'

export const PowerControl = () => {
  const power = useSelector(selectPower)

  const dispatch = useDispatch()

  const handlePowerClick = () => {
    dispatch(setDisplay({text: ''}))
    dispatch(switchPower())
  }

  const switchPointerClassName = power ?
    'switch-pointer switch-pointer-on' :
    'switch-pointer switch-pointer-off'

  return (
    <div id='power-control' className='container control-container'>
      <p className='control-label'>Power</p>
      <div className='switch' onClick={handlePowerClick}>
        <div className={switchPointerClassName} />
      </div>
    </div>
  )
}
