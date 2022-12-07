import { useGetFruitByID } from '../../graphql/useGetFruitByID';
import { CardWrapper } from './FruitDetails.style'
interface I_FruitProps {
    id: any
    fruitName: string
    scientificName: string
    family: string
    onClick?: any
}

const FruitDetails = (props: I_FruitProps) => {
    const { id, fruitName, scientificName, family, onClick } = props

    return (
        <CardWrapper key={id} onClick={onClick}>
              {`${fruitName} by ${scientificName} From ${family}`}
        </CardWrapper>
    )
}

export default FruitDetails
