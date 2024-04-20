import React, { useState } from 'react';
import { Box, BoxProps, Text } from '@mantine/core';
import { Maybe } from '@/client/__generated__/graphql';

interface ILongTextProps extends BoxProps {
    text?: Maybe<string>;
    maxLength: number;
}

const LongText: React.FC<ILongTextProps> = ({ text, maxLength, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const shortenedText = 
        text && text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

    return (
        <Box {...otherProps}>
            <Text>{isExpanded ? text : shortenedText}</Text>
            <Box>
                {text && text.length > maxLength && (
                    <Text onClick={() => setIsExpanded(!isExpanded)} size='sm' style={{ color: 'violet', cursor: 'pointer' }}>
                        {isExpanded ? 'Collapse' : 'More...'}
                    </Text>
                )}
            </Box>
        </Box>
    );
}

export default LongText;
