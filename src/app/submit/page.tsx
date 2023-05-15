'use client';

import { getProjectFormData } from '@/process/NewProjectForm';
import {useSelector} from 'react-redux';
import {Text} from '@/shared/ui/Text';
import cls from './page.module.scss';

export default function Submit() {
    const {
        first,
        second,
        third
    } = useSelector(getProjectFormData);

    return (
        <main className={cls.main}>
            <table>
                <caption>
                    <Text theme='accent' weight='w700' size='large'>
                        Project data
                    </Text>
                </caption>
                <tbody>
                    <tr>
                        <td><Text>Name</Text></td>
                        <td>
                            <Text theme='accent'>
                                {first.name}
                            </Text>
                        </td>
                    </tr>
                    <tr>
                        <td><Text>Url</Text></td>
                        <td>
                            <Text theme='accent'>
                                {first.url}
                            </Text>
                        </td>
                    </tr>
                    <tr>
                        <td><Text>Categories</Text></td>
                        <td>
                            <Text theme='accent'>
                                {first.categories.join(', ')}
                            </Text>
                        </td>
                    </tr>
                    <tr>
                        <td><Text>Goal</Text></td>
                        <td>
                            <Text theme='accent'>
                                {second.goal}
                            </Text>
                        </td>
                    </tr>
                    <tr>
                        <td><Text>Workers</Text></td>
                        <td>
                            <Text theme='accent'>
                                {third.projectsAmount}
                            </Text>
                        </td>
                    </tr>
                    <tr>
                        <td><Text>Launch</Text></td>
                        <td>
                            <Text theme='accent'>
                                {third.launch}
                            </Text>
                        </td>
                    </tr>
                    <tr>
                        <td><Text>Email</Text></td>
                        <td>
                            <Text theme='accent'>
                                {third.email}
                            </Text>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}