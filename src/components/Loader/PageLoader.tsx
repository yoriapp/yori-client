import React from 'react';
import { Loader } from '@mantine/core';

import classes from './Loader.module.css';

function PageLoader() {
    return (
        <div className={classes.pageLoader}>
            <Loader size={30} color='violet' />
        </div>
    );
}

export default PageLoader;
