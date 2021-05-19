import { useSelector } from 'react-redux'

import { selectDisplay, selectPower } from './soundbankSlice'

let displayStyle = {
  backgroundColor: 'rgb(255 163 49 / 70%)',
  width: '80%',
  minHeight: '40px',
  border: '1px solid #ccc'
}
const displayTextStyle = {
  fontWeight: 'bold',
  textAlign: 'center',
  margin: 'auto',
  color: '#222'
}

export const Display = () => {
  const display = useSelector(selectDisplay)
  const power = useSelector(selectPower)

  return (
    <div
      id='display'
      className='container'
      style={power ? displayStyle : {...displayStyle, backgroundColor: '#666'}}
    >
      <p style={displayTextStyle}>{display}</p>
    </div>
  )
}
