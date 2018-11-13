import React from 'react';

const Footer = () => {

    const courseUrl = 'https://www.udemy.com/react-redux/';
    const sourceUrl = 'https://github.com/benjamin-summers/weather-app';

    const footerStyle = {
        textAlign: 'center',
        backgroundColor: 'gray'
    }

    return (
        <React.Fragment>
        <footer style={footerStyle}>
        <a href={courseUrl}>This App is from a course done by Stephen Grider, you can view this course by clicking on this link</a>
        <br />
        <a href={sourceUrl}>View Source Code on Github here</a>
        </footer>
        </React.Fragment>
    )
}

export default Footer;