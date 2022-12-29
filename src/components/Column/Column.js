import styles from './Column.module.scss'
import Card from '../Card/Card.js'
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';
const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));
    // console.log('Column render');
    // const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>










    );
};
export default Column;