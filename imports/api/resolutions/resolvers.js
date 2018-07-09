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
  }
};
