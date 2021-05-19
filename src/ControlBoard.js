import { PowerControl } from './PowerControl'
import { VolumeControl } from './VolumeControl'
import { Display } from './Display'
import { BankControl } from './BankControl'

export const ControlBoard = () => {

  return (
    <div
      id='control-board'
      className='container'
    >
      <PowerControl />
      <Display />
      <VolumeControl />
      <BankControl />
    </div>
  )
}
