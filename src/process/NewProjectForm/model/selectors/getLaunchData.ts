import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getLaunchData = (state: StateSchema) => state.projectForm.data.third.launch ?? '';