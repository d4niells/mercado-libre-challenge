import { screen } from '@testing-library/react';
import { render } from 'common/tests';
import SectionCategories from '.';

describe('<SeactionCategories />', () => {
  const CATEGORIES = ['Autos', 'Motos y Otros', 'Motos'];

  it('should render SeactionCategories correctly', () => {
    render(<SectionCategories categories={CATEGORIES} />);

    for (const category of CATEGORIES) {
      expect(screen.getByText(category)).toBeInTheDocument();
    }
  });

  it('should show last category with font weight bold', () => {
    render(<SectionCategories categories={CATEGORIES} />);

    const lastCategory = CATEGORIES[CATEGORIES.length - 1];

    expect(screen.getByText(lastCategory)).toHaveStyle({
      color: '#666666',
      'font-weight': 600
    });
  });
});
