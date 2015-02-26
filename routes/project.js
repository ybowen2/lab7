var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.ProjectSchema
  .find( {"_id":projectID})
  .exec(afterQuery);

  // query for the specific project and
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

models.ProjectSchema
  .find( {"_id":projectID})
  .remove()
  .exec(afterRemoving);

  function afterRemoving(err)
  {
    if(err){console.log(err); res.send(500);}

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}