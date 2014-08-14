"use strict";

angular.module('carProductApp')

.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "views/product-tabs.html",
      controller: function() {
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
