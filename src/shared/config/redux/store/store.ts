
import { projectFormReducer } from '@/process/NewProjectForm';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../types/StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        projectForm: projectFormReducer,
    };

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
