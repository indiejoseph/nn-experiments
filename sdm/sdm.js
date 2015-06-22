import { kdTree } from './kdTree';

// Sparse Distributed Memory for Reinforcement Learning.
// https://github.com/lightscalar/westside

export default class Cortex {

  constructor (maxPrototypes, activationRadii, minLocs, learningRate, dims) {
    this.maxPrototypes = maxPrototypes;
    this.activationRadii = activationRadii;
    this.minLocs = minLocs;
    this.learningRate = learningRate;
    this.dims = dims;

    // Define maximum allowed similarity between two input vectors.
    if(minLocs >= 3) {
      this.maxSimilarity = 1.0 - 1.0/(minLocs-1);
    } else {
      this.maxSimilarity = 0.5;
    }

    // All state vectors presented must be of same dimension.
    this.vectorDimension = Object.keys(activationRadii).length;

    // Initialize prototypes & values.
    this.prototypes = [];
    this.nPrototypes = 0;

    this.similarity = (p1, p2) => {
      let similarity = 1;
      let key, d, tmp;
      for (key in p1) {
        if(key == '_value') continue;

        d = Math.abs(p1[key] - p2[key]);

        if(d < this.activationRadii[key]) {
          tmp = 1 - d/this.activationRadii[key];
          if(tmp <= similarity) {
            similarity = tmp;
          }
        } else {
          return 0;
        }
      }
      return similarity;
    };

    this.triangle = (p1, p2) => {
      return 1/this.similarity(p1, p2);
    };

    // Initialize the KD-tree for fast retrieval.
    this.tree = new kdTree(this.prototypes, this.triangle, this.dims);
  }

  add (state, value) {
    // Ensure that vector has the proper dimension.
    if(Object.keys(state).length != this.vectorDimension)
      throw('Vector dimension must be ' + this.vectorDimension + '.');

    if(this.sparseEnough(state)) {
      this.addPrototype(state, value);
      this.randState(state);
    }

    // Find this prototypes current active set.
    let activeSet = this.activeSet(state);
    let randomState, predictedValue;

    // Make sure enough locations are lit up.
    while(activeSet.length < this.minLocs) {
      randomState = this.randState(state);
      predictedValue = this.predict(state);
      randomState._value = predictedValue;

      if(this.sparseEnough(randomState)) {
        this.addPrototype(randomState, predictedValue);
        activeSet = this.activeSet(state);
      }
    }
  }

  addPrototype (state, value) {
    // Make sure we are not exceeding prototype limit.
    if(this.nPrototypes >= this.maxPrototypes) {
      this.removePrototype();
    }
    // Add current state/value pair to the network.
    state._value = value;
    this.prototypes.push(state);
    this.nPrototypes += 1;
    this.updateTree();
    this.updatePrototypes(state, value);
  }

  updatePrototypes (state, value) {
    let predictedValue = this.predict(state);
    let activeSet = this.activeSet(state);
    let denom = 0;
    let p;

    for(p of activeSet) {
      denom += 1/p[1];
    }
    for(p of activeSet) {
      p[0]._value = p[0]._value + this.learningRate/denom * (value - predictedValue);
    }
  }

  randState (state) {
    let newState = {};
    let key;

    for(key in state) {
      newState[key] = state[key] + 2 * (Math.random() - 0.5) * this.activationRadii[key];
    }
    return newState;
  }

  // Predict the value of a given state.
  predict (state) {
    if(this.nPrototypes === 0) return 0;

    let activeSet = this.activeSet(state);

    if(activeSet.length === 0) return 0;

    let denom = 0;
    let numer = 0;
    let p;

    for(p of activeSet) {
      denom += 1/p[1];
      numer += 1/p[1] * p[0]._value;
    }

    return numer/denom;
  }

  sparseEnough (state) {
    if(this.nPrototypes === 0) return true;

    let nearestNeighbor = this.tree.nearest(state, 1, 100);

    if(nearestNeighbor.length === 0) return true;

    // Check to see if nearest neighbor is too close.
    return this.similarity(state, nearestNeighbor) < this.maxSimilarity;
  }

  removePrototype () {
    let target = Math.floor(Math.random() * this.nPrototypes);
    let p = this.prototypes[target];
    let nearestNeighbor = this.tree.nearest(p, 1, 100);
    let key;
    // Replace the value of the target with the average of its closest neighbor.
    for(key in p) {
      nearestNeighbor[0][key] = (nearestNeighbor[0][key] + p[key])/2;
    }
    this.prototypes.slice(target, 1);
    this.nPrototypes -= 1;
  }

  updateTree () {
    this.tree = new kdTree(this.prototypes, this.triangle, this.dims);
  }

  activeSet (state) {
    return this.tree.nearest(state, this.minLocs*2, 100);
  }
}
