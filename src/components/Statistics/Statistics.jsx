import PropTypes from "prop-types";

import { Title } from "components/Title/Title.styled";
import { Stats, StatsItem } from "./Statistics.styled";
import { BigText } from "components/Title/BigText.styled";
import { Section } from "components/Utils/Container";


export const Statistics = ({title,stats}) => {
    return (
        <Section>
        <Stats>
            {title && <Title>{title}</Title>}
            <ul>
                {stats.map(({id, label, percentage})=>(
                    <StatsItem key={id} color={getRandomHexColor()}>
                        <span>{label}</span><br></br>
                        <BigText size='24px'>{percentage}%</BigText>
                    </StatsItem>
                ))
                }
            </ul>
        </Stats>
        </Section>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
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

  