import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RequestItemsByCategoryAction, requestItemsByCategory } from '../../stores/items/actions';
import { Home, HomeActions } from './Home';

type Action = RequestItemsByCategoryAction;

const mapDispatchToProps = (dispatch: Dispatch<Action>): HomeActions => ({
    dispatchRequestItemsByCategory: (category: string): RequestItemsByCategoryAction =>
        dispatch(requestItemsByCategory(category)),
});

export const HomeConnected = connect(undefined, mapDispatchToProps)(Home);