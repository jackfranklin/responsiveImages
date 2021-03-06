#ResponsiveImages
Designed to make using images in responsive sites even easier.

##What it Does
Allows you to load in a different image based on the browser view port. If someone is looking at your site on an iPhone, they don't want to load in the full image. This little bit of code aims to solve it.

##How to use it
It's pretty easy to use on your page. If you download this repository, there's a fully working demo in demo.html.  After you've included the script in your page:

```
<script src="path/to/responsiveimages.js"></script>
```

You need to pass in a couple of things when you call the function:

```javascript
responsiveImage("img", {
    "320" : "iPhone.jpg",
    "768" : "iPad.jpg",
    "1024" : "Average.jpg",
    "else" : "HUGE.jpg"
}, true);
```


The first thing you pass in is an id, which should be an id of the image you wish to conditionally load. After that all you need to do is pass in an object of sizes and the relevant images, with URLs relative to the page. The function will check if the current browser viewport is less than or equal to the specified widths and load in the correct image. If the viewport is larger than any of the defined widths, it will load in whichever image is specified by the `else` key, so don't forget to define this! The widths do not have to be defined in any order, but **"else" MUST be last!"**. Finally, you pass in either `true` or `false`, which defines if the code should run itself again when the window resizes or not. If you do not pass in this variable, it **defaults to false**.

##Suggestions?
Feel free to work this, report issues, shout at me for breaking things, etc. Or you can grab me on Twitter as @Jack_Franklin.

##Live Demo
[There is a live demo here.](http://jackfranklin.org/responsive-images)


##Written in CoffeeScript
If you want to fork & improve, remember you need to edit the CoffeeScript version. I only includre the .js version in this repository so it's easier to implement the script, no compiling needed.
