var mongoose = require("mongoose");
var User = require("../models/user");

function getAllUsers() {
    return User.find({}).exec();
  }
  
  function addUser(firstName, lastName, userName, password, email, jobType, jobCompany, jobCompanyURL) {
    var userDetail = {userName:userName, firstName:firstName, lastName:lastName, password:password, email:email, job: {jobType, jobCompany, jobCompanyURL} };
    var user = new User(userDetail);
    return user.save();
  }
  
  function findByUsername(username) {
    //TBD -- Should make the test fail
    return null;
  }
  
  function findById(id) {
    return User.findById({ _id:id }).exec();
  }
  
  module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    findByUsername: findByUsername,
    findById: findById,
  }