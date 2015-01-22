import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Login', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /login', function() {
  visit('/login');

  andThen(function() {
    equal(currentPath(), 'login');
  });
});

test('redirects to index if already logged in', function () {
  authenticateSession();
  visit('/login');

  andThen(function() {
    equal(currentPath(), 'login');
  });
});
