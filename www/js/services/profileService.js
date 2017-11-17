'use strict';
angular.module('starter.services')
    .factory('profileService', function profileServiceFactory($rootScope,
                                                              $timeout,
                                                              $filter,
                                                              $log) {
        var root = {};

        root.loadAndBindProfile = function(cb) {
        };


        root.createProfile = function(cb) {
        };

        return root;
    });
