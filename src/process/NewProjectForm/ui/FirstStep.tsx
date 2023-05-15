'use client';

import { 
    getCategoriesData, 
    getNameData, getUrlData, 
    projectFormActions 
} from '@/process/NewProjectForm';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Chip } from '@/shared/ui/Chip';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { StepHeader } from './StepHeader';
import cls from './FormSteps.module.scss';

interface FirstStepProps {
    stage: number;
    chips: string[];
    onNextScreenShow: () => void;
}

export const FirstStep: FC<FirstStepProps> = (props) => {
    const {
        stage,
        chips,
        onNextScreenShow,
    } = props;

    const dispatch = useAppDispatch();
    const name = useSelector(getNameData);
    const url = useSelector(getUrlData);
    const categories = useSelector(getCategoriesData);

    const onNameChange = useCallback((value: string | number) => {
        dispatch(projectFormActions.setNameData(String(value)));
    }, [dispatch]);

    const onUrlChange = useCallback((value: string | number) => {
        dispatch(projectFormActions.setUrlData(String(value)));
    }, [dispatch]);

    const onCategoriesChange = useCallback((value: string) => {
        dispatch(projectFormActions.setCategoriesData(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.step)}>
            <StepHeader 
                header={'Add New Project'}
                subHeader={'To Create Quest you need firstly create Project'}
            />

            <form>
                <Input
                    className={cls.input}
                    label={'Project Name (It can be changed later)'}
                    value={name}
                    onChange={onNameChange}
                    autoFocus={stage === 1}
                />
                <Input 
                    className={cls.input}
                    label={'Project URL (It cannot be changed after creation)'}
                    value={url}
                    onChange={onUrlChange}
                />
                <Text>Project Category (It cannot be changed after creation)</Text>
                <div className={cls.chips}>
                    {
                        chips.map((chip, idx) => (
                            <Chip 
                                key={idx} 
                                label={chip} 
                                list={categories}
                                onClick={onCategoriesChange}
                            />
                        ))
                    }
                </div>
            </form>
            <Button theme='accent' onClick={onNextScreenShow} big>
                Add Project
            </Button>
        </div>
    );
};
