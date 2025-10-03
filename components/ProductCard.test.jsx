import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const productInStock = {
    id: 'p1',
    title: 'Minimal Leather Backpack',
    description: 'Compact, durable, perfect for everyday carry.',
    price: 129,
    rating: 4.5,
    image: 'https://via.placeholder.com/150',
    inStock: true,
    sale: true,
};

const productOutOfStock = {
    id: 'p2',
    title: 'Classic White Sneakers',
    description: 'Comfortable, stylish, and versatile footwear.',
    price: 89,
    rating: 4.7,
    image: 'https://via.placeholder.com/150',
    inStock: false,
    sale: false,
};

describe('ProductCard Component', () => {
    it('renders product title, description, and image', () => {
        render(<ProductCard product={productInStock} />);
        expect(screen.getByText('Minimal Leather Backpack')).toBeInTheDocument();
        expect(screen.getByText('Compact, durable, perfect for everyday carry.')).toBeInTheDocument();
        expect(screen.getByAltText('Minimal Leather Backpack')).toBeInTheDocument();
    });

    it('displays "View More" button for in-stock product', () => {
        render(<ProductCard product={productInStock} />);
        const button = screen.getByRole('button', { name: /view more about minimal leather backpack/i });
        expect(button).toBeEnabled();
    });

    it('displays "Out of Stock" button for out-of-stock product', () => {
        render(<ProductCard product={productOutOfStock} />);
        // Use the button text itself and restrict to <button>
        const button = screen.getByText(/out of stock/i, { selector: 'button' });
        expect(button).toBeDisabled();
    });

    it('shows Sale badge when product is on sale', () => {
        render(<ProductCard product={productInStock} />);
        const badge = screen.getByText(/sale/i, { selector: 'span' });
        expect(badge).toBeInTheDocument();
    });

    it('shows Out of Stock badge when product is out of stock', () => {
        render(<ProductCard product={productOutOfStock} />);
        // Restrict query to the <span> badge
        const badge = screen.getByText(/out of stock/i, { selector: 'span' });
        expect(badge).toBeInTheDocument();
    });

    it('button has correct aria-label for in-stock product', () => {
        render(<ProductCard product={productInStock} />);
        const button = screen.getByRole('button', { name: /view more about minimal leather backpack/i });
        expect(button).toBeInTheDocument();
    });
});
