'use strict';
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const url = 'http://localhost:8000';

const toTest = require('../index');

describe('get all personal', function () {
    it('should get all personal', function (done) {
        //chai.request(url)
        chai.request(toTest)
            .get('/personal')
            .end(function (err,res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                expect(res.body[0]).to.have.property('nombre','Fulanito');
                expect(res.body).to.be.a('array');
                done();
                });
    });
})

describe('get a single person', function () {
    it('should get a single person', function (done) {
        //chai.request(url)
        chai.request(toTest)
            .get('/personal/111A')
            .end(function (err,res) {
                //console.log(res.body)
                expect(res).to.have.status(200);
                expect(res.body[0]).to.have.property('nombre','Fulanito');
                expect(res.body[0]).to.have.property('dni','111A');
                expect(res.body[0]).to.have.property('edad',35);
                expect(res.body[0].edad).to.be.a('number');
                done();
            });
    });
})
