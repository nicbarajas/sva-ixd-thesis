import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Recipes } from '../../api/recipes.js';

import './app-body.html';

Template.app-body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.recipe-list.helpers({
  recipes() {
    return Recipes.find({});
  },
});
