/**
 * Created by default on 10/6/2015.
 */
(function(){

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q', BooksController] );

    function BooksController(books, dataService, logger, badgeService, $q){
        var vm = this;
        vm.appName = books.appName;

        var booksPromise = dataService.getAllBooks();
        var readersPromise = dataService.getAllReaders();

        $q.all( [booksPromise, readersPromise] )
            .then(getAllDataSuccess)
            .catch(getAllDataError);

        function getAllDataSuccess(dataArray){
            vm.allBooks = dataArray[0];
            vm.allReaders = dataArray[1];
        }

        function getAllDataError(reason){
            console.log(reason);
        }

        /* function getBooksSuccess(books){
            vm.allBooks = books;
        }

       function getBookNotifications(notification){
            console.log('Promise notification: ' + notification);
        }

        function errorCallback(errorMessage){
            console.log("Error message: " + errorMessage);
        }

        function getAllBooksComplete(){
            console.log("getAllBooks has been completed.");
        }

        function getReadersSuccess(readers){
            vm.allReaders = readers;
        }

        function getAllReadersComplete(){
            console.log("getAllReaders has been completed.");
        }

        dataService.getAllBooks()
            .then(getBooksSuccess, null, getBookNotifications)
            .catch(errorCallback)
            .finally(getAllBooksComplete);

        dataService.getAllReaders()
            .then(getReadersSuccess)
            .catch(errorCallback)
            .finally(getAllReadersComplete);*/


        vm.getBadge = badgeService.retrieveBadge;

        logger.output('BooksController has been created.');
    }
}());