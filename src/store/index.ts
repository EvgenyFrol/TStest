import { createStore } from 'redux';

import rootReducer from './reducers';

export type RootStateType = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
