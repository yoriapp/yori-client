import React from 'react';
import { Link } from 'react-router-dom';

import classes from './styles.module.css';

import { IHeaderLinksProps } from '../../interfaces';

const HeaderLinks: React.FC<IHeaderLinksProps> = ({ navigationData }) => {
    const renderNavigationLinks = navigationData.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.link}
                className={classes.link}
            >
                {link.label}
            </Link>
        );
    });

    return <>{renderNavigationLinks}</>;
}

export default HeaderLinks;
