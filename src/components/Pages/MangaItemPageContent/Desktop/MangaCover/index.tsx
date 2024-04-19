import React from 'react';
import { Box, Image, Button } from '@mantine/core';

import AddToLibraryMenu from '../AddToLibraryMenu';

interface IMangaCover {
    coverImage: string;
}

const MangaCover: React.FC<IMangaCover> = ({ coverImage }) => {
    return (
        <Box>
            <Image 
                h={350}
                radius='md'
                src={coverImage}
            />
            <Box mt={20}>
                <Button w='100%' color='violet'>Start reading</Button>
                <AddToLibraryMenu />
            </Box>
        </Box>
    );
}

export default MangaCover;
