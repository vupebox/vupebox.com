"use strict";

var _utils = _interopRequireDefault(require("../../helpers/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cacheHelper from '../../helpers/cache';
var getClientsByUser = function getClientsByUser(user) {
  var responseObject = {
    isValid: true,
    validations: []
  }; //const { prop, prop2 } = user;
  //if(!prop || typeof prop !== 'string' || !prop.trim()) {
  //	responseObject.validations.push('errormessage');
  //}
  //if(user.hasOwnProperty('prop')) {
  //if(!prop || typeof prop !== 'string' || !prop.trim()) {
  //	responseObject.validations.push('errormessage');
  //}
  //}
  //const cachedData = await cacheHelper.__Model__.getTypes();
  //if(!user.hasOwnProperty('prop') || !utilsHelper.isMongooseId(prop) || cachedData.indexOf(prop) < 0) {
  //	responseObject.validations.push('errormessage');
  //}
  //if(!prop2 || !utilsHelper.isMongooseId(_state)) {
  //	responseObject.validations.push('errormessage');
  //}
  //Check if has validations, if has more than 0, then its not valid

  if (responseObject.validations.length) {
    responseObject.isValid = false;
  }

  return responseObject;
};

module.exports = getClientsByUser;