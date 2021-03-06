describe('Cart', function() {

    describe(".create", function() {
        it('should create a cart that contains 0 products', function() {
            var newCart = Cart.create();
            expect(newCart.numProducts()).toEqual(0);
        });
    });


    describe("#add", function() {
        it('should add a product to the cart', function() {
            var cart = Cart.create();
            var product = {};
            cart.add(product);
            //expect(cart.numProducts()).toEqual(1);
            expect(cart.doesContain(product)).toBeTruthy();
        });
    });

    describe('#doesContain', function() {
        it('should return false for a product that is not contained', function() {
            var cart = Cart.create();
            var anotherProduct = {};
            expect(cart.doesContain(anotherProduct)).toBeFalsy();
        });
    });

    describe('#grossPriceSum', function() {
        it('should be 0 for an empty cart', function() {
            var cart = Cart.create();
            expect(cart.grossPriceSum()).toEqual(0);
        });

        it('should return the grossPrice of a single product in the cart', function() {
            var cart = Cart.create();
            var product = {grossPrice: function() {return 10;}};
            //spyOn(product, 'grossPrice').andReturn(10);

            cart.add(product);
            expect(cart.grossPriceSum()).toEqual(10);
        });

        it('should return the sum of two products in the cart', function() {
            var cart = Cart.create();
            var product1 = {grossPrice: function() {return 10;}};
            var product2 = {grossPrice: function() {return 5;}};
            cart.add(product1);
            cart.add(product2);
            expect(cart.grossPriceSum()).toEqual(15);
        });

    });
});