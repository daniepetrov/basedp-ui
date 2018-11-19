import styled from 'styled-components'
import {
    borders,
    borderColor,
    borderRadius,
    boxShadow,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    opacity,
    variant,
    height,
} from 'styled-system'

import Box from './../Box'

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
    borders,
    borderColor,
    borderRadius,
    boxShadow,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    opacity,
    height,
    props => props.theme.Card,
    cards
)

Card.propTypes = {
    ...borders.propTypes,
    ...borderColor.propTypes,
    ...borderRadius.propTypes,
    ...boxShadow.propTypes,
    ...backgroundImage.propTypes,
    ...backgroundSize.propTypes,
    ...backgroundPosition.propTypes,
    ...backgroundRepeat.propTypes,
    ...opacity.propTypes,
    ...cards.propTypes,
    ...height.propTypes,
}

Card.defaultProps = {
    variant: 'normal',
}

Card.displayName = 'Card'

export default Card
