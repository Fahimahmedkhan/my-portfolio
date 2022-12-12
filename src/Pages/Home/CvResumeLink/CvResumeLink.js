import React from 'react';

const CvResumeLink = () => {
    return (
        <>
            <a href="https://drive.google.com/file/d/1oYA3EiAzmgBz4UmQFW-Pc7Fwrkenn1g6/view?usp=sharing" target="_blank" rel='noreferrer'
                className="rounded-full py-2 px-6 bg-yellow-600 hover:bg-yellow-700 hover:text-white text-black text-xl font-medium mx-2">My CV</a>
            <a href="https://drive.google.com/file/d/1Zl7lR3NhkIM2ZvoF-D5s4UlWPfruioXM/view?usp=share_link" target="_blank" rel='noreferrer'
                className="rounded-full py-2 px-6 text-black bg-yellow-600 hover:bg-yellow-700 hover:text-white text-xl font-medium mx-2">My Resume</a>
        </>
    );
};

export default CvResumeLink;