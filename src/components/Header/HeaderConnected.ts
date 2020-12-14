import { connect } from 'react-redux';
import { selectTotalItemsInCart } from '../../selectors/cart/selectTotalItemsInCart';
import { Store } from '../../stores';
import { Header, HeaderProps } from './Header';

const mapStateToProps = (store: Store): HeaderProps => {
    return {
        totalItemsInCart: selectTotalItemsInCart(store),
    };
};

export const HeaderConnected = connect(mapStateToProps, undefined)(Header);