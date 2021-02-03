'use strict';
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const url = 'http://localhost:8000';

describe('get all personal', function () {
    it('should get all personal', function (done) {
        chai.request(url)
            .get('/personal')
            .end(function (err,res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                expect(res.body[0]).to.have.property('nombre','Fulanito');
                expect(res.body).to.be.a('array');
                done();
                });
    });
})
