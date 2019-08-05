body {
  background-color: #000;
}
#landing-header {
  z-index: 1;
  position: relative;
  text-align: center;
  padding-top: 40vh;
}
#landing-header h1 {
  color: #fff;
}

.slideshow { 
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.slideshow li { 
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  animation: imageAnimation 50s linear infinite; 
}

.slideshow li:nth-child(1) { 
  background-image: url(http://i.imgur.com/K3mPv14.jpg) 
}
.slideshow li:nth-child(2) { 
  background-image: url(http://i.imgur.com/SBEmFpv.jpg);
  animation-delay: 10s; 
}
.slideshow li:nth-child(3) { 
  background-image: url(http://i.imgur.com/emvhOnb.jpg);
  animation-delay: 20s; 
}
.slideshow li:nth-child(4) { 
  background-image: url(http://i.imgur.com/2LSMCmJ.jpg);
  animation-delay: 30s; 
}
.slideshow li:nth-child(5) { 
  background-image: url(http://i.imgur.com/TVGe0Ef.jpg);
  animation-delay: 40s; 
}

@keyframes imageAnimation { 
  0% { 
    opacity: 0; 
    animation-timing-function: ease-in;
  }
  10% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  20% {
    opacity: 1
  }
  30% {
    opacity: 0
  }
}

/* Older browser support - .no-cssanimations class added by modernizr */
.no-cssanimations .slideshow li {
	opacity: 1;
}
