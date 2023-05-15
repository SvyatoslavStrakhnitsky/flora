export interface IProjectForm {
    first: {
        name: string;
        url: string;
        categories: string[];
    },
    second: {
        goal: string;
    },
    third: {
        projectsAmount: number;
        launch: string;
        email: string;
    }
} 