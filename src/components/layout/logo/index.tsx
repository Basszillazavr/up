import React, { FC } from 'react';

const Logo: FC = () => {
    return (
            <img className="logo"
                 src="/images/upper-logo.png"
                 srcSet="/images/mini-logo.png 576w, /images/upper-logo.png 577w"
                 alt="upper-setup"
            />
    );
};
export default Logo;
