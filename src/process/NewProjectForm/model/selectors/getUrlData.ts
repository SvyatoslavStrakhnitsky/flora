import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getUrlData = (state: StateSchema) => state.projectForm.data.first.url ?? '';