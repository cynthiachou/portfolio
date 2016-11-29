$(document).ready(function() {
  if (true) {}
  // 
  // navigation preset functions
  // 
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 800;
  var scrolling = false;
  var pgPrefix = ".skw-page-";
  var navBar = ".navbar-item-";
  var curNav = 1;
  var animDone = true;

  function pagination() {
    scrolling = true;
    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");
    // if (curPage > 1) {
    setTimeout(function() {
      scrolling = false;
    }, animTime+800);
    // };
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
    return curPage;
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
    return curPage;
  };
  // 
  // for navBar click
  // 
  $(".navbar-item").click(function() {
    // adjust the status of navbar-items
    $(this).addClass("jqactive");
    $(this).siblings().removeClass("jqactive");
    // detect which navbar-item was clicked
    var navId = this.id;
    // calculate the distance between clicked navbar-item and current page
    var comNum = Math.abs(navId - curPage + 1);
    // detect if we are navigating up or we are navigating down
    if (navId > (curPage - 1)) {
      // when the current page is before the intended page, we call navigateDown several times
      var i = 1;
     // console.log("i have i")
      while (i <= comNum) {
        console.log("i>comNum")
        navigateDown();
        i++;
        console.log("go one loop")
      }
    } else if (navId < (curPage - 1)) {
      // when the current page is before the intended page, we call navigateUp several times
      var i = 1;
      console.log("i have i")
      while (i <= comNum) {
        console.log("i>comNum")
        navigateUp();
        i++;
        console.log("go one loop")
      }
    };
  });
  // 
  // for mousewheel actions
  // 
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    console.log(e.originalEvent.wheelDelta);
    if (scrolling) return;
    if ((e.originalEvent.wheelDelta > 0)) {
      navigateUp();
      $(navBar + (curPage - 1)).addClass("jqactive");
      $(navBar + (curPage)).removeClass("jqactive");
      // animDone = false;
        // console.log("false");

      // setTimeout(function () {
      //   animDone = true;
      //   console.log("true");
      // },animTime);
    } else if(e.originalEvent.wheelDelta <  0){
      navigateDown();
      $(navBar + (curPage - 1)).addClass("jqactive");
      $(navBar + (curPage - 2)).removeClass("jqactive");
    }
  });
  // 
  // for keydown actions
  // 
  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
  // setTimeout(function() {
    $(navBar + (curPage - 1)).addClass("jqactive");
    $(navBar + (curPage)).removeClass("jqactive");
    // }, animTime);
      
    } else if (e.which === 40) {
      navigateDown();
        // setTimeout(function() {
      $(navBar + (curPage - 1)).addClass("jqactive");
      $(navBar + (curPage - 2)).removeClass("jqactive");
    // }, animTime);

    }
  });
  // 
  // for the about me page
  // 
  var count = 0;
  $(".sidebar").click(function() {
    count++;
    var isEven = function(someNumber) {
      return (someNumber % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
      $(".aboutme").addClass("active");
      $(".sidebar-about").addClass("inactive");
      $(".navbar-item").css("margin-left","100pt");
    } else if (isEven(count) === true) {
      $(".aboutme").removeClass("active");
      $(".sidebar-about").removeClass("inactive");
      $(".navbar-item").css("margin-left","0");
    }
  });
});