import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getNameData = (state: StateSchema) => state.projectForm.data.first.name ?? '';