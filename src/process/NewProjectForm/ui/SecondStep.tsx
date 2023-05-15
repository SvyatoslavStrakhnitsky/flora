import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { RadioButton } from '@/shared/ui/RadioButton';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { projectFormActions, getNameData } from '@/process/NewProjectForm';
import { StepHeader } from './StepHeader';
import cls from './FormSteps.module.scss';

interface SecondStepProps {
    goals: string[];
    onNextScreenShow: () => void;
    onPrevScreenShow: () => void;
}

export const SecondStep: FC<SecondStepProps>  = (props) => {
    const {
        goals,
        onNextScreenShow,
        onPrevScreenShow
    } = props;

    const dispatch = useAppDispatch();
    const goalValue = useSelector(getNameData);

    const onGoalChange = useCallback((value: string) => {
        dispatch(projectFormActions.setGoalData(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.step)}>
            <StepHeader 
                header={'What is your main goal with AlphaQuest'}
                subHeader={'Project Details'}
            />
            
            <form>
                {
                    goals.map((goal, idx, arr) => (
                        <RadioButton 
                            key={idx}
                            name='goal'
                            value={goal}
                            label={goal}
                            defaultValue={goalValue}
                            className={cls.radioBtn}
                            onChange={onGoalChange}
                        />
                    ))
                }
            </form>
            
            <div className={cls.btnWrapper}>
                <Button 
                    onClick={onPrevScreenShow}
                    small
                >
                    Back
                </Button>
                <Button 
                    onClick={onNextScreenShow} 
                    theme="accent"
                    big
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};