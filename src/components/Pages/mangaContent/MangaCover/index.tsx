import React from 'react';
import { Box, Button } from '@mantine/core';

import AddToLibraryMenu from '../AddToLibraryMenu';

interface IMangaCover {
    coverImage: string;
}

const MangaCover: React.FC<IMangaCover> = ({ coverImage }) => {
    return (
        <Box>
            <div
                style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px',
                    width: '100%',
                    height: 350
                }}
            />
            <Box mt={20}>
                <Button w='100%' color='violet'>Start reading</Button>
                <AddToLibraryMenu />
            </Box>
        </Box>
    );
}

export default MangaCover;
