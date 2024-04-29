import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import classes from './styles.module.css';

interface ICarouselProps {
    title: string;
    items: React.ReactNode[];
}

const Carousel: React.FC<ICarouselProps> = ({ title, items }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const itemsPerSlide = 3;
    const numSlides = Math.ceil(items.length / itemsPerSlide);

    const handleNextClick = () => {
        setActiveIndex(prevIndex => {
            const nextSlideIndex = (prevIndex + itemsPerSlide) < items.length ? prevIndex + itemsPerSlide : 0;
            return nextSlideIndex;
        });
    };

    const handlePrevClick = () => {
        setActiveIndex(prevIndex => {
            const prevSlideIndex = (prevIndex - itemsPerSlide) >= 0 ? prevIndex - itemsPerSlide : (numSlides - 1) * itemsPerSlide;
            return prevSlideIndex;
        });
    };

    return (
        <Box mt='md' className={classes.carousel}>
            <Box mb={2} className={classes.carouselHeader}>
                <Text fw={500}>{title}</Text>
                <Box display='flex'>
                    <Button onClick={handlePrevClick} disabled={activeIndex === 0} variant='outline' color='gray' size='xs'>
                        <IconChevronLeft />
                    </Button>
                    <Button
                        ml='xs'
                        onClick={handleNextClick}
                        disabled={activeIndex >= (numSlides - 1) * itemsPerSlide}
                        variant='outline'
                        color='gray'
                        size='xs'
                    >
                        <IconChevronRight />
                    </Button>
                </Box>
            </Box>
            <Box display='flex' mt='xs' className={classes.carouselItems}>
                {items.slice(activeIndex, activeIndex + itemsPerSlide).map((item, index) => (
                    <Box
                        key={index}
                        className={classes.itemAnimation}
                        style={{
                            flex: '0 0 auto',
                            marginRight: index !== itemsPerSlide - 1 ? '16px' : '0px',
                            minWidth: `calc((100% - ${(itemsPerSlide - 1) * 16}px) / ${itemsPerSlide})`
                        }}
                    >
                        {item}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;
