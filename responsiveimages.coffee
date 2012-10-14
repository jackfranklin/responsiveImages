###
Written by Jack Franklin (jackfranklin.co.uk)
Repository at: https://github.com/jackfranklin/responsiveImages
Released under the MIT License: http://en.wikipedia.org/wiki/MIT_License
Copyright (C) 2012 Jack Franklin
Accompanying Blog Post: http://jackfranklin.co.uk/responsive-images
###

###
Quick polyfill for adding an event
###
addEvent = (elem, type, eventHandle) ->
  return if not elem?
  if elem.addEventListener
    elem.addEventListener type, eventHandle, false
  else if elem.attachEvent
    elem.attachEvent "on#{type}", eventHandle

###
Main function. Loops through the options object and decides which image to use.
###
responsiveImages = (elem, options, onResize = "false") ->
  elem = document.getElementById elem
  pickImage = (elem) ->
    for key of options
      if key is "else"
        elem.src = options["else"]
        break
      else
        width = parseInt key
        windowWidth = window.innerWidth
        if windowWidth <= width
          elem.src = options[key]
          break

  pickImage elem
  if onResize
    addEvent window, "resize", ->
      pickImage elem

#expose globally
window.responsiveImage = responsiveImages

# support AMD
if typeof define === "function" && define.amd && define.amd.jQuery
    define( "responsiveImages", [], function () { return responsiveImages; } );
