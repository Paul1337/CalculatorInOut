import React, { PropsWithChildren, useEffect, useReducer } from 'react';
import reducer, { initialState } from '../../redux/rootReducer/rootReducer';
import { IAppContext } from '../../models/contexts/appContext';
import { loadItemsAction } from '../../redux/rootReducer/actions';

export const AppContext = React.createContext<IAppContext | null>(null);

const AppContextProvider = (props: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.dataIsLoaded) localStorage.setItem('expenses', JSON.stringify(state.expenses));
    }, [state.expenses]);
    useEffect(() => {
        if (state.dataIsLoaded) localStorage.setItem('incomes', JSON.stringify(state.incomes));
    }, [state.incomes]);

    useEffect(() => {
        dispatch(
            loadItemsAction({
                incomes: JSON.parse(localStorage.getItem('incomes') || '[]'),
                expenses: JSON.parse(localStorage.getItem('expenses') || '[]'),
            })
        );
    }, []);

    return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
