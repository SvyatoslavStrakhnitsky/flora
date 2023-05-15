import { ProjectFormSchema } from '@/process/NewProjectForm';

export interface StateSchema {
    projectForm: ProjectFormSchema;
}

export type StateSchemaKey = keyof StateSchema;