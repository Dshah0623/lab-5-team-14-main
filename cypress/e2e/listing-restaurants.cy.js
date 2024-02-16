

describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';
    cy.intercept('GET', 'https://api.outsidein.dev/*/restaurants', [
    {id: 1, name: sushiPlace},
    {id: 2, name: pizzaPlace},
    ]);
    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
    });

    it('displays the restaurants', () => {
        const noop = () => {};
        const restaurants = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
        ];
        render(<RestaurantList loadRestaurants={noop} restaurants={restaurants} />);

        expect(screen.getByText('Sushi Place')).toBeInTheDocument();
        expect(screen.getByText('Pizza Place')).toBeInTheDocument();
    });
});
