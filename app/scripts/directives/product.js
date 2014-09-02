"use strict";

angular.module('carProductApp')

.directive("productTabs", function ($firebase) {
    return {
      restrict: "E",
      templateUrl: "views/product-tabs.html",
      controller: function() {

        var ref = new Firebase("https://cararchitect.firebaseio.com/");
        var sync = $firebase(ref);
        // this.temp_tab = sync.$asArray();
        // console.log("###########################");
        // console.log(this.temp_tab);

         ref.on('value', function(dataSnapshot) {
         // code to handle new value.
         console.log(dataSnapshot.val());
        });  

          // var ref = new Firebase("https://cararchitect.firebaseio.com/");;
          // ref.on("value", function(snap) {
          //   console.log("###########################");
          //   console.log(snap.val());
          // });


        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
});
