import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { Sun, Moon } from 'lucide-react';

describe('ThemeToggle Component', () => {
    beforeEach(() => {
        document.documentElement.classList.remove('dark');
    });

    it('renders the toggle button', () => {
        render(<ThemeToggle />);
        const button = screen.getByRole('button', { name: /toggle dark mode/i });
        expect(button).toBeInTheDocument();
    });

    it('initially uses Moon icon and light mode', () => {
        render(<ThemeToggle />);
        expect(screen.getByRole('button')).toContainHTML('svg');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('toggles dark mode and icon when clicked', () => {
        render(<ThemeToggle />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
});
