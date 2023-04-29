import { Dispatch } from 'react';
import { IState } from '../states/rootState';
import { ActionType } from '../actions/rootReducer/actions';

export interface IAppContext {
    state: IState;
    dispatch: Dispatch<ActionType>;
}
