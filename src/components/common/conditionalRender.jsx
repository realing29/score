import PropTypes from 'prop-types'

const СonditionalRender = ({ condition, children }) => {
  return children[condition]()
}

СonditionalRender.propTypes = {
  condition: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  children: PropTypes.object,
}

export default СonditionalRender
