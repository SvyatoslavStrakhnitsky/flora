import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getGoalData = (state: StateSchema) => state.projectForm.data.second.goal ?? '';