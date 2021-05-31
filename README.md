#Project Name : Titanl Landing Page 

#Freelancer : Ahmed Mohamed ahmedatyabas@gmail.com

#Project Establishment 

Compose from 12 section each section have unique class for Nesting 

How This project Build ?


1-PlAIN HTML MARK UP 
2-SASS FOLDER THAT PRODUCE ONE STYLE FILE CSS
a-sass file compose from one mail file scss that watch & compile all scss files into css file 
b-in sass folder the folders inside are divided Accodring to layout of the page => so when open sass folder you will see 
c-1 main file sass & 7 folder sass
d-7 folder sass are =>
1-Abstract folder that contain 2 files mixins that i put in it some mixins that by it write alot of css by one line to save time & Vars file that contain variables like colors that manage me to change color from one place 

2-Base folder contain base file , in it there is the set up process of font-face of icons and reset the grid system across all whole page 

3-bulma folder just compile framework into css file instead of write static css in head html and this help us to choose only what we want from bulma framework (ex: did not use grid sysytem of bulma so not compile but in this version all bulma framework is compiles and also manage to use variable of bulma directly in your scss file )

4-Call To actions folder contain one file Concern any Call To Action link in the page 

5-Dry folder contain one file dry.scss that i used it to make grouping for code that repeat more that one time in the page and make it as Component to use it by one line code @extened 

6-Layout folder contain the Anatomy of page (NaveBar , Hero Area , Footer )

7-Page folder contain all sections of the page 


##Note there is in the last thing in MarkUp HTML Button Scroll To Top and its style written in footer.scss

##Implementaion js for Our works Section 

there are 3 scenario for this function 


1-Take width & height of image by Dynamic way because the transform action will occur relative to this dynamic width & height 

how i get the dynamic width ?

img has width 33% of the body so i get the dynamic width of the body by js the multiple it in the percentage of width of img 

how get height ?

after bring dynamic width i make simple calc to get the relative percentage of the height with the width 
e.g width of  img is 33% that equal 500px and height was 302px so 302px / 500px give me the relative percentage of height 

Apply this way in tablet but the width will be 50% not 33%

Apply this way in mobile with width 100% 


##Our Team Section 

i apply click event to show overlay as Hover Property not work in touch secreen 









##How i imporove the speed of the page ?

i Apply Lazy load Technique By js to render the images and i frame when interecting only 

##Any more Clarification i will provide immediately 

