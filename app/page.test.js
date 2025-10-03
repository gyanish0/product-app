import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock('../components/ThemeToggle', () => ({
    __esModule: true,
    default: () => <button data-testid="theme-toggle">Toggle</button>,
}));

jest.mock('../components/ProductCard', () => ({
    __esModule: true,
    default: ({ product }) => <div data-testid={`product-${product.id}`}>{product.title}</div>,
}));

describe('Home Page', () => {
    const products = [
        { id: 'p1', title: 'Minimal Leather Backpack' },
        { id: 'p2', title: 'Classic White Sneakers' },
    ];

    beforeAll(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(products),
            })
        );
    });

    afterAll(() => {
        global.fetch.mockRestore();
    });

    it('renders product cards and theme toggle', async () => {
        render(await Home());

        for (const product of products) {
            expect(screen.getByTestId(`product-${product.id}`)).toBeInTheDocument();
        }

        expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    });
});
