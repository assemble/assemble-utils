'use strict';

var should = require('should');
var utils = require('./');

describe('assemble-utils', function () {
  it('should have utils', function () {
    utils.should.have.properties(['session', 'sessionify']);
  });
});
