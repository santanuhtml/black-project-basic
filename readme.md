
==============================
Project Setup
==============================
1. Installation
Install Live Sass Compiler extension (VS Code).
Install Live Server extension (VS Code).


2. Project Structure
[project-name]
  ├── [assets]
  │    ├── [scss]
  │    ├── [img]
  │    └── [js]
  └── index.html


3. Update Live Sass Compiler Settings
Press Ctrl + , (open VS Code Settings).
Search for Live Sass Compiler: Settings.
Update your settings.json file as follows:
__________________________________________

{
  "diffEditor.hideUnchangedRegions.enabled": true,
  "[php]": {
    "editor.defaultFormatter": "bmewburn.vscode-intelephense-client"
  },
  "settingsSync.ignoredExtensions": [],
  "liveSassCompile.settings.useNewCompiler": false,
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/assets/css"
    }
  ],
  "liveSassCompile.settings.generateMap": true
}

__________________________________________


4. How to Run
Click on Watch Sass → A css folder will be generated under assets/.
Click on Go Live to start a live server.


5. How to Run PHP Files
Open your browser and go to:
http://localhost/project-name


==============================
BLANK-PROJECT-BASIC: Features and Guidelines
==============================
----------------
SCSS Variables
----------------

Colors:
$white, $black, $shadow, $base, $primary-color, $secondary-color


Functions:
property: toRem(10px);
font-size: to-clamp(30px, 80px);


Z-index Values:
$background: -1;
$base: 0;
$on-top: 1;
$overlay: 2;
$header: 5;
$modal: 6;


Border Radius:
$border-radius--primary
$border-radius--secondary
$border-radius--xsmall: 2px;
$border-radius--small: 5px;
$border-radius--md: 10px;
$border-radius--lg: 15px;
$border-radius--xl: 20px;


Grid System (Responsive Columns)
.o-col-xs-1 to .o-col-xs-12

.o-col-sm-1 to .o-col-sm-12

.o-col-md-1 to .o-col-md-12

.o-col-lg-1 to .o-col-lg-12

Offsets:
.o-col-sm-offset-1 to .o-col-sm-offset-11
.o-col-md-offset-1 to .o-col-md-offset-11
.o-col-lg-offset-1 to .o-col-lg-offset-11


----------------
SCSS Mixins
----------------

Prefix Helpers:
@include transition($time: 0.3s);
@include transform(rotate(20deg));


Media Queries:
@include media(tab) {
  // your styles here
}


Breakpoints:
xs: 576px
sm: 768px
md: 992px
tab: 1025px
lg: 1200px


Layouts:
$desktop-view: 1320px;
$mobile-view: 767px;
Classes: o-container-fluid, o-container, o-text-center, o-pull-right


Font Utilities:
o-text-editor
font-size--h1, font-size--h2, font-size--h3, font-size--p

@include font-size--h1;
@include font-size--h2;
@include font-size--h3;
@include font-size--p;


Spacing Utilities:
@include section-padding;
@include section-padding-sm;


Button Styles:
btn, btn-primary, btn-secondary, btn-line, btn-large


Animations:
@include object-rotate($time: 10s);


Flex Utilities:
@include flex($gap: 10px);
@include flex-center($height: 200px, $width: 200px);


Pseudo Elements:
@include gradient-overlay($color: #f00, $lighten: 100%);
@include linear-gradient($color-top: #093379, $color-bottom: #00d4ff, $deg: 350deg);
@include square-after(20px, 20px, $primary-color);
@include square-before(20px, 20px, $primary-color);
@include image-icons-before(
  $icon-path: '../images/icons/arrow-right.svg', 
  $size: 14px, 
  $margin-right: 5px,
  $top: 2px
);



Shadows:
$default-shadow


Grid Mixin:
@include grid($cols-lg: 4, $cols-md: 3, $cols-sm: 2, $cols-xsm: 1, $gap: 20px, $gap-sm: 15px);


Blocks:
dark-mode




Notes
Always keep SCSS components modular and reusable.
Customize variables and layouts according to the project’s needs.
Maintain a clean project structure for better scalability.
