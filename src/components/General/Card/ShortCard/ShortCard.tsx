import React from 'react';
import { Card, Image, Text, Group } from '@mantine/core';

import { transformToParam } from '../../../../utils/utils';

import classes from './styles.module.css';

interface IShortCardProps {
    title: string;
    image: string;
}

const ShortCard: React.FC<IShortCardProps> = ({ title, image }) => {
    return (
        <a href={`/${transformToParam(title)}`} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
            <Card radius='md' p={0} className={classes.card}>
                <Group gap='md'>
                    <Image src={image} height={120} />
                    <Text className={classes.title} style={{ alignSelf: 'flex-start' }} mt='md'>{title}</Text>
                </Group>
            </Card>
        </a>
    );
}

export default ShortCard;
