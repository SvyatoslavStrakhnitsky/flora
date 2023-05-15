import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getProjectAmount = (state: StateSchema) => state.projectForm.data.third.projectsAmount ?? 0;