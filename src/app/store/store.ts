import { Movie } from '../movies/movie';
import { IAppState} from './IAppState';
import { createStore, GenericStoreEnhancer, compose } from 'redux';
// import { reducer } from './reducer';


declare var window: any;

const devToolsExtension: GenericStoreEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;

// export const store =  createStore<IAppState>(reducer, compose(devToolsExtension) as GenericStoreEnhancer);
