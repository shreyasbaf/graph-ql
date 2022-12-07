import { DoubleLoadingSpinner } from './LoadingSpinner.style'

interface I_SpinnerProps{
  innerSize?:any
  outerSize?:any
}
const LoadingSpinner = ({ innerSize = '10', outerSize='30' }:I_SpinnerProps) => {
  return <DoubleLoadingSpinner innerSize={innerSize} outerSize={outerSize} />
}

export default LoadingSpinner
