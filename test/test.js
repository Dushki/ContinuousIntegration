var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with Hello Team I have passed the Unit Test level, Now I am on SIT/UAT Server, Yours CODE', function(done) {
    request(app).get('/').expect('Hello Team I have passed the Unit Test level, Now I am on SIT/UAT Server, Yours CODE', done);
  });
});
