$(function(){$(".header .toggle-sidebar").on("click",function(){$(".sidebar,.page-content").toggleClass("no-sidebar")}),$(".header .toggle-sidebar").hover(function(){console.log("hover"),$(".exchange").fadeIn()},function(){$(".exchange").fadeOut()}),$(".header .toggle-expand").hover(function(){console.log("hover"),$(".expand").fadeIn()},function(){$(".expand").fadeOut()}),$(".submenu").on("click",function(){$(this).parent().find(".child").slideToggle(),$(this).find(".fa-angle-right").toggleClass("down")}),$(".toggle-expand").on("click",function(){$(this).toggleClass("fullscreen"),$(this).hasClass("fullscreen")?openFullscreen():closeFullscreen()}),$(".toggle-setting").on("click",function(){$(this).parent().toggleClass("hide-setting"),$(this).find("i").toggleClass("fa-spin")});var e=[];$(".color-box li").each(function(){e.push($(this).data("theme"))}),$(".color-box li").on("click",function(){$("body").removeClass(e.join(" ")).addClass($(this).data("theme")),$(this).addClass("active").siblings().removeClass("active")});var n=[];$(".font-box select option").each(function(){n.push($(this).val())}),console.log(n),$(".font-box select").on("change",function(){$("body").removeClass(n.join(" ")).addClass($(this).find("option:selected").val())})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}