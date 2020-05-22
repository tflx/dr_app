import Proptypes from 'prop-types'

export const propTypes = {
  Title: Proptypes.string.isRequired,
  Description: Proptypes.string,
  PrimaryImageUri: Proptypes.string,
  Items: Proptypes.array,
}

export const defaultProps = {}

/**
 * Model used in newslists/overview pages for news, articles etc.
 */
const ThemeViewModel = Proptypes.shape(propTypes)

export default ThemeViewModel