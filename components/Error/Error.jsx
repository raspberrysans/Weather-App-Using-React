import React from 'react';
import PropTypes from 'prop-types';

import'./Error.css';

const Error = ({ message }) => (
    <div className="error" role="alert">
        {message}
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred. Please make sure to enter a valid location',
};

export default Error;
