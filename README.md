
# HTML and CSS

## What is HTML
- Open an empty google docs. Write a text and change the heading to see the *structure* of the document change.
- Open a text editor and write two sentences separated by a space.
   ```
Ciao Ninja,

oggi costruiremo il nostro primo sito in HTML.

Buon lavoro.
```

- Open the doc in the browser and show that no structure is added. All the sentences are in the same line. We need to tel the browser how to structure the text.


## HTMl element
- paragraph: we need to use the opening and closing tag. `< >` in the triangle bracket insert the element. `<p>` for paragraph. Closing a paragraph  `</p>`
- add the `<p> </p>` to every lines and show the browser goes in a new line.
- other elements: `<footer>` `<time>` example of other elements.

Semantic HTML: the meaning of the HTML.
<h1> : associate a meaning to the text. it is a title. Important for a good structure and reader.

## Html file
- create a folder (the root folder of the project)
- create the `index.html` page

```
<!DOCTYPE html>   -- it is importatnt because it shows the version of the html.
<html>


</html>
```
All the html must be inside the html.
Then add the 2 most important parts of the document:
- `<head> </head>`: it is form metadata. It is not shown in the docs. Like the photo has metadata (shutter speed, ISO) so the head is used for.
- `<body> </body> : is it everything it is how in the page

Add the
- `<title> </title>`: inside the head it is the title show in the bar and in the search of google website.
- `<p> add into the body


Final first page
```
```
<!DOCTYPE html>
<html>
  <head>
    <title> My first website </title>
  </head>

 <body>
    <p>This is my first website !!!<p>
 </body>
</html>

- Open into the browser: show the version, add other paragraph.

## HTMl headings
Text must be organized in an hierarchy.
Open a webpage and show the different parts and subparts.

The structure in a html is done using *heading levels*.

- Change a paragraph fro p to h1 and show it is shown bigger.

  Show the different levels and explain them:
- `<h1>`: it is the title of the page. You can have ONLY H1 in a html page (like a title of the book)
- `h2` :
- `h3` :
- `h4` : sometime is used.
- `h5` rarely used

Do not use heading to have an order but to denote the level of hierarchy.
Level is using a creating a table of content of the book (not the font size).

```
h1 = Pisa Coder Dojo

    h2 = Cosa è il Pisa Coder Dojo ?

    h2 = Che tipo di Attività organizzano ?

       h3 = Code newbies
       h3 = Code beginners
       h3 = Code explorers

```

## Add the content to the project

Create the structure of a web page for the Pisa coder Dojo site.


 Comment `<!---->`

## Nesting
Nesting is importat to who element inside other element

```
<html>
  <head>
    <title> My first website </title>
  </head>
</html>
```

Use *indentation* to highlight nesting.


## HTML list (ol and ul)

There are two lists order and unordered:

Order: to show that the order is important.  E.e.g A step by step guide and the receipe to follow.
```
<ol>
 <li> one</li>  // list item

</ol>

``

Unordered list: if no order is important. E.g. List ingredient

```
<ul>
  <li> one</li>  // list item

</ul>

```


## Semantic HTML

Other element to structure the region of the document.
Screen readers or assistive tecnologies need to have info without seeing the website.
E.g: find the office in a plae where there the no name on the building doors.


- `<header>`
- `<main>`
- `<section>`
- `<footer>`

Typical structure

```
 <body>
   <header>
   <!-- logo + navigation-->
   </header>

   <main>
     <!-- the majority of the content here -->
      <section> </section>
      <section> </section>
      <section> </section>
   </main>

   <footer>
      <!-- copyrigth social links, contact -->
   </footer>
 </body>
```

## Strong and em element

- `<strong>` to make bold. Semantic meaning: the text is more important, The default style is bold given by the browser.
- `em` emphais text.
-
## Block and inline element
Show that the `p` add a ne line while the `strong` is not the reason is the `block` and `inline` element.

- block element: they stack one on each other. Like LEGO bricks. They stack one on each other
- inline element:  one next hte other most of the time are element inside the paragraph.

## Second page (html attribute)
Ass a paragraph on first page `<p> why don't use see the projects created <p>`.
The link element ?  no. we must use the `<a> </a>` element.
Show the but it is not a link.

Attribute: are defined always in the opening tag (not in the closing)
`<a href=""> asdf <a>`
href: hypertext reference
#### Relative link
The root folder to the href.
- Add a link to a second page. put the link to the root page.
- Add the Back link.

#### Absolute links
The beginiing of the address must be `http` or `https`. with this the browser do not look in the root folder but goes outside.
- Put the link to the pisacdoerodjo website

## Images
The `img` attribute is used to show an image:
There are two attributes
- src: source of the image.
- alt: alternative text. describe the image. it is important to have good alt. Both for search engine and assistive tecnologies.

It is a `self-closing` attibute. It is not need the `</img>`. It does not contain inside anything.

Add a `logo` with the `img` leave the `alt` empty is good for a logo.

## What is CSS
"Cascading Style Sheet" is to add colors, style to the page.
Create e css fille and connect the html file
- create a file `css/style.css`
- connect with the html inside the `head` using the `link`

First css content:
```
body {
    background-color: red
}
```

### Css syntax
The relationship with the html is that the css is using rule to select the element and style them.

```
body {                     <-- selector
    background-color: red  <-- set the property with key:value
}
```

Other example: select the title and change the color of the text
```
h1 {
 color: red;
}
```
### Css colors
DO NOT use color keyword (they can change color visual)

Use HEX code `#6a3bff` of the RGB (R=6a, G=3b, B=ff) (from 0 to f =16)

```
body {
    background-color: #000000;
}
```
### CSS order is important
cascade: the order is important: the last win

In this example the color of h1 is red.
```
h1 {
    color: blue;
    color: red;
}
```
## Text

### text-align
The title is centered and the logo.
- h1: center an h1 is using  `text-align: center;`
- img: works with text alignment beacuse the img is inline element.

note: left and riht are "deprecated" and use the logical property `start` and `end`  to support RTL language translation.

### font-family and font stack
The `font-family: serif`  or `sans-serif` `fantasy` `cursive`.
These are the default system fonts.

Specific font can be  `Arial`  BUT it relies on the user pc.

Font stack: a list of fonts to fallback.
`Jazzier, Garamond, serif` if the the first does not exist.
NOTE: use quotation mark if theri a space in the name of the font.

### Inheritance
An element inherit the css from the parent.

Approach: at the top use the the `body` selector and ahh th `font-family: sans-serif`. All the page inherit the font.

If an child element redefined a color it can override the parent by adding a more specific color.



### User agent styles
The user-agent style are the default style applied by the browser. E.g the strong element are already stylesheet.

The user-agent style can confuse the inheritance.

To force inheritance: `color: inherit`


```
p {
    color: green:
}
```


### Font-size
The `font-size: 1cm`

NOTE: a css pixel is NOT a screen pixel but is has a fixed size and it is defined in the user preference.

The common unit is
 - `px` : it is most easiest unit to use. BUT it is a BAD practise because the user can change the css pixel dimension via the prefeenze.
 - `cm`
 - `in`
 - `rem` is the BEST option. 1rem is based on the `font-size` of the root element (the <html> element). A rem is defined as a scale with respect to font-size of the `<html>` element.

Example

```
html {
    font-size: 25px;
}


h1 {
  font-size: 1rem
}

```
The `h1` element has the font size equal to 45px.

Question: what is the default font-size of the html element ?
The default is 16px. the user can change the default size via the preference.


NOTE: as FE developer we do not have the control where the page is shown (screen size, different user preferences).

SUGGESTION: do not overwrite the `font-size` o the html element but reason about scaling.

Change the font-size:XXrem to test the size and choose the best look dimensions.

SUGGETION: start to define the `font-size` on  the body with `1.25rem`


Other styles need to sdjust:
- `line-height: 1.5` : do not use a unit and specify in percentage.
-`margin-block:50px` to add block margin on paragraph or list

NOTE: the default line-height is 1.4. The value of `1.6` is a goos stragin point


### Inline vs internal stylesheet

- avoid inline style `<h1 style="color: green">`
- avoid `<style>` element in the `head` because it applies only on the page you added.


### Dev tools


## The box mode

"Everything is a BOX"

Example: try to  `p {
    margin-block:50px;
    background-color: #ff5e0e;
}
` and see that it show a box

### Content



- `inline-size: xxpx`: it is a logical property. limits how can be big. (DONT use the `width`)
- `block-size: 350px`: limit the upper down (the block) size. (DONT use the `heigh`)

SUGGESTION: use the logical property like the `inline-size` is better of `width`.
SUGGESTION: BE very carefully the block-size.because fixed higth can cause issue when the text is not correctly


### Padding
*padding*: it is an empty space that has the same color of background around the content.

Use padding to have MORE background colour.

Options:
- padding-block:  add padding on top and button
- padding-inline:  add passing on left and right
- padding-inline-start
- padding-inline-end

Avoid `padding-left` `padding-right` us the logical version padding-block and inline.

### Border
*borders*
it is the advantage to have a different colour from the background.

- `border: 20px dotted`
- `border-inline: solid` add border only on right and left (x axes)


### Margin
Add empty space that DOES NOT include the background colour. Is it equal to padding but without colour.


### box-sizing
"The default way the dafult box size is wrong".

Using the `inline-size: 400px` in the element conta

Css reset: use the rest selector to get all the elements with a box sizing fixed.

```
* {
  box-sixing: border-box;
}

```


## Css selector (class and id)

It is an attribute (like href) into tml element.

- class selector


```
<p class="accent"> </p

.accent {
    color: #695d46;
    font-weight: bold;
}

```

- id selector

```

<h2 id="accent">

#accent

```

Differences
- classes are reusable in the page
- id must be unique in a page. it is unique per page.

Usage
- use element select
- use the classes for select specific
- avoid id selector


## Div and span

Thery are no semantics meaning. Thery are used for organizatioal purpose. (like grouping paragraoh with the same style)
They are used with css classes

- <div>  (i.e. division of content) is a block element

```

.teal-bg {
  background-color: red;
  border: red solid 10px;
  padding: 20px;
  color: #ffffff;
}

<div  class="teal-bg">
  <p>
  <p>
</div>

```

- <span> is an inline element

```
.teal-text{
    color: blue;
}

<h1> Il mio <span class="teal-text"> TITOLO <span> </h1>

```


NOTE: show that using a class you can style different element (a div and a footer in two different pages)

NOTE: if a class must be applied to an entire element add it to the element and add a span with a class inside.


## Sudo class: style a link


```
a {
 color: red;
}

a:visited {      // olor to blue after the link is visited
 color:blue;
}

a:hover,           // change color when the the pointer is hovering the link
a:focus-visible{   // change the color when the link is navigate using the keyboard
 color:purple;
}

a:active{         // change color when the click is hold (is very fast so it can be not seen)
    color:black;
}

```

IMPORTANT: the order is important. The button wins. The LAST true sudo class is activated.

Order
- visited
- hover, focus-visible
- active


## Descendant selector
IF you want to select something that is descendent without adding a class.

```
.teal-bg strong { // color the strong when it is inside the class teal-bg
   color: yellow;
}

<div class="teal-bg">
   <p> ciao sono <strong> forte </strong> </p>
<div>

```


## Specificity
The order is important in the css file:
the last true element wins ond overwrite the previous, BUT the order matters ONLY for same element. More specific selector wins

```

.orange.text{
    color:red;
}

h2 {
    color: red
}


<h2> my title <h2>

```

Use a calculator https://polypane.app/css-specificity-calculator/ to ge the score of te specficuty.


The score has three parts:
- id
- class
- element


Conflicts for specifity can occurs.
