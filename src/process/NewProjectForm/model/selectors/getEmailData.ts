import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getEmailData = (state: StateSchema) => state.projectForm.data.third.email ?? '';