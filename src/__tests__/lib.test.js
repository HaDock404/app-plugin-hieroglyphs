import fs from 'fs';
import path from 'path';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const libPath = path.resolve(__dirname, '../lib');

// Fonction pour générer dynamiquement des tests pour chaque fichier dans `src/lib`, sauf `index.js`
fs.readdirSync(libPath).forEach((file) => {
    if (file === 'index.js' || !file.endsWith('.js')) return;

    const filePath = path.join(libPath, file);
    const Component = require(filePath).default;

    describe(`${file} tests`, () => {
        test('Component renders with default props', () => {
            const { container } = render(<Component />);
            const svg = container.querySelector('svg');
            expect(svg).toHaveAttribute('width', 'auto');
            expect(svg).toHaveAttribute('height', '100%');
        });

        test('Default fill color is correct', () => {
            const { container } = render(<Component />);
            const path = container.querySelector('path');
            expect(path).toHaveAttribute('fill', '#1B1B1B');
        });

        test('Custom color prop updates fill color', () => {
            const testColor = '#FF5733';
            const { container } = render(<Component color={testColor} />);
            const path = container.querySelector('path');
            expect(path).toHaveAttribute('fill', testColor);
        });
    });
});
