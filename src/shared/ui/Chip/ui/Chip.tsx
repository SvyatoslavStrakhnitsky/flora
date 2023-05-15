'use client';

import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { MouseEvent, FC, useState } from 'react';
import cls from './Chip.module.scss';

interface ChipProps {
    label: string;
    list: string[];
    className?: string;
    onClick: (value: string) => void;
}

export const Chip: FC<ChipProps> = (props) => {
    const {
        list,
        label,
        className,
        onClick
    } = props;

    const [selected, setSelected] = useState(false);

    const mods: Mods = {
        [cls.selected]: selected && list.includes(label)
    };

    const onChipClick = (e: any) => {
        onClick(e.target.value);
        setSelected(prev => !prev);
    };

    return (
        <input 
            type='button'
            value={label}
            className={classNames(cls.chip, mods, [className])} 
            onClick={onChipClick}
        />
    );
}; 