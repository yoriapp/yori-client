import React from 'react';
import { Box } from '@mantine/core';

import LongText from '../../../Text/LongText';
import Tags from '../../../General/Tags';
import { TagDto } from '@/client/__generated__/graphql';

interface ITabInformationProps {
    description: string;
    tags: TagDto[];
}

const TabInformation: React.FC<ITabInformationProps> = ({ description, tags }) => {
    return (
        <Box>
            <LongText mt={10} text={description} maxLength={440} />
            <Tags tags={tags} />
        </Box>
    );
}

export default TabInformation;