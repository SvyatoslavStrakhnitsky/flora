import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import cls from './RadioButton.module.scss';

interface RadioButtonProps {
    label: string;
    value: string;
    name: string;
    defaultValue: string;
    className?: string;
    onChange: (value: string) => void;
}

export const RadioButton: FC<RadioButtonProps> = memo((props) => {
    const {
        label,
        value,
        name,
        defaultValue,
        className,
        onChange
    } = props;

    const onRadioClick = (e: ChangeEvent<HTMLInputElement>): void => {
        const {target: {value}} = e;
        onChange(value);
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <label>
                <input 
                    type="radio" 
                    name={name}
                    value={value}
                    onChange={onRadioClick}
                    defaultChecked={defaultValue === value}
                    className={classNames(cls.radio)}
                />
                <span>
                    {label}
                </span>
            </label>
        </div>
    );
});