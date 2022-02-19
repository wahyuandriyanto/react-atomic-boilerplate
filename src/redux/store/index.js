import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import rootReduces from 'redux/reducers/rootReduces'

const store = createStore(
    rootReduces,
    composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
