---
title: 'Text fade-in in css'
description: 'Css code to fade-in text, used in this website'
tags: css, animations, text
---

Use the following code to fade-in text in css

```
.fade-in {
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
   -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
       animation: fadein 1s;

}

@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```