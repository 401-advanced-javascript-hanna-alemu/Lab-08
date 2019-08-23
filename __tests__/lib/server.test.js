'use strict';

const {server} = require('../../src/app');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('web server', () => {

  it('should respond to get a category from /api/v1/categories', () => {

    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(0);
      }).catch(console.error);

  });

  it('should respond to creating a category /api/v1/categories', () => {

    return mockRequest
      .post('api/v1/categories')
      .send({name:'Test', description:'test stuff'})
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toBe('Test');
      }).catch(console.error);

  });


  it('should respond properly to updating a category on /api/v1/categories', () => {
    const testCategory = {
      name: 'Songs',
      description: 'Song playlist',
      quantity: 10,
    };
    const updateTest = {
      name: 'music',
      description: 'List of songs',
      quantity: 20,
    };

    return mockRequest.put('/api/v1/categories')

      .send(testCategory)
      .then(result => {
        return mockRequest.put(`/api/v1/categories/${result.body._id}`).send(updateTest);
      })
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual(testCategory.name);
      });

  });



  it('should respond properly to deleting a product on /api/v1/products', () => {
    const testproduct= {
      name: 'Songs',
      description: 'Song playlist',
      quantity: 10,
    };

    return mockRequest.post('/api/v1/products')

      .send(testproduct)
      .then(result=> {
        return (mockRequest.delete(`/api/v1/products/${result.body._id}`));
      })

      .then(response=> {
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual(testCategory.name);
      });


  });

  
  it('should respond to get a category from /api/v1/products', () => {

    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(0);
      }).catch(console.error);

  });

  it('should respond to creating a category /api/v1/products', () => {

    return mockRequest
      .post('api/v1/products')
      .send({name:'Test', description:'test stuff'})
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toBe('Test');
      }).catch(console.error);

  });


  it('should respond properly to updating a product on /api/v1/products', () => {
    const testProduct = {
      name: 'Songs',
      description: 'Song playlist',
      display_name: 'songs',
    };
    const updateTest = {
      name: 'music',
      description: 'List of songs',
      display_name: 'music,'
    };

    return mockRequest.put('/api/v1/products')

      .send(testCategory)
      .then(result => {
        return mockRequest.put(`/api/v1/products/${result.body._id}`).send(updateTest);
      })
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual(testCategory.name);
      });

  });



  it('should respond properly to deleting a product on /api/v1/products', () => {
    const testCategory = {
      name: 'Songs',
      description: 'Song playlist',
      quantity: 10,
    };

    return mockRequest.post('/api/v1/products')

      .send(testCategory)
      .then(result=> {
        return (mockRequest.delete(`/api/v1/products/${result.body._id}`));
      })

      .then(response=> {
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual(testCategory.name);
      });


  });
});
