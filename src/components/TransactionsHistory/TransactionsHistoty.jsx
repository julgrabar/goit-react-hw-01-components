import PropTypes from "prop-types";

import { Section } from "components/Container";
import { Title } from "components/Title/Title.styled";
import { TransactionTable } from "./TransactionsHistory.styled";


export const Transactions = ({items,title}) =>{
    return(
        <Section>
        {title && <Title>{title}</Title>}
        <TransactionTable >
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency})=>(
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                ))}
                
            </tbody>
        </TransactionTable>
        </Section>
    )
}


Transactions.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ),
}