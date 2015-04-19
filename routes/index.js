
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.pages = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.single = function (req, res) {
  var name = req.params.name;
  var id = req.params.id;
  var file;

  switch(name) {
    case 'games':
      file = 'readGame';
      break;
    case 'websites':
      file = 'readGame';
      break;
    case 'softwares':
      file = 'readGame';
      break;
    default :
      file = 'home';
      break;
  }

  res.render('partials/' + file);
};

exports.actions = function (req, res) {
  var name = req.params.name;
  var action = req.params.action;
  var id = req.params.id;
  var file;

  switch(name) {
    case 'games':
      file = action+'Game';
      break;
    case 'websites':
      file = action+'Website';
      break;
    case 'softwares':
      file = action+'Software';
      break;
    default :
      file = 'home';
      break;
  }

  res.render('partials/' + file);
};