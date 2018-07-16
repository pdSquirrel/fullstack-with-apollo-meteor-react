import Resolutions from './resolutions';

/* 
// Temp code to create a resolution in DB
Resolutions.insert({
  name: 'Test Res'
});
 */

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },

  // {name} is destrutioning of the args object
  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name: name // can be shortened to name in this case
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};
