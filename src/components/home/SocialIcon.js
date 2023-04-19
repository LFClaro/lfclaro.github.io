import React from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function SocialIcon(props) {
    const { url, name } = props;
    const fullLink = "https://cdn.simpleicons.org/" + name;
    const fullLinkWhite = "https://cdn.simpleicons.org/" + name + "/white";

    return (
        <a
            href={url}
            target="_blank"
            aria-label={name}
            rel="noopener noreferrer"
        >
            {/* <img
                src={fullLinkWhite}
                style={{ maxWidth: 5 + 'rem' }}
                className='img-fluid px-2 socialicons'
                onMouseOver={e => e.currentTarget.src = fullLink}
                onMouseOut={e => e.currentTarget.src = fullLinkWhite}
            /> */}
            <div className='social'>
                <img src={fullLinkWhite} alt={name} />
                <img src={fullLink} className='img-top' alt={name} />
            </div>

            {/* <i className={`fa-brands fa-${name} fa-3x socialicons`} /> */}
        </a>
    );
}

export default SocialIcon;
