'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jobCreationApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of locations to the scope', function () {
    expect(scope.locations.length).toBe(3);
  });

  it('should initialize the location', function () {
    scope.init();
    expect(scope.location).toBe('flat');
  });

  it('should move throught locations', function () {
    scope.init();
    scope.changeLocation();
    expect(scope.location).toBe('house');
  });

  it('should attach a list of products to the scope', function () {
    expect(scope.products.length).toBe(2);
  });

  it('should initialize the product', function () {
    scope.init();
    expect(scope.product).toBe('I have cleaning products');
  });

  it('should move throught locations', function () {
    scope.init();
    scope.changeProduct();
    expect(scope.product).toBe('I don\'t have cleaning products');
  });
});
