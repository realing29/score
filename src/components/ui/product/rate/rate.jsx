import PropTypes from 'prop-types'
import Stars from './stars'

const Rate = ({ rate }) => {
  const { count, value } = rate

  return (
    <div>
      <p>
        {value}
        <Stars value={value} />
        <sup>{count}</sup>
      </p>
    </div>
  )
}

Rate.propTypes = {
  rate: PropTypes.object,
}

export default Rate
