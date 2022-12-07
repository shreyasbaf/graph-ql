import { DoubleLoadingSpinner } from './LoadingSpinner.style'

const LoadingSpinner = ({ innerSize = '20', outerSize='50' }) => {
  return <DoubleLoadingSpinner innerSize={innerSize} outerSize={outerSize} />
}

export default LoadingSpinner
