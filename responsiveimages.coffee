###
# Written by Jack Franklin for the 12 Devs of Xmas article
###

addEvent = (elem, type, eventHandle) ->
  return if not elem?
  if elem.addEventListener
    elem.addEventListener type, eventHandle, false
  else if elem.attachEvent
    elem.attachEvent "on#{type}", eventHandle




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

window.responsiveImage = responsiveImages
