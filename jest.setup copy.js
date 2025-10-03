import '@testing-library/jest-dom/extend-expect';
import React from 'react';

jest.mock('next/image', () => {
    return function ImageMock(props) {
        const src = typeof props.src === 'string' ? props.src : props.src?.src || '';
        return React.createElement('img', { src, alt: props.alt || '', ...props });
    };
});
