"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Utilities=function(){function e(){}return e.formatDate=function(e,t,n){var r=new Date(e);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("dd",r.getDate().toString())).replace("DD",(9<r.getDate()?r.getDate():"0"+r.getDate()).toString())).replace("mm",(r.getMonth()+1).toString())).replace("MMM",n.months[r.getMonth()])).replace("MM",(9<r.getMonth()+1?r.getMonth()+1:"0"+(r.getMonth()+1)).toString())).replace("mmm",n.monthsShort[r.getMonth()])).replace("yyyy",r.getFullYear().toString())).replace("YYYY",r.getFullYear().toString())).replace("YY",r.getFullYear().toString().substring(2))).replace("yy",r.getFullYear().toString().substring(2))},e.setToTimestamp=function(e){if(e&&(!isNaN(Number(e))||3!==e.split("-").length))throw new Error("The date "+e+" is not valid!");return e||"string"==typeof e?new Date(e+" 00:00:00").getTime():(new Date).setHours(0,0,0,0)},e.creatHTMLElement=function(e,t,n,r){void 0===r&&(r=null);var a=e.querySelector("."+t);if(!a){if((a=document.createElement("div")).classList.add(t),null!==r){var l=document.createTextNode(r);a.appendChild(l)}n.appendChild(a)}return a},e.setDataAttr=function(e,t,n){return e.setAttribute(t,n)},e.setStyle=function(e,t,n){return e.style.setProperty(t,n)},e.addClass=function(e,t){return e.classList.add(t)},e.removeClass=function(e,t){return e.classList.remove(t)},e.toggleClass=function(e,t){return e.classList.toggle(t)},e.readFile=function(e,t){var n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)},n.send(null)},e.getIndexForEventTarget=function(e,t){return Array.prototype.slice.call(e).indexOf(t)+1},e.extend=function(e,t){var n=t||{selector:".hello-week",lang:"en",langFolder:"./dist/langs/",format:"DD/MM/YYYY",monthShort:!1,weekShort:!0,defaultDate:null,minDate:null,maxDate:null,disabledDaysOfWeek:null,disableDates:null,weekStart:0,daysSelected:null,daysHighlight:null,multiplePick:!1,disablePastDays:!1,todayHighlight:!0,range:!1,locked:!1,rtl:!1,nav:["◀","▶"],onLoad:function(){},onNavigation:function(){},onSelect:function(){},onClear:function(){}};return Object.assign(n,e)},e}();exports.Utilities=Utilities;