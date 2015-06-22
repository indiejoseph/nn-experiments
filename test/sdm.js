import { Cortex, State } from '../sdm/sdm';
import should from 'should';

var cortex, state;

describe('State Initialization', () => {

  beforeEach(() => {
    state = new State(1, 1);
    state._value = 0.5;
  });

  it('specifies the state', () => {
    state._args[0].should.eql(1);
    state._args[1].should.eql(1);
  });

  it('specifies the value', () => {
    state._value = 0.5;
  });

  it('should iterate', () => {
    for (let x of state) {
      x.should.eql(1);
    }
  });
});

describe('Sparse Distributed Memory Initialization', () => {

  beforeEach(() => {
    cortex = new Cortex(1000, new State(1, 1), 5, 0.8);
  });

  it('specifies max number of prototypes', () => {
    cortex.maxPrototypes.should.eql(1000);
  });

  it('specifies the learning rate', () => {
    cortex.learningRate.should.eql(0.8);
  });

  it('specifies the minimum number of locations', () => {
    cortex.minLocs.should.eql(5);
  });

  it('specifies the activation radii', () => {
    cortex.activationRadii._args[0].should.eql(1);
    cortex.activationRadii._args[1].should.eql(1);
  });

  it('determines the vector dimension', () => {
    cortex.vectorDimension.should.eql(2);
  });

});


describe('Similarity and distance', () => {
  beforeEach(() => {
    cortex = new Cortex(1000, new State(1, 1), 5, 0.8);
  });

  it('measures similarity between two identical points', () => {
    cortex.similarity(new State(5, 5), new State(5, 5)).should.eql(1);
  });

  it('returns zero for points separated by more than activation radii', () => {
    cortex.similarity(new State(10, 5), new State(5, 5)).should.eql(0);
  });

  it('maps between the two extremes', () => {
    cortex.similarity(new State(5.2, 5.4), new State(5, 5)).should.be.approximately(0.6, 0.01);
  });

  it('returns a distance-like measurement as well', () => {
    cortex.triangle(new State(5.2, 5.4), new State(5, 5)).should.be.approximately(1 / 0.6, 0.01);
  });

});


describe('Adding a new state/value pair', () => {
  beforeEach(() => {
    cortex = new Cortex(1000, {
      x: 1,
      y: 1
    }, 3, 0.8, ['x', 'y']);
  });

  it('throws an exception if vector dimensions do not match', () => {
    var _this = this;
    (() => {
      _cortex.add(new State(1), 0.4);
    }).should.throw(new Error('Vector dimension must be 2.'));
  });

  it('adds a new prototype', () => {
    cortex.add(new State(3, 4), 0.2);
    cortex.prototypes[0]._value.should.be.approximately(0.2, 0.01);
  });

  // it('accommodates addition of multiple state/value pairs', () => {
  //   cortex.add({ x: 3, y: 4 }, 0.2);
  //   cortex.add({ x: 4.2, y: 6.1 }, -0.23);
  //   cortex.nPrototypes.should.be.approximately(6, 3);
  // });
  //
  // it('maps values between multiple points', () => {
  //   cortex.add({ x: 3, y: 4 }, 0.22);
  //   cortex.add({ x: 3.5, y: 4.0 }, 0.26);
  //   cortex.add({ x: 3.3, y: 4.6 }, 0.22);
  //   cortex.add({ x: 3.2, y: 4.1 }, 0.24);
  //   cortex.predict({ x: 3.3, y: 4.2 }).should.be.approximately(0.23, 0.1);
  // });
  //
  // it('only allows for addition of fixed number of prototypes', () => {
  //   cortex = new Cortex(10, [1, 1], 8, 0.8, ['x', 'y']);
  //
  //   cortex.add({ x: 3, y: 4 }, 0.2);
  //   cortex.add({ x: 4.2, y: 6.1 }, -0.23);
  //
  //   cortex.nPrototypes.should.eql(10);
  // });
  //
  // it('handles many dimensions', () => {
  //   var dims, radii;
  //   dims = ['x', 'y', 'vx', 'vy', 'theta', 'thrust'];
  //   radii = { x: 5, y: 5, vx: 1, vy: 1, theta: 0.5, thrust: 0.3 };
  //   cortex = new Cortex(1000, radii, 5, 0.4, dims);
  //   cortex.predict({ x: 100, y: 100, vx: 32, vy: 32, theta: 0.23, thrust: 0.5 });
  //
  // });

});
