import Resolutions from "./resolutions";

// Resolutions.insert({
//   name: "Test Res"
// })
// Resolutions.update({_id:"JhAyfPZJsEcv9yc4x"}, {name:"Do more work!"});
// const res = Resolutions.find({}).fetch();
// console.log(res);

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    } 
  },
  Mutation: {
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({ name });
      return Resolutions.findOne(resolutionId);
    }
  }
};