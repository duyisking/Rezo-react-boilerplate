import { combineReducers } from 'redux';
import metadata from './metadata';

const logger = store => next => (action) => {
    console.log('DISPATCHING', action);
    const result = next(action);
    console.log('NEXT STATE', store.getState());
    return result;
};

const crashReporter = () => next => (action) => {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception!', err);
        throw err;
    }
};

const state = combineReducers({
    metadata,
});

export {
    state,
    logger,
    crashReporter,
};
