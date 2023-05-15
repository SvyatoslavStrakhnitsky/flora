import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { StepHeader } from './StepHeader';
import {Button} from '@/shared/ui/Button';
import {Text} from '@/shared/ui/Text';
import {FC, useCallback} from 'react';
import { NumberField } from '@/shared/ui/NumberField';
import { Input } from '@/shared/ui/Input';
import { RadioButton } from '@/shared/ui/RadioButton';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { 
    projectFormActions,
    getEmailData,
    getLaunchData,
    getProjectAmount 
} from '@/process/NewProjectForm';
import cls from './FormSteps.module.scss';
import { AppLink } from '@/shared/ui/AppLink';

interface ThirdStepProps {
    launches: string[];
    onPrevScreenShow: () => void;
}

export const ThirdStep: FC<ThirdStepProps> = (props) => {
    const {
        launches,
        onPrevScreenShow
    } = props;

    
    const dispatch = useAppDispatch();
    const projectAmount = useSelector(getProjectAmount);
    const launchValue = useSelector(getLaunchData);
    const email = useSelector(getEmailData);

    const onProjectFormChange = useCallback((value: number) => {
        dispatch(projectFormActions.setProjectAmountData(value));
    }, [dispatch]);

    const onLaunchChange = useCallback((value: string) => {
        dispatch(projectFormActions.setLaunchData(value));
    }, [dispatch]);

    const onEmailChange = useCallback((value: string | number) => {
        dispatch(projectFormActions.setEmailData(String(value)));
    }, [dispatch]);

    return (
        <div className={classNames(cls.step)}>
            <StepHeader 
                header={'How many full-time workers on project?'}
                subHeader={'How many full-time workers on project?'}
            />
            <form>
                <NumberField 
                    className={cls.numberField} 
                    value={projectAmount}
                    onChange={onProjectFormChange}
                />
                <Text 
                    tag='h2' 
                    size='large' 
                    weight='w500'
                    className={cls.legend}
                    >
                    Are you pre or post product launch?
                </Text>
                {
                    launches.map((launch, idx, arr) => (
                        <RadioButton 
                            key={idx}
                            label={launch}
                            defaultValue={launchValue}
                            name='launch'
                            value={launch}
                            className={cls.input}
                            onChange={onLaunchChange}
                        />
                    ))
                }
                <Text 
                    tag='h2' 
                    size='large' 
                    weight='w500'
                    className={cls.legend}
                    >
                    Contact Email
                </Text>
                <Input 
                    className={cls.input}
                    value={email}
                    onChange={onEmailChange}
                />
            </form>
            <div className={cls.btnWrapper}>
                <Button 
                    onClick={onPrevScreenShow}
                    small
                >
                    Back
                </Button>
                <AppLink 
                    to='/submit'
                    theme='accent'
                    big
                >
                    Create Project
                </AppLink>
            </div>
        </div>
    );
};