import { type FC, memo, type ReactNode } from 'react';
import Link from 'next/link';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'accent';

interface AppLinkProps {
    to: string;
    children: ReactNode;
    theme?: AppLinkTheme;
    className?: string;
    small?: boolean;
    big?: boolean;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to, 
        className,
        children, 
        theme = 'primary', 
        small,
        big,
        ...otherProps 
    } = props;

    const mods: Mods = {
        [cls.smallBtn]: small,
        [cls.bigBtn]: big
    };

    return (
        <Link
            href={to}
            className={classNames(cls.link, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

