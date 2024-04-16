import React from 'react';
import { Box, Text } from '@mantine/core';

import classes from './styles.module.css';

interface ICardItemProps {
    title: string;
    image: string;
    navigateId?: string;
    navigatePath?: string;
}

const CardItem: React.FC<ICardItemProps> = ({ title, image }) => {
    return (
        <Box
            h={{ base: 250, sm: 300, lg: 300 }}
            className={classes.cardItem}
            onMouseEnter={(e) => {
                const element = e.currentTarget;
                element.style.transform = 'translate(3px, -3px)';
            }}
            onMouseLeave={(e) => {
                const element = e.currentTarget;
                element.style.transform = 'translate(0, 0)';
            }}
        >
            <div className={classes.cardItemImage} style={{ backgroundImage: `url(${image})` }} />
            <Text
                style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '8px',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                fw={500}
                size='sm'
            >
                {title}
            </Text>
        </Box>
    );
}

export default CardItem;
