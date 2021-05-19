import { useDispatch, useSelector } from 'react-redux'

import { switchSoundbank, selectBankId, setDisplay } from './soundbankSlice'

export const BankControl = () => {
  const bankId = useSelector(selectBankId)

  const dispatch = useDispatch()

  const handleBankClick = () => {
    dispatch(setDisplay({text: 'Bank ' + ((bankId + 1) % 2 + 1)}))
    dispatch(switchSoundbank())
  }

  const switchPointerClassName = bankId === 0 ?
    'switch-pointer switch-pointer-off' :
    'switch-pointer switch-pointer-on'

  return (
    <div id='bank-control' className='container control-container'>
      <p className='control-label'>Bank</p>
      <div className='switch' onClick={handleBankClick}>
        <div className={switchPointerClassName} />
      </div>
    </div>
  )
}
