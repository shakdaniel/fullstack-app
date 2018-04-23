import Resolutions from "./resolutions";
import Goals from "../goals/goals"

// Resolutions.insert({
//   name: "Test Res"
// })
// Resolutions.update({_id:"JhAyfPZJsEcv9yc4x"}, {name:"Do more work!"});
// const res = Resolutions.find({}).fetch();
// console.log(res);

export default {
  Query: {
    resolutions(obj, args, { userId = null }) {
      return Resolutions.find({
        userId
      }).fetch();
    }
  },
  Resolution: {
    goals: resolution => Goals.find({
      resolutionId: resolution._id
    }).fetch()
  },

  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({
        name,
        userId
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};