import PropTypes from "prop-types";

import { Title } from "components/Title/Title.styled";
import { Stats, StatsItem } from "./Statistics.styled";
import { BigText } from "components/Title/BigText.styled";


export const Statistics = ({title,items}) => {
    return (
        <Stats>
            {title && <Title>{title}</Title>}
            <ul>
                {items.map(({id, label, percentage})=>(
                    <StatsItem key={id} color={getRandomHexColor()}>
                        <span>{label}</span><br></br>
                        <BigText size='24px'>{percentage}%</BigText>
                    </StatsItem>
                ))
                }
            </ul>
        </Stats>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ),
    size: PropTypes.string
}
function getRandomHexColor() {
    return `#${String(Math.floor(Math.random() * 16777215).toString(16)).padEnd(6, '0')}`;
  }

  