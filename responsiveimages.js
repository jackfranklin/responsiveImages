(function() {

  /*
  # Written by Jack Franklin for the 12 Devs of Xmas article
  */

  var addEvent, responsiveImage;

  addEvent = function(elem, type, eventHandle) {
    if (!(elem != null)) return;
    if (elem.addEventListener) {
      return elem.addEventListener(type, eventHandle, false);
    } else if (elem.attachEvent) {
      return elem.attachEvent("on" + type, eventHandle);
    }
  };

  responsiveImage = function(elem, options, onResize) {
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

  window.responsiveImage = responsiveImage;

}).call(this);
