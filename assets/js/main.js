/*
Template: 
Author: 
*/

(function($) {
      "use strict";
  
      $(document).ready( function() {

          /*==========================
             Scroll To Up Init
          ============================*/
          $.scrollUp({
              scrollName: 'scrollUp', 
              topDistance: '1110',
              topSpeed: 2000,
              animation: 'slide', 
              animationInSpeed: 300,
              animationOutSpeed: 300, 
              scrollText: '<i class="fal fa-angle-up"></i>', 
              activeOverlay: false, 
          });
          
      }); 

  
  })(jQuery); // End jQuery