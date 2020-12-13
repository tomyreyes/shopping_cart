import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RequestItemsByCategoryAction, requestItemsByCategory } from '../../stores/items/actions';
import { Home, HomeActions } from './Home';

type Action = RequestItemsByCategoryAction;

const mapDispatchToProps = (dispatch: Dispatch<Action>): HomeActions => ({
    dispatchRequestItemsByCategory: (categoryId: string): RequestItemsByCategoryAction =>
        dispatch(requestItemsByCategory(categoryId)),
});

export const HomeConnected = connect(undefined, mapDispatchToProps)(Home);