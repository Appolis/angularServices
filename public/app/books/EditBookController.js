/**
 * Created by default on 10/6/2015.
 */
(function(){
    angular.module('app')
        .controller('EditBookController', ['$routeParams', 'books', '$cookies', '$cookieStore', EditBookController ]);

    function EditBookController($routeParams, books, $cookies, $cookieStore){
        var vm = this;

         vm.currentBook = books.filter(function(item){
             return item.book_id == $routeParams.bookID;
         })[0];

    }
}());