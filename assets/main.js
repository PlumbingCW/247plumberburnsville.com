(function(){
  "use strict";
  var root = document.documentElement;
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var burger = document.querySelector(".burger");
  function setMenu(open){
    if(!drawer) return;
    drawer.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    root.style.overflow = open ? "hidden" : "";
    if(open){ var x = drawer.querySelector(".x"); if(x) x.focus(); } else { burger.focus(); }
  }
  if(burger){
    burger.addEventListener("click", function(){ setMenu(true); });
    overlay.addEventListener("click", function(){ setMenu(false); });
    drawer.querySelector(".x").addEventListener("click", function(){ setMenu(false); });
    document.addEventListener("keydown", function(e){ if(e.key === "Escape" && drawer.classList.contains("open")) setMenu(false); });
    window.addEventListener("resize", function(){ if(window.innerWidth > 768 && drawer.classList.contains("open")) setMenu(false); });
  }
  var items = document.querySelectorAll(".faq-item");
  Array.prototype.forEach.call(items, function(it){
    var q = it.querySelector(".faq-q"), a = it.querySelector(".faq-a");
    q.addEventListener("click", function(){
      var open = it.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });
  window.addEventListener("resize", function(){
    Array.prototype.forEach.call(document.querySelectorAll(".faq-item.open .faq-a"), function(a){ a.style.maxHeight = a.scrollHeight + "px"; });
  });
})();
