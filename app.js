var app= angular.module('myApp', []);

app.controller('formController',function(){

});
app.directive('newForm', function() {
    return {
        restrict: "E",
        templateUrl: "myform.html",
        transclude:true
    }
});

app.directive('optIn', function() {
    return {
        restrict: "E",
        template: "<div class='container'><ng-transclude></ng-transclude><sign-up-form></sign-up-form></div>",
        transclude: true,
        replace: true
    }
});

app.directive('signUpForm', function() {
    return {
        restrict: "E",
        require: "^optIn",
        template: "<form><first-name></first-name><last-name></last-name><email></email><submit-button></submit-button></form>",
        transclude: true,
        replace: true
    }
});
app.directive('firstName', function() {
    return {
        restrict: "E",
        require: "^signUpForm",
        template: "<input name='first name' type='text' placeholder='First name' required />",
        transclude: true,
        replace: true
    }
});
app.directive('lastName', function() {
    return {
        restrict: "E",
        require: "^signUpForm",
        template: "<input name='last name' type='text' placeholder='Last name' required/ >",
        transclude: true,
        replace: true
    }
});
app.directive('email', function() {
    return {
        restrict: "E",
        require: "^signUpForm",
        template: "<input name='email' type='text' placeholder='Email' required />",
        transclude: true,
        replace: true
    }
});
app.directive('submitButton', function() {
    return {
        restrict: "E",
        require: "^signUpForm",
        template: "<input name='submit' type='submit' value='Give us yr infoz' />",
        transclude: true,
        replace: true
    }
});

