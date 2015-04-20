'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('GamesController', ['$scope', '$upload', '$routeParams', 'Games', function ($scope, $upload, $routeParams, Games) {
    if(!$routeParams.id){
      $scope.games = Games.query();
      $scope.predicate = '-updated_at';
    } else {
      $scope.game = Games.get({id:$routeParams.id});
    }



    $scope.save = function(){
      if(!$scope.gameTitle || $scope.gameTitle.length < 1) return;
      if(!$scope.gameDesc || $scope.gameDesc.length < 1) return;

      $scope.$watch('files', function () {
        $scope.upload($scope.files);
      });

      $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: 'api/games',
                    fields: { title: $scope.gameTitle, description: $scope.gameDesc, created_at: Date.now() },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                });
            }
        }
      }

      /*var game = new Games({ title: $scope.gameTitle, description: $scope.gameDesc, image: $scope.gameImage[0], created_at: Date.now() });

      game.$save(function(){
        $scope.games.push(game);
        $scope.gameTitle = '';
        $scope.gameDesc = '';
      });*/
    }

    $scope.update = function(){
      $scope.game.title = $scope.gameTitle;
      $scope.game.description = $scope.gameDesc;
      $scope.game.image_url = $scope.gameImage;
      $scope.game.updated_at = Date.now();
      $scope.game.$update({id:$routeParams.id});
    }

    $scope.delete = function(gameId){
      console.log("Delete: "+gameId);
      var game = Games.get({id:gameId});
      game.$delete({id:gameId},function(){
        $scope.games = Games.query();
      });
    }

  }]).
  controller('WebsitesController', ['$scope','$routeParams', 'Websites', function ($scope, $routeParams, Websites) {
    $scope.websites = Websites.query();

    $scope.website = Websites.get({id:$routeParams.id});

    $scope.save = function(){
      if(!$scope.websiteTitle || $scope.websiteTitle.length < 1) return;
      if(!$scope.websiteDesc || $scope.websiteDesc.length < 1) return;
      var website = new Websites({ title: $scope.websiteTitle, description: $scope.websiteDesc, created_at: Date.now() });

      website.$save(function(){
        $scope.websites.push(website);
        $scope.websiteTitle = '';
        $scope.websiteDesc = '';
      });
    }
  }]).
  controller('SoftwaresController', ['$scope','$routeParams', 'Softwares', function ($scope, $routeParams, Softwares) {
    $scope.softwares = Softwares.query();

    $scope.software = Softwares.get({id:$routeParams.id});

    $scope.save = function(){
      if(!$scope.softwareTitle || $scope.softwareTitle.length < 1) return;
      if(!$scope.softwareDesc || $scope.softwareDesc.length < 1) return;
      var software = new Softwares({ title: $scope.softwareTitle, description: $scope.softwareDesc, created_at: Date.now() });

      software.$save(function(){
        $scope.softwares.push(software);
        $scope.softwareTitle = '';
        $scope.softwareDesc = '';
      });
    }
  }]);
