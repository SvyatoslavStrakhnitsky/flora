import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import e from 'express';
import { ProjectFormSchema } from '../types/ProjectFormSchema';

const initialState: ProjectFormSchema = {
    data: {
        first: {
            name: '',
            url: '',
            categories: [],
        },
        second: {
            goal: '',
        },
        third: {
            projectsAmount: 0,
            launch: '',
            email: '',
        }
    },
};

export const {
    actions: projectFormActions,
    reducer: projectFormReducer
} = createSlice({
    name: 'projectForm',
    initialState,
    reducers: {
        setNameData: (state, action: PayloadAction<string>) => {
            state.data.first.name = action.payload;
        },
        setUrlData: (state, action: PayloadAction<string>) => {
            state.data.first.url = action.payload;
        },
        setCategoriesData: (state, action: PayloadAction<string>) => {
            let categories = state.data.first.categories;
            
            if (categories.includes(action.payload)) {
                state.data.first.categories = categories.filter(category => category !== action.payload);
            } else {
                categories.push(action.payload);
            }
        },
        setGoalData: (state, action: PayloadAction<string>) => {
            state.data.second.goal = action.payload;
        },
        setProjectAmountData: (state, action: PayloadAction<number>) => {
            state.data.third.projectsAmount = action.payload;
        },
        setLaunchData: (state, action: PayloadAction<string>) => {
            state.data.third.launch = action.payload;
        },
        setEmailData: (state, action: PayloadAction<string>) => {
            state.data.third.email = action.payload;
        },
    }
});