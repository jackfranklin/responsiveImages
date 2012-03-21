
/*
Written by Jack Franklin (jackfranklin.co.uk)
Repository at: https://github.com/jackfranklin/responsiveImages
Released under the MIT License: http://en.wikipedia.org/wiki/MIT_License
Copyright (C) 2012 Jack Franklin
Accompanying Blog Post: http://jackfranklin.co.uk/responsive-images
*/

/*
Quick polyfill for adding an event
*/

(function() {
  var addEvent, responsiveImages;

  addEvent = function(elem, type, eventHandle) {
    if (!(elem != null)) return;
    if (elem.addEventListener) {
      return elem.addEventListener(type, eventHandle, false);
    } else if (elem.attachEvent) {
      return elem.attachEvent("on" + type, eventHandle);
    }
  };

  /*
  Main function. Loops through the options object and decides which image to use.
  */

  responsiveImages = function(elem, options, onResize) {
    var pickImage;
    if (onResize == null) onResize = "false";
    elem = document.getElementById(elem);
    pickImage = function(elem) {
      var key, width, windowWidth, _results;
      _results = [];
      for (key in options) {
        if (key === "else") {
          elem.src = options["else"];
          break;
        } else {
          width = parseInt(key);
          windowWidth = window.innerWidth;
          if (windowWidth <= width) {
            elem.src = options[key];
            break;
          } else {
            _results.push(void 0);
          }
        }
      }
      return _results;
    };
    pickImage(elem);
    if (onResize) {
      return addEvent(window, "resize", function() {
        return pickImage(elem);
      });
    }
  };

  window.responsiveImage = responsiveImages;

}).call(this);
