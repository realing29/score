import PropTypes from "prop-types"
import "./textField.css"

const TextField = ({ label, type, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} value={value} onChange={handleChange} />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextField.defaultProps = {
  type: "text",
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default TextField
