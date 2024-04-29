import React from 'react';
import { Box, Loader } from '@mantine/core';

import classes from './Loader.module.css';

function ContentLoader() {
    return (
        <Box className={classes.contentLoader}>
            <div className={classes.contentLoaderInner}>
                <Loader size={30} color='violet' />
            </div>
        </Box>
    );
}

export default ContentLoader;
