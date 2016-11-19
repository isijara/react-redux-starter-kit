import {createStore, applyMiddleware, compose} from 'redux';
import promise                        from 'redux-promise';
import rootReducer                    from '../reducers';
import reduxImmutableStateInvariant   from 'redux-immutable-state-invariant';
import thunk                          from 'redux-thunk';
import DevTools from '../devTools/DevTools';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    //compose(applyMiddleware(promise, thunk, reduxImmutableStateInvariant()))
    compose(applyMiddleware(promise, thunk, reduxImmutableStateInvariant()), DevTools.instrument())
  );
}
