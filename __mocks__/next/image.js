// // Simple mock for next/image
// const NextImage = (props) => {
//     // If props.src is an object, get src property
//     const src = typeof props.src === 'string' ? props.src : props.src?.src || '';
//     return (
//         <img
//             {...props}
//             src={src}
//             alt={props.alt || ''}
//             style={{ objectFit: props.objectFit || 'cover' }}
//         />
//     );
// };

// export default NextImage;

import React from 'react';

const NextImage = (props) => {
    const { src, alt, ...rest } = props;
    return <img src={typeof src === 'string' ? src : src.src} alt={alt} {...rest} />;
};

export default NextImage;

// import React from 'react';

// const NextImage = (props) => {
//     const { src, alt, ...rest } = props;
//     return <img src={typeof src === 'string' ? src : src.src} alt={alt} {...rest} />;
// };

// export default NextImage;
