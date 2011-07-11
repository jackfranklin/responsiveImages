/*
 * Written by Jack Franklin
 */

(function(window, document, undefined) {
    var responsiveImages = function(elem, options, onResize) {
        onResize = onResize || false;
        elem = document.getElementById(elem);
        var pickImage = function(elem) {
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
        }
        pickImage(elem);
        if(onResize) {
            addEvent(window, "resize", function() {
                pickImage(elem);
            });
        }
    };
    window.responsiveImage = responsiveImages;
    //helper function for adding events (used for cross browser onresize method)
    var addEvent = function(elem, type, eventHandle) {
        if (elem == null || elem == undefined) return;
        if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );
        } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
        }
    };
        
})(this, this.document);
