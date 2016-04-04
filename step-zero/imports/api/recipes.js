import { Mongo } from 'meteor/mongo';

export const Recipes = new Mongo.Collection('recipes');

if (Recipes.find().count() === 0) {
  Recipes.insert({
    "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_73ac0d6b448683646f76a2689875d900",
    "label" : "Chicken with Tomatoes and Mushrooms",
    "image" : "https://www.edamam.com/web-img/084/0847271b3ef60e83e404778fb583832c.jpg",
    "source" : "Martha Stewart",
    "sourceIcon" : "http://www.marthastewart.com/sites/all/themes/marthastewart/images/favicon.ico",
    "url" : "http://www.marthastewart.com/316032/chicken-with-tomatoes-and-mushrooms",
    "shareAs" : "http://www.edamam.com/recipe/chicken-with-tomatoes-and-mushrooms-73ac0d6b448683646f76a2689875d900/chicken+tomatoes+mushrooms",
    "yield" : 4.0,
    "ingredientLines" : [ "4 boneless, skinless chicken breast halves, about 1 1/2 pounds", "Coarse salt and ground pepper", "1 tablespoon olive oil", "1 pound mushrooms, trimmed and quartered", "2 garlic cloves, minced", "1 can (14.5 ounces) stewed tomatoes", "1/4 teaspoon dried oregano" ],
    "ingredients" : [ {
      "text" : "4 boneless, skinless chicken breast halves, about 1 1/2 pounds",
      "quantity" : 1.5,
      "measure" : "lb",
      "food" : "boneless skinless chicken breast",
      "weight" : 680.388
    }, {
      "text" : "Coarse salt and ground pepper",
      "quantity" : 1.0,
      "measure" : "pepper",
      "food" : "ground pepper",
      "weight" : 0.3
    }, {
      "text" : "1 tablespoon olive oil",
      "quantity" : 1.0,
      "measure" : "tbsp",
      "food" : "olive oil",
      "weight" : 13.5
    }, {
      "text" : "1 pound mushrooms, trimmed and quartered",
      "quantity" : 1.0,
      "measure" : "lb",
      "food" : "mushrooms",
      "weight" : 453.592
    }, {
      "text" : "2 garlic cloves, minced",
      "quantity" : 2.0,
      "measure" : "clove",
      "food" : "garlic",
      "weight" : 6.0
    }, {
      "text" : "1 can (14.5 ounces) stewed tomatoes",
      "quantity" : 14.5,
      "measure" : "oz",
      "food" : "canned tomato",
      "weight" : 411.075
    }, {
      "text" : "1/4 teaspoon dried oregano",
      "quantity" : 0.25,
      "measure" : "tsp",
      "food" : "dried oregano",
      "weight" : 0.45
    } ]
  });
}
