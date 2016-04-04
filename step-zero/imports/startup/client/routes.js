import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/layouts/app-body.js';


FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("app-body", {content: "recipeList"});
  }
});

FlowRouter.route('/recipes/:_id', {
  action: function() {
    BlazeLayout.render("app-body", {content: "recipeItem"});
  }
});
