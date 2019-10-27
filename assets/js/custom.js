(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
          
       
           
            $("a.preview").prettyPhoto({
                social_tools: false
            });

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



