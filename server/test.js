import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

chai.use(chaiHttp);
let should = chai.should();

describe('red-flag', () => {
  // test the get all route
  describe('GET/ red-flags', () => {
    it('it should GET all the red-flags', (done) => {
      chai.request(app)
        .get('/api/v1/red-flags')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('datas');
          done();
        });
    });
  });
  // test the post route
  describe('POST/ red-flags', () => {
    it('it should not POST a red-flag with fields', (done) => {
      const incident = {
        location: '10N3E',
      };
      chai.request(app)
        .post('/api/v1/red-flags')
        .send(incident)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('it should POST a red-flag with fields', (done) => {
      const incident = {
        location: '10N3E',
        comment: 'no comment',
      };
      chai.request(app)
        .post('/api/v1/red-flags')
        .send(incident)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          done();
        });
    });
  });
  // test the GET/:id route
  describe('GET/:id red-flag', () => {
    it('it should GET a red-flag by the given id', (done) => {
      chai.request(app)
        .get('/api/v1/red-flags/id')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          done();
        });
    });
  });
  // test the patch route
  describe('PATCH/:id red-flag', () => {
    it('it should update a red-flag location', (done) => {
      const incident = {
        location: '10N3E',
      };
      chai.request(app)
        .patch('/api/v1/red-flags/id/location')
        .send(incident)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          done();
        });
    });
    it('it should update a red-flag comment', (done) => {
      const incident = {
        comment: 'No comment',
      };
      chai.request(app)
        .patch('/api/v1/red-flags/id/comment')
        .send(incident)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  // test the DELETE/:id route
  describe('DELETE/:id red-flag', () => {
    it('it should DELETE a red-flag by the given id', (done) => {
      chai.request(app)
        .delete('/api/v1/red-flags/id')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.a.property('status');
          done();
        });
    });
  });
});
