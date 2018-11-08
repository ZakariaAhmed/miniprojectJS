require("./dbSetup.js")();

var User = require("./models.User.js");
var LocationBlog = require("./models/LocationBlog.js");
var Position = require("./models/Position.js");
var userFacade = require("./facades/userFacade");



async function createUsers(){
    await User.deleteMany({});
    await Position.deleteMany({});
    await LocationBlog.deleteMany({});
    
    const userPromises = [
        userFacade.addUser("Kurt", "Wonnegut", "kw", "test", "a@b.dk", "A type", "comp", "comp.url"),
        userFacade.addUser("Hanne", "Wonnegut", "hw", "test", "a@b.dk", "A type", "comp", "comp.url"),
        userFacade.addUser("Janne", "Wonnegut", "jw", "test", "a@b.dk", "A type", "comp", "comp.url"),
        userFacade.addUser("Iris", "Wonnegut", "iw", "test", "a@b.dk", "A type", "comp", "comp.url"),
      ]
      var users = await Promise.all(userPromises);


}



