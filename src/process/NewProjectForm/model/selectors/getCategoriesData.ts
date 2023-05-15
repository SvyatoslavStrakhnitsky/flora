import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getCategoriesData = (state: StateSchema) => state.projectForm.data.first.categories ?? [];