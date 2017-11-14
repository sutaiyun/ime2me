// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'pascalprecht.translate'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.work', {
                url: '/work',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/work.html',
                        controller: 'WorkCtrl'
                    }
                }
            })

            .state('app.study', {
                url: '/study',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/study.html',
                        controller: 'StudyCtrl'
                    }
                }
            })

            .state('app.life', {
                url: '/life',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/life.html',
                        controller: 'LifeCtrl'
                    }
                }
            })

            .state('app.wallet', {
                url: '/wallet',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/wallet.html',
                        controller: 'WalletCtrl'
                    }
                }
            })

            .state('app.others', {
                url: '/others',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/others.html',
                        controller: 'OthersCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/work');

        $translateProvider.translations('en', {
            APP_NAME: 'ime2me',
            MENU_WORK: 'Work',
            MENU_STUDY: 'Study',
            MENU_LIFE: 'Life',
            MENU_WALLET: 'Wallet',
            MENU_OTHERS: 'Other',
            USER_NAME: 'UserName',
            PASSWORD: 'PassWord',
            LOGIN: 'Login'
        });
        $translateProvider.translations('zh', {
            APP_NAME: '虚米',
            MENU_WORK: '工作',
            MENU_STUDY: '学习',
            MENU_LIFE: '生活',
            MENU_WALLET: '钱包',
            MENU_OTHERS: '其他',
            USER_NAME: '用户名',
            PASSWORD: '密码',
            LOGIN: '登录'
        });
        $translateProvider.preferredLanguage('zh');
    });
