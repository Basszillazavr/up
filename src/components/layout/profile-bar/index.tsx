import React, { FC } from 'react';

const ProfileBar: FC = () => {
    return (
        <div className="profile">
            <img className="user-logo" src="/images/user.svg" alt="upper-setup"/>
            <div>Anuar Yerzhanov</div>
        </div>
    );
};
export default ProfileBar;
