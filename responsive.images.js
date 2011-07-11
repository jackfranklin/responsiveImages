/*
 * Written by Jack Franklin
 */

(function(window, document, undefined) {
    var responsiveImages = function(elem, options) {
        elem = document.getElementById(elem);
        for(var key in options) {
            if(key == "else") {
                elem.src = options["else"];
                break;
            } else {
                var width = parseInt(key);
                var windowWidth = window.innerWidth;
                if(windowWidth <= width) {
                    elem.src = options[key];
                    break;
                }
            }
        }
    };
    window.responsiveImage = responsiveImages;
})(this, this.document);
