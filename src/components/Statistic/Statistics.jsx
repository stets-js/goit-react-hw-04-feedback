import PropTypes from 'prop-types'
import css from './Statistics.module.css'


const Statistics = ({Good, Neutral, Bad, total, positivePercentage}) => {
    return (
    <ul className={css.ul}>
        <li>Good: {Good}</li>
        <li>Neutral: {Neutral}</li>
        <li>Bad: {Bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
    </ul>
    )
}

Statistics.propTypes = {
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics