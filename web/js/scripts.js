$(function(){
	
/***************************************************
		VERTICAL SCROLLING
***************************************************/
	$('#main a, a.internal, a.da-link,  #menu_nav a').click(function(e){
		e.preventDefault();
		
		var $anchor = $(this);
		var $section = $($anchor.attr('href'));
		var topOffset = $section.offset().top;
		
		// Adjust extra offset if not primary section 
		if(!$section.parent('#wrapper').length){
			topOffset = topOffset - 100;
		}
		
		// Scroll page
		$('html, body').stop().animate({
		    scrollTop: topOffset
		}, 1500, 'easeInOutExpo');
		
	});
	
/***************************************************
		SCROLLING
***************************************************/
	$(window).scroll(function(){
		
		var scrollOffset = $(this).scrollTop();
		
		if(scrollOffset <= 125){
			$('#logo').stop().animate({top: -scrollOffset}, 700);
			$('#main').stop().animate({top: -scrollOffset + 155}, 50);
		}else{
			$('#logo').stop().animate({top: -225}, 50);
			$('#main').stop().animate({top: 0}, 50);
		}
	});
	
/***************************************************
		BACK TO TOP SIDE LINK
***************************************************/
	
//	$('#back_to_top_side').sticky({
//		topSpacing: 80,
//	bottomSpacing: ($(document).height() - $('#work .finish').offset().top()) - 800
//	});
	
	
/***************************************************
		BX SLIDER
***************************************************/	
/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function(a){a.fn.bxSlider=function(b){function Z(b,c,d,e){var f=[];var g=d;var h=false;if(e=="backward"){b=a.makeArray(b);b.reverse()}while(g>0){a.each(b,function(b,d){if(g>0){if(!h){if(b==c){h=true;f.push(a(this).clone());g--}}else{f.push(a(this).clone());g--}}else{return false}})}return f}function Y(){var a=i.outerHeight()*b.displaySlideQty;return a}function X(){var a=i.outerWidth()*b.displaySlideQty;return a}function W(b,c){if(c=="left"){var d=a(".pager",h).eq(b).position().left}else if(c=="top"){var d=a(".pager",h).eq(b).position().top}return d}function V(){if(!b.infiniteLoop&&b.hideControlOnEnd){if(x==F){a(".bx-prev",h).hide()}else{a(".bx-prev",h).show()}if(x==G){a(".bx-next",h).hide()}else{a(".bx-next",h).show()}}}function U(c,e,f,g){p=a('<a href="" class="bx-start"></a>');if(c=="text"){r=e}else{r='<img src="'+e+'" />'}if(f=="text"){s=g}else{s='<img src="'+g+'" />'}if(b.autoControlsSelector){a(b.autoControlsSelector).append(p)}else{h.append('<div class="bx-auto"></div>');a(".bx-auto",h).html(p)}p.click(function(){if(b.ticker){if(a(this).hasClass("stop")){d.stopTicker()}else if(a(this).hasClass("start")){d.startTicker()}}else{if(a(this).hasClass("stop")){d.stopShow(true)}else if(a(this).hasClass("start")){d.startShow(true)}}return false})}function T(){var c=a("img",g.eq(x)).attr("title");if(c!=""){if(b.captionsSelector){a(b.captionsSelector).html(c)}else{a(".bx-captions",h).html(c)}}else{if(b.captionsSelector){a(b.captionsSelector).html(" ")}else{a(".bx-captions",h).html(" ")}}}function S(c){var e=g.length;if(b.moveSlideQty>1){if(g.length%b.moveSlideQty!=0){e=Math.ceil(g.length/b.moveSlideQty)}else{e=g.length/b.moveSlideQty}}var f="";if(b.buildPager){for(var i=0;i<e;i++){f+=b.buildPager(i,g.eq(i*b.moveSlideQty))}}else if(c=="full"){for(var i=1;i<=e;i++){f+='<a href="" class="pager-link pager-'+i+'">'+i+"</a>"}}else if(c=="short"){f='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+g.length+"</span>"}if(b.pagerSelector){a(b.pagerSelector).append(f);n=a(b.pagerSelector)}else{var j=a('<div class="bx-pager"></div>');j.append(f);if(b.pagerLocation=="top"){h.prepend(j)}else if(b.pagerLocation=="bottom"){h.append(j)}n=a(".bx-pager",h)}n.children().click(function(){if(b.pagerType=="full"){var a=n.children().index(this);if(b.moveSlideQty>1){a*=b.moveSlideQty}d.goToSlide(a)}return false})}function R(c,e,f,g){var i=a('<a href="" class="bx-next"></a>');var j=a('<a href="" class="bx-prev"></a>');if(c=="text"){i.html(e)}else{i.html('<img src="'+e+'" />')}if(f=="text"){j.html(g)}else{j.html('<img src="'+g+'" />')}if(b.prevSelector){a(b.prevSelector).append(j)}else{h.append(j)}if(b.nextSelector){a(b.nextSelector).append(i)}else{h.append(i)}i.click(function(){d.goToNextSlide();return false});j.click(function(){d.goToPreviousSlide();return false})}function Q(c){if(b.pagerType=="full"&&b.pager){a("a",n).removeClass(b.pagerActiveClass);a("a",n).eq(c).addClass(b.pagerActiveClass)}else if(b.pagerType=="short"&&b.pager){a(".bx-pager-current",n).html(x+1)}}function P(){g.not(":eq("+x+")").fadeTo(b.speed,0).css("zIndex",98);g.eq(x).css("zIndex",99).fadeTo(b.speed,1,function(){E=false;if(jQuery.browser.msie){g.eq(x).get(0).style.removeAttribute("filter")}b.onAfterSlide(x,g.length,g.eq(x))})}function O(){e.hover(function(){if(t){d.stopTicker(false)}},function(){if(t){d.startTicker(false)}})}function N(){h.find(".bx-window").hover(function(){if(t){d.stopShow(false)}},function(){if(t){d.startShow(false)}})}function M(){if(b.startImage!=""){startContent=b.startImage;startType="image"}else{startContent=b.startText;startType="text"}if(b.stopImage!=""){stopContent=b.stopImage;stopType="image"}else{stopContent=b.stopText;stopType="text"}U(startType,startContent,stopType,stopContent)}function L(a,c,d){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){e.animate({left:"-="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({left:"+="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){e.animate({top:"-="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({top:"+="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}}}function K(){if(b.auto){if(!b.infiniteLoop){if(b.autoDirection=="next"){o=setInterval(function(){x+=b.moveSlideQty;if(x>G){x=x%g.length}d.goToSlide(x,false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){x-=b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}}d.goToSlide(x,false)},b.pause)}}else{if(b.autoDirection=="next"){o=setInterval(function(){d.goToNextSlide(false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){d.goToPreviousSlide(false)},b.pause)}}}else if(b.ticker){b.tickerSpeed*=10;a(".pager",h).each(function(b){A+=a(this).width();B+=a(this).height()});if(b.tickerDirection=="prev"&&b.mode=="horizontal"){e.css("left","-"+(A+y)+"px")}else if(b.tickerDirection=="prev"&&b.mode=="vertical"){e.css("top","-"+(B+z)+"px")}if(b.mode=="horizontal"){C=parseInt(e.css("left"));L(C,A,b.tickerSpeed)}else if(b.mode=="vertical"){D=parseInt(e.css("top"));L(D,B,b.tickerSpeed)}if(b.tickerHover){O()}}}function J(){if(b.nextImage!=""){nextContent=b.nextImage;nextType="image"}else{nextContent=b.nextText;nextType="text"}if(b.prevImage!=""){prevContent=b.prevImage;prevType="image"}else{prevContent=b.prevText;prevType="text"}R(nextType,nextContent,prevType,prevContent)}function I(){if(b.mode=="horizontal"||b.mode=="vertical"){var c=Z(g,0,b.moveSlideQty,"backward");a.each(c,function(b){e.prepend(a(this))});var d=g.length+b.moveSlideQty-1;var f=g.length-b.displaySlideQty;var h=d-f;var i=Z(g,0,h,"forward");if(b.infiniteLoop){a.each(i,function(b){e.append(a(this))})}}}function H(){I(b.startingSlide);if(b.mode=="horizontal"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+l+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+l+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+y+"px"});e.children().css({width:j,"float":"left",listStyle:"none"});h=e.parent().parent();g.addClass("pager")}else if(b.mode=="vertical"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+v+"px; height:"+m+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+z+"px"});e.children().css({listStyle:"none",height:w});h=e.parent().parent();g.addClass("pager")}else if(b.mode=="fade"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+w+"px; width:"+v+'px; position:relative; overflow:hidden;"></div>');e.children().css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98});h=e.parent().parent();g.not(":eq("+x+")").fadeTo(0,0);g.eq(x).css("zIndex",99)}if(b.captions&&b.captionsSelector==null){h.append('<div class="bx-captions"></div>')}}var c={mode:"horizontal",infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:"swing",pager:false,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:"next",autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:false,tickerSpeed:5e3,tickerDirection:"next",tickerHover:false,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null};var b=a.extend(c,b);var d=this;var e="";var f="";var g="";var h="";var i="";var j="";var k="";var l="";var m="";var n="";var o="";var p="";var q="";var r="";var s="";var t=true;var u=false;var v=0;var w=0;var x=0;var y=0;var z=0;var A=0;var B=0;var C=0;var D=0;var E=false;var F=0;var G=g.length-1;this.goToSlide=function(a,c){if(!E){E=true;x=a;b.onBeforeSlide(x,g.length,g.eq(x));if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}slide=a;if(slide==F){b.onFirstSlide(x,g.length,g.eq(x))}if(slide==G){b.onLastSlide(x,g.length,g.eq(x))}if(b.mode=="horizontal"){e.animate({left:"-"+W(slide,"left")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){e.animate({top:"-"+W(slide,"top")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}V();if(b.moveSlideQty>1){a=Math.floor(a/b.moveSlideQty)}Q(a);T()}};this.goToNextSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x+b.moveSlideQty;if(x<=G){V();b.onNextSlide(x,g.length,g.eq(x));d.goToSlide(x)}else{x-=b.moveSlideQty}}}else{if(!E){E=true;var c=false;x=x+b.moveSlideQty;if(x>G){x=x%g.length;c=true}b.onNextSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"-="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var h=b.moveSlideQty*w;e.animate({top:"-="+h+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToPreviousSlide=function(c){if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var f=false;x=x-b.moveSlideQty;if(x<0){x=0;if(b.hideControlOnEnd){a(".bx-prev",h).hide()}}V();b.onPrevSlide(x,g.length,g.eq(x));d.goToSlide(x)}}else{if(!E){E=true;var f=false;x=x-b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}f=true}b.onPrevSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var i=b.moveSlideQty*k;e.animate({left:"+="+i+"px"},b.speed,b.easing,function(){E=false;if(f){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var j=b.moveSlideQty*w;e.animate({top:"+="+j+"px"},b.speed,b.easing,function(){E=false;if(f){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToFirstSlide=function(a){if(typeof a=="undefined"){var a=true}d.goToSlide(F,a)};this.goToLastSlide=function(){if(typeof a=="undefined"){var a=true}d.goToSlide(G,a)};this.getCurrentSlide=function(){return x};this.getSlideCount=function(){return g.length};this.stopShow=function(a){clearInterval(o);if(typeof a=="undefined"){var a=true}if(a&&b.autoControls){p.html(r).removeClass("stop").addClass("start");t=false}};this.startShow=function(a){if(typeof a=="undefined"){var a=true}K();if(a&&b.autoControls){p.html(s).removeClass("start").addClass("stop");t=true}};this.stopTicker=function(a){e.stop();if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(r).removeClass("stop").addClass("start");t=false}};this.startTicker=function(a){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){var c=parseInt(e.css("left"));var d=A+c+g.eq(0).width()}else if(b.tickerDirection=="prev"){var c=-parseInt(e.css("left"));var d=c-g.eq(0).width()}var f=d*b.tickerSpeed/A;L(C,d,f)}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){var h=parseInt(e.css("top"));var d=B+h+g.eq(0).height()}else if(b.tickerDirection=="prev"){var h=-parseInt(e.css("top"));var d=h-g.eq(0).height()}var f=d*b.tickerSpeed/B;L(D,d,f);if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(s).removeClass("start").addClass("stop");t=true}}};this.initShow=function(){e=a(this);f=e.clone();g=e.children();h="";i=e.children(":first");j=i.width();v=0;k=i.outerWidth();w=0;l=X();m=Y();E=false;n="";x=0;y=0;z=0;o="";p="";q="";r="";s="";t=true;u=false;A=0;B=0;C=0;D=0;F=0;G=g.length-1;g.each(function(b){if(a(this).outerHeight()>w){w=a(this).outerHeight()}if(a(this).outerWidth()>v){v=a(this).outerWidth()}});if(b.randomStart){var c=Math.floor(Math.random()*g.length);x=c;y=k*(b.moveSlideQty+c);z=w*(b.moveSlideQty+c)}else{x=b.startingSlide;y=k*(b.moveSlideQty+b.startingSlide);z=w*(b.moveSlideQty+b.startingSlide)}H();if(b.pager&&!b.ticker){if(b.pagerType=="full"){S("full")}else if(b.pagerType=="short"){S("short")}}if(b.controls&&!b.ticker){J()}if(b.auto||b.ticker){if(b.autoControls){M()}if(b.autoStart){setTimeout(function(){d.startShow(true)},b.autoDelay)}else{d.stopShow(true)}if(b.autoHover&&!b.ticker){N()}}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}V();if(b.captions){T()}b.onAfterSlide(x,g.length,g.eq(x))};this.destroyShow=function(){clearInterval(o);a(".bx-next, .bx-prev, .bx-pager, .bx-auto",h).remove();e.unwrap().unwrap().removeAttr("style");e.children().removeAttr("style").not(".pager").remove();g.removeClass("pager")};this.reloadShow=function(){d.destroyShow();d.initShow()};this.each(function(){if(a(this).children().length>0){d.initShow()}});return this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a=parseFloat(jQuery.css(this.elem,this.prop));return a}})(jQuery)


/***************************************************
		FAQ
***************************************************/
	
	var mooseBan = false;

	$('#faq dt a').click(function(e){
		
		if( !mooseBan ){

			$dd = $(this).parent().next('dd');
			
			if(!$dd.hasClass('open')){
				
				mooseBan = true;
				
				$dd.show();

				var h = $dd.outerHeight(true);

				$dd.css({
					'height':	0
				}).animate({
					'height':	h
				},600,'easeInOutExpo',function(){
					$dd.addClass('open').removeAttr('style');
					mooseBan = false;
				});
				
			}
			
			$('#faq dd.open').animate({
				'height':'hide'
			},600,'easeInOutExpo',function(){
				$(this).removeClass('open').removeAttr('style');
			});
		
		}

		e.preventDefault();
		
	});
	 });

/***************************************************
		EASING
***************************************************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
	
/***************************************************
		STICKY 
***************************************************/
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Created: 2/14/2011
// Date: 9/12/2011
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll

(function($) {
    var defaults = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: 'is-sticky',
            center: false
        },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            for (var i = 0; i < sticked.length; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;
                if (scrollTop <= etse) {
                    if (s.currentTop !== null) {
                        s.stickyElement.css('position', '').css('top', '').removeClass(s.className);
                        s.currentTop = null;
                    }
                }
                else {
                    var newTop = documentHeight - s.elementHeight - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSpacing;
                    } else {
                        newTop = s.topSpacing;
                    }
                    if (s.currentTop != newTop) {
                        s.stickyElement.css('position', 'fixed').css('top', newTop).addClass(s.className);
                        s.currentTop = newTop;
                    }
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();
        };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
            var stickyElement = $(this);
            if (o.center)
                var centerElement = "margin-left:auto;margin-right:auto;";

            stickyId = stickyElement.attr('id');
            stickyElement
                .wrapAll('<div id="' + stickyId + 'StickyWrapper" style="' + centerElement + '"></div>')
                .css('width', stickyElement.width());
            var elementHeight = stickyElement.outerHeight(),
                stickyWrapper = stickyElement.parent();
            stickyWrapper
                .css('width', stickyElement.outerWidth())
                .css('height', elementHeight)
                .css('clear', stickyElement.css('clear'));
            sticked.push({
                topSpacing: o.topSpacing,
                bottomSpacing: o.bottomSpacing,
                stickyElement: stickyElement,
                currentTop: null,
                stickyWrapper: stickyWrapper,
                elementHeight: elementHeight,
                className: o.className
            });
        });
    };

	
/***************************************************
		SKITTER SLIDESHOW - PROJECT 5
***************************************************/

/**
 * jQuery Skitter Slideshow
 * @name jquery.skitter.js
 * @description Slideshow
 * @author Thiago Silva Ferreira - http://thiagosf.net
 * @version 3.9
 * @date August 04, 2010
 * @update April 07, 2012
 * @copyright (c) 2010 Thiago Silva Ferreira - http://thiagosf.net
 * @license Dual licensed under the MIT or GPL Version 2 licenses
 * @example http://thiagosf.net/projects/jquery/skitter/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(q($){f 2G=0,5x=[];$.2f.3R=q(F){11 c.3w(q(){$(c).7W(\'7X\',2G);5x.5y(2w $32(c,F,2G));++2G})};f 5z={1e:1,2x:7Y,3S:\'\',3T:S,3U:S,2n:S,Q:\'\',k:1A,7Z:1A,1j:1A,1w:1A,1R:1A,33:1A,3V:\'4H\',w:1A,M:1A,1x:1,1b:R,2P:R,3W:1A,5A:R,3X:R,3x:{4I:\'#81\',3Y:\'#4J\'},4K:{4I:\'#4J\',3Y:\'#82\'},3Z:{4I:\'#83\',3Y:\'#4J\'},2g:R,41:R,34:R,3y:R,3z:1A,1U:0.75,2y:2z,2H:1L,4L:1A,4M:1A,84:20,4N:\'r\',35:R,2A:R,2Q:R,4O:\'42\',2R:R,4P:\'42\',1E:R,2h:{},2o:R,36:R,3a:R,44:0,23:0,3b:S,5B:R,45:[],5C:q(){$(c).1M().H({O:0.5},1s)},5D:q(){$(c).1M().H({O:1},1s)},46:S,5E:\'<a 1O="#" 1u="24">85</a>\'+\'<a 1O="#" 1u="1V">86</a>\'+\'<2I 1u="1B"></2I>\'+\'<1o 1u="47">\'+\'<1o 1u="1N">\'+\'<a 1O=""><V 1u="1i" /></a>\'+\'<1o 1u="2J"></1o>\'+\'</1o>\'+\'</1o>\'};$.3R=q(3A,F,5F){c.k=$(3A);c.2S=1A;c.g=$.1W({},5z,F||{});c.2G=5F;c.5G()};f $32=$.3R;$32.2f=$32.4Q={};$32.2f.1W=$.1W;$32.2f.1W({5G:q(){f h=c;n(c.g.41){f E=$(2T).E();f I=$(2T).I();c.k.E(E).I(I);c.k.A({\'2p\':\'4R\',\'t\':0,\'r\':0,\'z-5H\':4S});c.g.3b=R;$(\'4T\').A({\'87\':\'88\'})}c.g.w=3c(c.k.A(\'E\'));c.g.M=3c(c.k.A(\'I\'));n(!c.g.w||!c.g.M){89.8a(\'8b 5I I 48 5J 1A! - 8c 8d\');11 R}c.k.1F(c.g.5E);c.g.Q=c.5K(c.g.J);n(c.g.1e>=2)c.g.1e=1.3;n(c.g.1e<=0)c.g.1e=1;c.k.j(\'.1B\').1g();c.k.j(\'.2J\').1g();c.k.j(\'.24\').1g();c.k.j(\'.1V\').1g();c.k.j(\'.47\').E(c.g.w);c.k.j(\'.47\').I(c.g.M);f 3z=c.g.3z?c.g.3z:c.g.w;c.k.j(\'.2J\').E(3z);f 49=\' 2U\',u=0;c.g.1j=2w 4a();f 4U=q(2K,X,1X,2n,2i){h.g.1j.5y([X,2K,1X,2n,2i]);n(h.g.3X){f 4b=\'\';n(h.g.w>h.g.M){4b=\'I="1v"\'}17{4b=\'E="1v"\'}h.k.j(\'.1B\').1F(\'<2I 1u="1S\'+49+\'" 3d="\'+(u-1)+\'" 4c="4V\'+u+\'4W\'+h.2G+\'">\'+\'<V X="\'+X+\'" \'+4b+\' />\'+\'</2I> \')}17{h.k.j(\'.1B\').1F(\'<2I 1u="1S\'+49+\'" 3d="\'+(u-1)+\'" 4c="4V\'+u+\'4W\'+h.2G+\'">\'+u+\'</2I> \')}49=\'\'};n(c.g.34){$.8e({5L:\'8f\',5M:c.g.34,8g:R,8h:\'34\',8i:q(34){f 2q=$(\'<2q></2q>\');$(34).j(\'3R 8j\').3w(q(){++u;f 2K=($(c).j(\'2K\').3e())?$(c).j(\'2K\').3e():\'#\';f X=$(c).j(\'1N\').3e();f 1X=$(c).j(\'1N\').U(\'5L\');f 2n=$(c).j(\'2n\').3e();f 2i=($(c).j(\'2i\').3e())?$(c).j(\'2i\').3e():\'4H\';4U(2K,X,1X,2n,2i)})}})}17 n(c.g.8k){}17{c.k.j(\'2q 3f\').3w(q(){++u;f 2K=($(c).j(\'a\').1y)?$(c).j(\'a\').U(\'1O\'):\'#\';f X=$(c).j(\'V\').U(\'X\');f 1X=$(c).j(\'V\').U(\'1u\');f 2n=$(c).j(\'.8l\').2V();f 2i=($(c).j(\'a\').1y&&$(c).j(\'a\').U(\'2i\'))?$(c).j(\'a\').U(\'2i\'):\'4H\';4U(2K,X,1X,2n,2i)})}n(h.g.3X&&!h.g.41){h.g.3x={O:0.3};h.g.4K={O:0.5};h.g.3Z={O:1};h.k.j(\'.1B\').3B(\'2B\');f 4d=(u+1)*h.k.j(\'.2B .1S\').E();h.k.j(\'.2B\').E(4d);h.k.A({I:h.k.I()+h.k.j(\'.1B\').I()});h.k.1F(\'<1o 1u="5N"></1o>\');f 5O=h.k.j(\'.1B\').8m();h.k.j(\'.1B\').2C();h.k.j(\'.5N\').E(h.g.w).1F(5O);f 4X=0,w=c.g.w,M=c.g.M,3C=0,2B=h.k.j(\'.2B\'),4Y=0,5P=h.k.3g().t;2B.j(\'.1S\').3w(q(){4X+=$(c).8n()});2B.E(4X+\'Z\');3C=2B.E();4e=c.g.w;4e=w-1v;n(4d>h.g.w){h.k.8o(q(e){4Y=h.k.3g().r+90;f x=e.8p,y=e.8q,2W=0;x=x-4Y;y=y-5P;5Q=3C-4e;2W=-((5Q*x)/4e);n(2W>0)2W=0;n(2W<-(3C-w))2W=-(3C-w);n(y>M){2B.A({r:2W})}})}h.k.j(\'.8r\').A({\'r\':10});n(4d<h.g.w){h.k.j(\'.1B\').E(\'2X\');h.k.j(\'.8s\').1g();f 1P=\'.1B\';2L(h.g.4N){N\'42\':f 18=(h.g.w-h.k.j(1P).E())/2;h.k.j(1P).A({\'r\':18});L;N\'2r\':h.k.j(1P).A({\'r\':\'2X\',\'2r\':\'-8t\'});L;N\'r\':h.k.j(1P).A({\'r\':\'8u\'});L}}}17{f 1P=\'.1B\';n(h.g.3y){h.k.j(\'.1B\').3B(\'4Z\').51(\'1B\');1P=\'.4Z\'}2L(h.g.4N){N\'42\':f 18=(h.g.w-h.k.j(1P).E())/2;h.k.j(1P).A({\'r\':18});L;N\'2r\':h.k.j(1P).A({\'r\':\'2X\',\'2r\':\'5R\'});L;N\'r\':h.k.j(1P).A({\'r\':\'5R\'});L}n(!h.g.3y){n(h.k.j(\'.1B\').I()>20){h.k.j(\'.1B\').1g()}}}c.k.j(\'2q\').1g();n(c.g.5A)c.g.1j.5S(q(a,b){11 C.1k()-0.5});c.g.1w=c.g.1j[0][0];c.g.1R=c.g.1j[0][1];c.g.33=c.g.1j[0][3];c.g.3V=c.g.1j[0][4];n(c.g.1j.1y>1){c.k.j(\'.24\').2D(q(){n(h.g.1b==R){h.g.1x-=2;n(h.g.1x==-2){h.g.1x=h.g.1j.1y-2}17 n(h.g.1x==-1){h.g.1x=h.g.1j.1y-1}h.4f(h.g.1x)}11 R});c.k.j(\'.1V\').2D(q(){h.4f(h.g.1x);11 R});h.k.j(\'.1V, .24\').4g(\'52\',h.g.5C);h.k.j(\'.1V, .24\').4g(\'5T\',h.g.5D);c.k.j(\'.1S\').5U(q(){n($(c).U(\'1u\')!=\'1S 2U\'){$(c).1M().H(h.g.4K,2z)}},q(){n($(c).U(\'1u\')!=\'1S 2U\'){$(c).1M().H(h.g.3x,1L)}});c.k.j(\'.1S\').2D(q(){n($(c).U(\'1u\')!=\'1S 2U\'){f 4h=3h($(c).U(\'3d\'));h.4f(4h)}11 R});c.k.j(\'.1S\').A(h.g.3x);c.k.j(\'.1S:8v(0)\').A(h.g.3Z);n(h.g.35&&h.g.3y){f 35=$(\'<1o 1u="4i"><2q></2q></1o>\');1f(f i=0;i<c.g.1j.1y;i++){f 3f=$(\'<3f></3f>\');f V=$(\'<V />\');V.U(\'X\',c.g.1j[i][0]);3f.1F(V);35.j(\'2q\').1F(3f)}f 5V=3h(c.g.1j.1y*1v);35.j(\'2q\').E(5V);$(1P).1F(35);h.k.j(1P).j(\'.1S\').8w(q(){f 5W=3c(h.k.j(1P).3g().r);f 5X=3c($(c).3g().r);f 5Y=(5X-5W)-43;f 3d=3h($(c).U(\'3d\'));f 8x=h.k.j(\'.8y V\').U(\'X\');f 5Z=-(3d*1v);h.k.j(\'.4i\').j(\'2q\').H({r:5Z},{4j:1s,3i:R,J:\'60\'});h.k.j(\'.4i\').2s(1,1).H({r:5Y},{4j:1s,3i:R})});h.k.j(1P).5T(q(){$(\'.4i\').H({O:\'1g\'},{4j:1s,3i:R})})}}n(h.g.2A){h.61()}n(h.g.2R){h.62()}n(h.g.1E&&h.g.46){h.63()}n(h.g.2g){h.2g()}n(h.g.5B){h.64()}c.65()},65:q(){f h=c;f 2t=$(\'<1o 1u="2t">8z</1o>\');c.k.1F(2t);f s=c.g.1j.1y;f u=0;$.3w(c.g.1j,q(i){f 66=c;f 2t=$(\'<2I 1u="4k"></2I>\');2t.A({2p:\'4R\',t:\'-8A\'});h.k.1F(2t);f V=2w 8B();$(V).8C(q(){++u;n(u==s){h.k.j(\'.2t\').2C();h.k.j(\'.4k\').2C();h.67()}}).8D(q(){h.k.j(\'.2t, .4k, .1S, .1V, .24\').2C();h.k.2V(\'<p 26="3Y:8E;4l:8F;">8G 2t 68. 8H 5I 8I 68 8J 8K 8L.</p>\')}).U(\'X\',66[0])})},67:q(){f h=c;f 53=R;n(c.g.3T||c.g.3X)c.k.j(\'.1B\').3D(1L);n(c.g.3y)c.k.j(\'.4Z\').3D(1L);n(c.g.2n)c.k.j(\'.2J\').T();n(c.g.3U){c.k.j(\'.24\').3D(1L);c.k.j(\'.1V\').3D(1L)}h.3E();h.69();h.28();h.k.j(\'.1N a V\').U({\'X\':h.g.1w});4m=h.k.j(\'.1N a\');4m=h.4n(4m);4m.j(\'V\').3D(8M);h.54();h.55();n(h.g.46){h.6a()}f 56=q(){n(h.g.3b){53=S;h.g.2P=S;h.2E(S);h.57()}};h.k.52(56);h.k.j(\'.1V\').52(56);n(h.g.1j.1y>1&&!53){n(h.g.46){h.2S=3F(q(){h.4o()},h.g.2x)}}17{h.k.j(\'.2t, .4k, .1S, .1V, .24\').2C()}n($.6b(h.g.4L))h.g.4L()},4f:q(4h){n(c.g.1b==R){c.g.23=0;c.k.j(\'.l\').1M();c.2E(S);c.g.1x=C.6c(4h);c.k.j(\'.1N a\').U({\'1O\':c.g.1R});c.k.j(\'.1i\').U({\'X\':c.g.1w});c.k.j(\'.l\').2C();c.4o()}},4o:q(){f h=c;3G=[\'6d\',\'6e\',\'6f\',\'6g\',\'6h\',\'6i\',\'6j\',\'6k\',\'6l\',\'6m\',\'6n\',\'6o\',\'6p\',\'6q\',\'6r\',\'6s\',\'6t\',\'6u\',\'6v\',\'6w\',\'6x\',\'6y\',\'6z\',\'6A\',\'6B\',\'6C\',\'6D\',\'6E\',\'6F\',\'6G\',\'6H\',\'6I\',\'6J\'];n(h.g.1E)h.6K();1X=(c.g.3S==\'\'&&c.g.1j[c.g.1x][2])?c.g.1j[c.g.1x][2]:(c.g.3S==\'\'?\'3H\':c.g.3S);n(1X==\'8N\'){n(!c.g.3W){3G.5S(q(){11 0.5-C.1k()});c.g.3W=3G}1X=c.g.3W[c.g.1x]}17 n(1X==\'1k\'){f 6L=3h(C.1k()*3G.1y);1X=3G[6L]}17 n(h.g.45.1y>0){f 6M=h.g.45.1y;n(c.g.3j==1Y){c.g.3j=0}1X=h.g.45[c.g.3j];++c.g.3j;n(c.g.3j>=6M)c.g.3j=0}2L(1X){N\'6d\':c.58();L;N\'6e\':c.58({1k:S});L;N\'6f\':c.6N();L;N\'6g\':c.59();L;N\'6h\':c.59({1k:S});L;N\'6i\':c.6O();L;N\'6j\':c.6P();L;N\'6k\':c.6Q();L;N\'6l\':c.5a();L;N\'6m\':c.5a({1k:S});L;N\'6n\':c.5b();L;N\'6o\':c.6R();L;N\'6p\':c.6S();L;N\'6q\':c.6T();L;N\'6r\':c.6U();L;N\'6s\':c.5c({I:S});L;N\'6t\':c.5c({I:R,G:2Y,19:50});L;N\'6u\':c.3I({2j:\'t\'});L;N\'6v\':c.3I({2j:\'2Z\'});L;N\'6w\':c.3I({2j:\'2r\',s:5});L;N\'6x\':c.3I({2j:\'r\',s:5});L;N\'6y\':c.6V();L;N\'8O\':c.6W();L;N\'6z\':c.6X();L;N\'6A\':c.6Y();L;N\'6B\':c.6Z();L;N\'6C\':c.71();L;N\'6D\':c.72();L;N\'6E\':c.73();L;N\'6F\':c.5d({2j:\'t\'});L;N\'6G\':c.5d({2j:\'2Z\'});L;N\'6H\':c.74();L;N\'6I\':c.5e();L;N\'6J\':c.5e({J:\'5f\'});L;3H:c.5b();L}},58:q(F){f h=c;f F=$.1W({},{1k:R},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'31\':c.g.Q;f G=3k/c.g.1e;c.1p();f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.M/3));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 1c=c.g.M+1s;f 1d=c.g.M+1s;f W=0;f 13=0;1f(i=0;i<s;i++){1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W)+(W*5g);f 18=-h.g.w;f 1q=-(B*W);f 1l=-(v*13);f Y=(B*W);f 14=(v*13);f l=c.1G();l.1g();f D=50*(i);n(F.1k){D=40*(13);l.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B})}17{G=1L;l.A({r:(c.g.w)+(v*i),t:c.g.M+(B*i),E:v,I:B})}c.1m(l);f P=(i==(s-1))?q(){h.1n()}:\'\';l.T().19(D).H({t:Y+\'Z\',r:14+\'Z\'},G,J,P);n(F.1k){l.j(\'V\').A({r:1l+1v,t:1q+50});l.j(\'V\').19(D+(G/2)).H({r:1l,t:1q},4S,\'5f\')}17{l.j(\'V\').A({r:1l,t:1q});l.j(\'V\').19(D+(G/2)).2s(1v,0.5).2s(2z,1)}W++;n(W==1h){W=0;13++}}},6N:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=1L/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/15));f v=C.K(c.g.w/s);f B=(c.g.M);1f(i=0;i<s;i++){f 14=(v*(i));f Y=0;f l=c.1G();l.A({r:c.g.w+1v,t:0,E:v,I:B});l.j(\'V\').A({r:-(v*i)});c.1m(l);f D=80*(i);f P=(i==(s-1))?q(){h.1n()}:\'\';l.T().19(D).H({t:Y,r:14},G,J);l.j(\'V\').1g().19(D+1v).H({O:\'T\'},G+2z,J,P)}},59:q(F){f h=c;f F=$.1W({},{1k:R},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'4p\':c.g.Q;f G=2z/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.w/8));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 1c=0;f 1d=0;f W=0;f 13=0;f 1H=c.g.w/16;1f(i=0;i<s;i++){1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W);f 18=(1d+(v*13));f 1q=-(B*W);f 1l=-(v*13);f Y=1a-1H;f 14=18-1H;f l=c.2k(1r);l.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B});l.j(\'V\').A({r:1l,t:1q});c.1m(l);l.T();f D=50*i;n(F.1k){G=4S/c.g.1e;Y=1a;14=18;D=30*(C.1k()*30)}f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({O:\'1g\',t:Y+\'Z\',r:14+\'Z\'},G,J,P);W++;n(W==1h){W=0;13++}}},6O:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=1L/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.M/3));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 1c=0;f 1d=0;f W=0;f 13=0;1f(i=0;i<s;i++){1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W);f 18=(1d+(v*13));f 1q=-(B*W);f 1l=-(v*13);f Y=1a-50;f 14=18-50;f l=c.2k(1r);l.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B});l.j(\'V\').A({r:1l,t:1q});c.1m(l);l.T();f D=50*i;D=(i==(s-1))?(s*50):D;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({O:\'1g\'},G,J,P);W++;n(W==1h){W=0;13++}}},6W:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'76\':c.g.Q;f G=2z/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.M/3));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 1c=0;f 1d=0;f W=0;f 13=0;f u=-1;1f(i=0;i<s;i++){n(13%2!=0){n(W==0){u=u+1h+1}u--}17{n(13>0&&W==0){u=u+2}u++}1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W);f 18=(1d+(v*13));f 1q=-(B*W);f 1l=-(v*13);f Y=1a-50;f 14=18-50;f l=c.2k(1r);l.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B});l.j(\'V\').A({r:1l,t:1q});c.1m(l);l.T();f D=(50*i);f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({E:\'+=2u\',I:\'+=2u\',t:\'-=77\',r:\'-=77\',O:\'1g\'},G,J,P);W++;n(W==1h){W=0;13++}}},6P:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'4q\':c.g.Q;f G=78/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.M/3));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 1c=0;f 1d=0;f W=0;f 13=0;f 1H=C.K(c.g.w/6);1f(i=0;i<s;i++){1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W);f 18=(1d+(v*13));f 1q=-(B*W);f 1l=-(v*13);f Y=1a-1H;f 14=18-1H;f l=c.2k(1r);l.A({r:18,t:1a,E:v,I:B});l.j(\'V\').A({r:1l,t:1q});c.1m(l);l.T();f D=50*i;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({O:\'1g\',E:\'1g\',I:\'1g\',t:1a+(v*1.5),r:18+(B*1.5)},G,J,P);W++;n(W==1h){W=0;13++}}},6Q:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'31\':c.g.Q;f G=3k/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/7));f v=(c.g.w);f B=C.K(c.g.M/s);1f(i=0;i<s;i++){f 14=(i%2==0?\'\':\'\')+v;f Y=(i*B);f l=c.1G();l.A({r:14+\'Z\',t:Y+\'Z\',E:v,I:B});l.j(\'V\').A({r:0,t:-Y});c.1m(l);f D=90*i;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({O:\'T\',t:Y,r:0},G,J,P)}},5a:q(F){f h=c;f F=$.1W({},{1k:R},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=2Y/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/10));f v=C.K(c.g.w/s);f B=(c.g.M);1f(i=0;i<s;i++){f 14=(v*(i));f Y=0;f l=c.1G();l.A({r:14,t:Y-50,E:v,I:B});l.j(\'V\').A({r:-(v*i),t:0});c.1m(l);n(F.1k){f 1k=c.5h(s);f D=50*1k;D=(i==(s-1))?(50*s):D}17{f D=70*(i);G=G-(i*2)}f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({O:\'T\',t:Y+\'Z\',r:14+\'Z\'},G,J,P)}},5b:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'79\':c.g.Q;f G=78/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/10));f v=C.K(c.g.w/s);f B=c.g.M;1f(i=0;i<s;i++){f Y=0;f 1a=B;f 5i=v*i;f l=c.1G();l.A({r:5i,t:1a,I:B,E:v});l.j(\'V\').A({r:-(5i)});c.1m(l);f 1k=c.5h(s);f D=30*1k;f P=(i==(s-1))?q(){h.1n()}:\'\';l.T().19(D).H({t:Y},G,J,P)}},6R:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=8P/c.g.1e;c.1p();f v=c.g.w;f B=c.g.M;f s=2;1f(i=0;i<s;i++){f 1a=0;f 18=0;f l=c.1G();l.A({r:18,t:1a,E:v,I:B});c.1m(l);f P=(i==(s-1))?q(){h.1n()}:\'\';l.H({O:\'T\',r:0,t:0},G,J,P)}},6S:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=1L/c.g.1e;c.1p();f v=c.g.w;f B=c.g.M;f s=4;1f(i=0;i<s;i++){n(i==0){f 1a=\'-2u\';f 18=\'-2u\'}17 n(i==1){f 1a=\'-2u\';f 18=\'2u\'}17 n(i==2){f 1a=\'2u\';f 18=\'-2u\'}17 n(i==3){f 1a=\'2u\';f 18=\'2u\'}f l=c.1G();l.A({r:18,t:1a,E:v,I:B});c.1m(l);f P=(i==(s-1))?q(){h.1n()}:\'\';l.H({O:\'T\',r:0,t:0},G,J,P)}},6T:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=2Y/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/16));f v=C.K(c.g.w/s);f B=c.g.M;1f(i=0;i<s;i++){f 14=(v*(i));f Y=0;f l=c.1G();l.A({r:14,t:Y-c.g.M,E:v,I:B});l.j(\'V\').A({r:-(v*i),t:0});c.1m(l);f D;n(i<=((s/2)-1)){D=7a-(i*1s)}17 n(i>((s/2)-1)){D=((i-(s/2))*1s)}D=D/2.5;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({t:Y+\'Z\',r:14+\'Z\',O:\'T\'},G,J,P)}},6U:q(F){f h=c;f F=$.1W({},{I:R},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=2Y/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/16));f v=C.K(c.g.w/s);f B=c.g.M;1f(i=0;i<s;i++){f 14=(v*(i));f Y=0;f l=c.1G();l.A({r:14,t:Y,E:v,I:B});l.j(\'V\').A({r:-(v*i),t:0});c.1m(l);f D;n(!F.I){n(i<=((s/2)-1)){D=7a-(i*1s)}17 n(i>((s/2)-1)){D=((i-(s/2))*1s)}f P=(i==(s-1))?q(){h.1n()}:\'\'}17{n(i<=((s/2)-1)){D=1s+(i*1s)}17 n(i>((s/2)-1)){D=(((s/2)-i)*1s)+(s*1v)}f P=(i==(s/2))?q(){h.1n()}:\'\'}D=D/2.5;n(!F.I){l.19(D).H({O:\'T\',t:Y+\'Z\',r:14+\'Z\',E:\'T\'},G,J,P)}17{G=G+(i*2);f J=\'1Q\';l.19(D).H({O:\'T\',t:Y+\'Z\',r:14+\'Z\',I:\'T\'},G,J,P)}}},5c:q(F){f h=c;f F=$.1W({},{I:S,G:1L,19:1v},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=F.G/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/16));f v=C.K(c.g.w/s);f B=c.g.M;1f(i=0;i<s;i++){f 14=(v*(i));f Y=0;f l=c.1G();l.A({r:14,t:Y,E:v,I:B});l.j(\'V\').A({r:-(v*i),t:0});c.1m(l);f D=F.19*i;f P=(i==(s-1))?q(){h.1n()}:\'\';n(!F.I){l.19(D).H({O:\'T\',t:Y+\'Z\',r:14+\'Z\',E:\'T\'},G,J,P)}17{f J=\'1Q\';l.19(D).H({O:\'T\',t:Y+\'Z\',r:14+\'Z\',I:\'T\'},G,J,P)}}},3I:q(F){f h=c;f F=$.1W({},{2j:\'t\',4r:\'4s\',s:7},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'7b\':c.g.Q;f G=8Q/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});c.k.j(\'.1i\').1g();f s=F.s;1f(i=0;i<s;i++){2L(F.2j){3H:N\'t\':f v=C.K(c.g.w/s);f B=c.g.M;f 1T=0;f 1C=(v*i);f 3l=-B;f 2M=1C;f 3m=B;f 3n=1C;f 3o=0;f 3p=1C;f 1q=0;f 1l=-1C;L;N\'2Z\':f v=C.K(c.g.w/s);f B=c.g.M;f 1T=0;f 1C=(v*i);f 3l=B;f 2M=1C;f 3m=-B;f 3n=1C;f 3o=0;f 3p=1C;f 1q=0;f 1l=-1C;L;N\'2r\':f v=c.g.w;f B=C.K(c.g.M/s);f 1T=(B*i);f 1C=0;f 3l=1T;f 2M=v;f 3m=1T;f 3n=-2M;f 3o=1T;f 3p=0;f 1q=-1T;f 1l=0;L;N\'r\':f v=c.g.w;f B=C.K(c.g.M/s);f 1T=(B*i);f 1C=0;f 3l=1T;f 2M=-v;f 3m=1T;f 3n=-2M;f 3o=1T;f 3p=0;f 1q=-1T;f 1l=0;L}2L(F.4r){N\'7c\':3H:f D=(i%2==0)?0:5g;L;N\'1k\':f D=30*(C.1k()*30);L;N\'4s\':f D=i*1v;L}f l=c.2k(1r);l.j(\'V\').A({r:1l,t:1q});l.A({t:1T,r:1C,E:v,I:B});c.1m(l);l.T();l.19(D).H({t:3l,r:2M},G,J);f 29=c.1G();29.j(\'V\').A({r:1l,t:1q});29.A({t:3m,r:3n,E:v,I:B});c.1m(29);29.T();f P=(i==(s-1))?q(){h.1n()}:\'\';29.19(D).H({t:3o,r:3p},G,J,P)}},6V:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=3k/c.g.1e;c.1p();f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.w/8));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 1c=0;f 1d=0;f W=0;f 13=0;f 4t=2w 4a;f 3q=2w 4a;1f(i=0;i<s;i++){1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W);f 18=(1d+(v*13));4t[i]=[1a,18];W++;n(W==1h){W=0;13++}}W=0;13=0;1f(i=0;i<s;i++){3q[i]=i};f 3q=h.7d(3q);1f(i=0;i<s;i++){1c=(i%2==0)?1c:-1c;1d=(i%2==0)?1d:-1d;f 1a=1c+(B*W);f 18=(1d+(v*13));f 1q=-(B*W);f 1l=-(v*13);f Y=1a;f 14=18;1a=4t[3q[i]][0];18=4t[3q[i]][1];f l=c.1G();l.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B});l.j(\'V\').A({r:1l,t:1q});c.1m(l);f D=30*(C.1k()*30);n(i==(s-1))D=30*30;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({O:\'T\',t:Y+\'Z\',r:14+\'Z\'},G,J,P);W++;n(W==1h){W=0;13++}}},6X:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'31\':c.g.Q;f G=1L/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/10))*2;f v=C.K(c.g.w/s)*2;f B=(c.g.M)/2;f 13=0;1f(i=0;i<s;i++){4u=(i%2)==0?S:R;f 1I=(v*(13));f 1J=(4u)?-h.g.M:h.g.M;f 2a=(v*(13));f 1H=(4u)?0:(B);f 14=-(v*13);f Y=(4u)?0:-(B);f D=8R*13;f l=c.1G();l.A({r:1I,t:1J,E:v,I:B});l.j(\'V\').A({r:14+(v/1.5),t:Y}).19(D).H({r:14,t:Y},(G*1.9),\'1Q\');c.1m(l);f P=(i==(s-1))?q(){h.1n()}:\'\';l.T().19(D).H({t:1H,r:2a},G,J,P);n((i%2)!=0)13++}},6Y:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'31\':c.g.Q;f G=3k/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/10));f v=C.K(c.g.w/s);f B=(c.g.M);1f(i=0;i<s;i++){f 1I=(v*(i));f 1J=0;f 2a=(v*(i));f 1H=0;f 14=-(v*(i));f Y=0;f D=1v*i;f l=c.1G();l.A({r:1I,t:1J,E:v,I:B});l.j(\'V\').A({r:14+(v/1.5),t:Y}).19(D).H({r:14,t:Y},(G*1.1),\'4q\');c.1m(l);f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({t:1H,r:2a,O:\'T\'},G,J,P)}},6Z:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'4p\':c.g.Q;f G=1L/c.g.1e;c.1p();f s=C.K(c.g.w/(c.g.w/10));f 1z=1v;f 1D=C.5j(C.3r((c.g.w),2)+C.3r((c.g.M),2));f 1D=C.K(1D);1f(i=0;i<s;i++){f 1I=(h.g.w/2)-(1z/2);f 1J=(h.g.M/2)-(1z/2);f 2a=1I;f 1H=1J;f l=1A;l=c.4v({1N:h.g.1w,r:1I,t:1J,E:1z,I:1z,2p:{t:-1J,r:-1I}}).3J({\'4w-1D\':1D+\'Z\'});1z+=1v;c.1m(l);f D=70*i;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({t:1H,r:2a,O:\'T\'},G,J,P)}},71:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'4p\':c.g.Q;f G=1L/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f s=C.K(c.g.w/(c.g.w/10));f 1D=C.5j(C.3r((c.g.w),2)+C.3r((c.g.M),2));f 1D=C.K(1D);f 1z=1D;1f(i=0;i<s;i++){f 1I=(h.g.w/2)-(1z/2);f 1J=(h.g.M/2)-(1z/2);f 2a=1I;f 1H=1J;f l=1A;l=c.4v({1N:1r,r:1I,t:1J,E:1z,I:1z,2p:{t:-1J,r:-1I}}).3J({\'4w-1D\':1D+\'Z\'});1z-=1v;c.1m(l);l.T();f D=70*i;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({t:1H,r:2a,O:\'1g\'},G,J,P)}},72:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=1L/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f s=C.K(c.g.w/(c.g.w/10));f 1D=C.5j(C.3r((c.g.w),2)+C.3r((c.g.M),2));f 1D=C.K(1D);f 1z=1D;1f(i=0;i<s;i++){f 1I=(h.g.w/2)-(1z/2);f 1J=(h.g.M/2)-(1z/2);f 2a=1I;f 1H=1J;f l=1A;n($.8S.8T){l=c.2k(1r);l.A({r:1I,t:1J,E:1z,I:1z}).3J({\'4w-1D\':1D+\'Z\'});l.j(\'V\').A({r:-1I,t:-1J})}17{l=c.4v({1N:1r,r:1I,t:1J,E:1z,I:1z,2p:{t:-1J,r:-1I}}).3J({\'4w-1D\':1D+\'Z\'})}1z-=1v;c.1m(l);l.T();f D=1v*i;f P=(i==(s-1))?q(){h.1n()}:\'\';f 7e=(i%2==0)?\'7f\':\'-7f\';l.19(D).H({t:1H,r:2a,O:\'1g\',2b:7e},G,J,P)}},73:q(F){f h=c;c.g.1b=S;f J=(c.g.Q==\'\')?\'1Q\':c.g.Q;f G=2Y/c.g.1e;c.1p();f 1t=C.K(c.g.w/(c.g.w/8));f 1h=C.K(c.g.M/(c.g.M/4));f s=1t*1h;f v=C.K(c.g.w/1t);f B=C.K(c.g.M/1h);f 8U=R;f Y=0;f 14=0;f 3K=0;f 13=0;1f(i=0;i<s;i++){Y=B*3K;14=v*13;f D=30*(i);f l=c.1G();l.A({r:14,t:Y,E:v,I:B}).1g();l.j(\'V\').A({r:-14,t:-Y});c.1m(l);f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({E:\'T\',I:\'T\'},G,J,P);3K++;n(3K==1h){3K=0;13++}}},5d:q(F){f h=c;f F=$.1W({},{2j:\'t\'},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'4q\':c.g.Q;f G=2Y/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f s=12;f v=C.K(c.g.w/s);f B=c.g.M;f 1H=(F.2j==\'t\')?-B:B;1f(i=0;i<s;i++){f 1a=0;f 18=(v*i);f 1q=0;f 1l=-(v*i);f l=c.2k(1r);l.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B});l.j(\'V\').A({r:1l,t:1q});c.1m(l);l.T();f D=70*i;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({t:1H},G,J,P)}},74:q(F){f h=c;f F=$.1W({},{1k:R},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?\'5k\':c.g.Q;f G=3k/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});f 1t=C.K(c.g.w/(c.g.w/10));f s=1t;f v=C.K(c.g.w/1t);f B=c.g.M;1f(i=0;i<s;i++){f 1a=0;f 18=v*i;f 1q=0;f 1l=-(v*i);f 2a=\'+=\'+v;f l=c.2k(1r);l.A({r:0,t:0,E:v,I:B});l.j(\'V\').A({r:1l,t:1q});f 3L=c.2k(1r);3L.A({r:18+\'Z\',t:1a+\'Z\',E:v,I:B});3L.2V(l);c.1m(3L);l.T();3L.T();f D=50*i;f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({r:2a},G,J,P)}},5e:q(F){f h=c;f F=$.1W({},{2j:\'t\',4r:\'4s\',s:7,J:\'5k\'},F||{});c.g.1b=S;f J=(c.g.Q==\'\')?F.J:c.g.Q;f G=1L/c.g.1e;f 1r=c.k.j(\'.1i\').U(\'X\');c.1p();c.28();c.k.j(\'.1i\').U({\'X\':c.g.1w});c.k.j(\'.1i\').1g();f s=F.s;1f(i=0;i<s;i++){f v=C.K(c.g.w/s);f B=c.g.M;f 1T=0;f 1C=(v*i);f 3l=-B;f 2M=1C+v;f 3m=B;f 3n=1C;f 3o=0;f 3p=1C;f 1q=0;f 1l=-1C;2L(F.4r){N\'7c\':3H:f D=(i%2==0)?0:5g;L;N\'1k\':f D=30*(C.1k()*30);L;N\'4s\':f D=i*1v;L}f l=c.2k(1r);l.j(\'V\').A({r:1l,t:0});l.A({t:0,r:0,E:v,I:B});f 29=c.1G();29.j(\'V\').A({r:1l,t:0});29.A({t:0,r:-v,E:v,I:B});f 3M=c.1G();3M.2V(\'\').1F(l).1F(29);3M.A({t:0,r:1C,E:v,I:B});c.1m(3M);3M.T();l.T();29.T();f P=(i==(s-1))?q(){h.1n()}:\'\';l.19(D).H({r:v},G,J);29.19(D).H({r:0},G,J,P)}},1n:q(F){f h=c;c.k.j(\'.1i\').T();c.55();c.g.1b=R;c.k.j(\'.1i\').U({\'X\':c.g.1w});c.k.j(\'.1N a\').U({\'1O\':c.g.1R});n(!c.g.2P&&!c.g.2o&&!c.g.36){c.2S=3F(q(){h.3N()},c.g.2x)}h.3E()},3N:q(){c.2E(S);c.k.j(\'.l\').2C();n(!c.g.2o&&!c.g.36)c.4o()},1p:q(){n($.6b(c.g.4M))c.g.4M(c.g.1x,c);c.7g();c.7h();c.7i();c.7j()},7g:q(){f 7k=c.g.1j[c.g.1x][0];f 7l=c.g.1j[c.g.1x][1];f 7m=c.g.1j[c.g.1x][3];f 7n=c.g.1j[c.g.1x][4];c.g.1w=7k;c.g.1R=7l;c.g.33=7m;c.g.3V=7n},7h:q(){f h=c;c.k.j(\'.2U\').H(h.g.3x,1L).51(\'2U\');$(\'#4V\'+(c.g.1x+1)+\'4W\'+h.2G).H(h.g.3Z,3k).3B(\'2U\')},7j:q(){c.g.1x++;n(c.g.1x==c.g.1j.1y){c.g.1x=0}},1G:q(){n(c.g.1R!=\'#\'){f 1Z=$(\'<a 1O="\'+c.g.1R+\'"><V X="\'+c.g.1w+\'" /></a>\')}17{f 1Z=$(\'<V X="\'+c.g.1w+\'" />\')}1Z=c.4n(1Z);f l=$(\'<1o 1u="l"></1o>\');l.1F(1Z);11 l},2k:q(1r){n(c.g.1R!=\'#\'){f 1Z=$(\'<a 1O="\'+c.g.1R+\'"><V X="\'+1r+\'" /></a>\')}17{f 1Z=$(\'<V X="\'+1r+\'" />\')}1Z=c.4n(1Z);f l=$(\'<1o 1u="l"></1o>\');l.1F(1Z);11 l},4n:q(1Z){n(c.g.41){1Z.j(\'V\').I(c.g.M)}11 1Z},1m:q(l){c.k.j(\'.47\').1F(l)},5K:q(J){f 7o=[\'4p\',\'1Q\',\'4q\',\'8V\',\'8W\',\'8X\',\'8Y\',\'8Z\',\'91\',\'92\',\'93\',\'94\',\'95\',\'60\',\'96\',\'97\',\'31\',\'7b\',\'99\',\'5k\',\'9a\',\'9b\',\'79\',\'9c\',\'76\',\'5f\',\'9d\',\'9e\',\'9f\',\'9g\',];n(4x.9h(J,7o)>0){11 J}17{11\'\'}},5h:q(i){11 C.6c(C.1k()*i)},54:q(){c.k.j(\'.2J\').2V(c.g.33)},55:q(){f h=c;n(c.g.33!=1Y&&c.g.33!=\'\'&&h.g.2n){h.k.j(\'.2J\').9i(2Y)}},7i:q(){f h=c;c.k.j(\'.2J\').9j(1s,q(){h.54()})},6a:q(){f h=c;f 1U=h.g.1U;f 2y=h.g.2y;f 2H=h.g.2H;h.k.5U(q(){n(h.g.3b)h.g.2P=S;n(!h.g.3a){h.4y()}n(h.g.2g){n(h.g.3T){h.k.j(\'.1B\').T().A({O:0}).H({O:1U},2y)}n(h.g.3U){h.k.j(\'.24\').T().A({O:0}).H({O:1U},2y);h.k.j(\'.1V\').T().A({O:0}).H({O:1U},2y)}n(h.g.2A&&!h.g.2Q){h.k.j(\'.21\').1M().T().A({O:0}).H({O:1U},1s)}n(h.g.2R){h.k.j(\'.2l\').1M().T().A({O:0}).H({O:1U},1s)}}h.2E(S);n(h.g.2A&&!h.g.2Q&&!h.g.2g){h.k.j(\'.21\').1M().H({O:1},1s)}n(h.g.2R&&!h.g.2g){h.k.j(\'.2l\').1M().H({O:1},1s)}},q(){n(h.g.3b)h.g.2P=R;n(h.g.23==0&&!h.g.1b&&!h.g.2o){h.3E()}17 n(!h.g.2o){h.3O()}n(h.g.2g){n(h.g.3T){h.k.j(\'.1B\').3i("22",[]).T().A({O:1U}).H({O:0},2H)}n(h.g.3U){h.k.j(\'.24\').3i("22",[]).T().A({O:1U}).H({O:0},2H);h.k.j(\'.1V\').3i("22",[]).T().A({O:1U}).H({O:0},2H)}n(h.g.2A&&!h.g.2Q){h.k.j(\'.21\').1M().A({O:1U}).H({O:0},1s)}n(h.g.2R){h.k.j(\'.2l\').1M().A({O:1U}).H({O:0},1s)}}h.2E(S);n(!h.g.1b&&h.g.1j.1y>1){h.2S=3F(q(){h.3N()},h.g.2x-h.g.23);h.k.j(\'.1i\').U({\'X\':h.g.1w});h.k.j(\'.1N a\').U({\'1O\':h.g.1R})}n(h.g.2A&&!h.g.2Q&&!h.g.2g){h.k.j(\'.21\').1M().H({O:0.3},1s)}n(h.g.2R&&!h.g.2g){h.k.j(\'.2l\').1M().H({O:0.3},1s)}})},2E:q(9k){f h=c;9l(h.2S)},28:q(){n(c.g.1R!=\'#\'){c.k.j(\'.1N a\').U({\'1O\':c.g.1R,\'2i\':c.g.3V})}17{c.k.j(\'.1N a\').9m(\'1O\')}},2g:q(){c.k.j(\'.1B\').1g();c.k.j(\'.24\').1g();c.k.j(\'.1V\').1g();c.k.j(\'.2J\').1g();c.k.j(\'.21\').1g();c.k.j(\'.2l\').1g()},61:q(){f h=c;f 21=$(\'<a 1O="#" 1u="21">2A</a>\');h.k.1F(21);f 2F=(h.g.w-21.E())/2;f 3s=0;n(h.g.2R)2F-=25;n(h.g.4P==h.g.4O)3s=21.E()+5;f 2c={r:2F};2L(h.g.4O){N\'7p\':2c={r:5+3s,t:30};L;N\'7q\':2c={2r:5+3s,t:30};L;N\'7r\':2c={r:5+3s,2Z:5,t:\'2X\'};L;N\'7s\':2c={2r:5+3s,2Z:5,t:\'2X\'};L}21.A(2c).H({O:0.3},h.g.2y);$(5l).9n(q(e){f 7t=(e.3t?e.3t:e.9o);n(7t==27)$(\'#4z\').5m(\'2D\')});h.k.j(\'.21\').2D(q(){h.g.2Q=S;$(c).1M().H({O:0},h.g.2H);f 1o=$(\'<1o 4c="4z"></1o>\').I($(5l).I()).1g().2s(h.g.2y,0.98);f 5n=$(\'.k\').3g().t;f 2F=$(\'.k\').3g().r;f 7u=(($(2T).I()-$(\'.k\').I())/2)+$(5l).9p();f 7v=($(2T).E()-$(\'.k\').E())/2;h.k.7w(\'<1o 4c="4A"></1o>\');$(\'4T\').7x(1o);$(\'4T\').7x(h.k);h.k.A({\'t\':5n,\'r\':2F,\'2p\':\'4R\',\'z-5H\':9q}).H({\'t\':7u,\'r\':7v},9r,\'31\');$(\'#4A\').E($(\'.k\').E()).I($(\'.k\').I()).A({\'4l\':\'4B\'}).2s(2z,0.3);$(\'#4z\').2D(q(){n($(c).9s(\'7y\'))11 R;h.g.2Q=R;$(c).3B(\'7y\');$(\'#4A\').7w($(\'.k\'));n(!h.g.2g)h.k.j(\'.21\').H({O:0.3},1s);h.k.1M().H({\'t\':5n,\'r\':2F},2z,\'31\',q(){$(c).A({\'2p\':\'9t\',\'t\':0,\'r\':0});$(\'#4A\').2C()});$(\'#4z\').2s(h.g.2H,0,q(){$(c).2C()});11 R});11 R})},62:q(){f h=c;f 2l=$(\'<a 1O="#" 1u="2l">7z</a>\');h.k.1F(2l);f 2F=(h.g.w-2l.E())/2;n(h.g.2A)2F+=25;f 2c={r:2F};2L(h.g.4P){N\'7p\':2c={r:5,t:30};L;N\'7q\':2c={2r:5,t:30};L;N\'7r\':2c={r:5,2Z:5,t:\'2X\'};L;N\'7s\':2c={2r:5,2Z:5,t:\'2X\'};L}2l.A(2c).H({O:0.3},h.g.2y);2l.2D(q(){n(!h.g.2o){$(c).2V(\'9u\');$(c).2s(1v,0.5).2s(1v,1);$(c).3B(\'7A\');h.4y();h.g.2o=S;h.2E(S)}17{n(!h.g.1b&&!h.k.j(\'.1E\').5J(\':9v\')){h.g.23=0}17{h.3O()}n(!h.g.1E)h.3O();h.g.2o=R;$(c).2V(\'7z\');$(c).2s(1v,0.5).2s(1v,1);$(c).51(\'7A\');n(!h.g.3b){h.2E(S);n(!h.g.1b&&h.g.1j.1y>1){h.2S=3F(q(){h.3N()},h.g.2x-h.g.23);h.k.j(\'.1i\').U({\'X\':h.g.1w});h.k.j(\'.1N a\').U({\'1O\':h.g.1R})}}}11 R})},5o:q(3A){f 48=0,5p;1f(5p 7B 3A){n(3A.9w(5p))48++}11 48},63:q(){f h=c;f 1E=$(\'<1o 1u="1E"></1o>\');h.k.1F(1E);n(h.5o(h.g.2h)==0){n(3h(1E.A(\'E\'))>0){h.g.2h.E=3h(1E.A(\'E\'))}17{h.g.2h={E:h.g.w,I:5}}}n(h.5o(h.g.2h)>0&&h.g.2h.E==1Y){h.g.2h.E=h.g.w}1E.A(h.g.2h).1g()},7C:q(){f h=c;n(h.g.2P||h.g.2o||h.g.36||!h.g.1E)11 R;h.k.j(\'.1E\').1g().7D().E(h.g.2h.E).H({E:\'T\'},h.g.2x,\'7E\')},57:q(){f h=c;n(!h.g.1b){h.k.j(\'.1E\').1M()}},7F:q(){f h=c;n(h.g.2P||h.g.2o||!h.g.1E)11 R;h.k.j(\'.1E\').7D().H({E:h.g.2h.E},(h.g.2x-h.g.23),\'7E\')},6K:q(){f h=c;n(!h.g.1E)11 R;h.k.j(\'.1E\').1M().9x(2z,q(){$(c).E(h.g.2h.E)})},3E:q(){f h=c;h.g.3a=R;f 3u=2w 5q();h.g.23=0;h.g.44=3u.5r();h.7C()},4y:q(){f h=c;n(h.g.3a)11 R;h.g.3a=S;f 3u=2w 5q();h.g.23+=3u.5r()-h.g.44;h.57()},3O:q(){f h=c;h.g.3a=R;f 3u=2w 5q();h.g.44=3u.5r();h.7F()},64:q(){f h=c;$(2T).9y(q(e){n(e.3t==39||e.3t==40){h.k.j(\'.1V\').5m(\'2D\')}17 n(e.3t==37||e.3t==38){h.k.j(\'.24\').5m(\'2D\')}})},4v:q(F){f l=$(\'<1o 1u="l"></1o>\');l.A({\'r\':F.r,\'t\':F.t,\'E\':F.E,\'I\':F.I,\'4l-1N\':\'5M(\'+F.1N+\')\',\'4l-2p\':F.2p.r+\'Z \'+F.2p.t+\'Z\'});11 l},7d:q(3P){f h=c;f 4C=2w 4a();f 4D;5s(3P.1y>0){4D=h.7G(0,3P.1y-1);4C[4C.1y]=3P[4D];3P.9z(4D,1)}11 4C},7G:q(5t,7H){f 4E;9A 4E=C.1k();5s(4E==1);11(4E*(7H-5t+1)+5t)|0},69:q(){f h=c;$(2T).4g(\'9B\',q(){h.g.36=S;h.4y();h.2E(S)});$(2T).4g(\'2A\',q(){n(h.g.1j.1y>1){h.g.36=R;n(h.g.23==0){h.3E()}17{h.3O()}n(h.g.23<=h.g.2x){h.2S=3F(q(){h.3N()},h.g.2x-h.g.23);h.k.j(\'.1i\').U({\'X\':h.g.1w});h.k.j(\'.1N a\').U({\'1O\':h.g.1R})}}})}});$.2f.3J=q(3v){f A={};f 5u=[\'9C\',\'9D\',\'o\',\'9E\'];1f(f 2m 7B 3v){1f(f i=0;i<5u.1y;i++)A[\'-\'+5u[i]+\'-\'+2m]=3v[2m];A[2m]=3v[2m]}c.A(A);11 c};f 3Q=\'9F\';$.2f.2b=q(2N){f 26=$(c).A(\'1K\')||\'4B\';n(2d 2N==\'1Y\'){n(26){f m=26.4F(/2b\\(([^)]+)\\)/);n(m&&m[1]){11 m[1]}}11 0}f m=2N.7I().4F(/^(-?\\d+(\\.\\d+)?)(.+)?$/);n(m){n(m[3])3Q=m[3];$(c).A(\'1K\',26.7J(/4B|2b\\([^)]*\\)/,\'\')+\'2b(\'+m[1]+3Q+\')\')}11 c};$.2f.2O=q(2N,4j,F){f 26=$(c).A(\'1K\');n(2d 2N==\'1Y\'){n(26){f m=26.4F(/2O\\(([^)]+)\\)/);n(m&&m[1]){11 m[1]}}11 1}$(c).A(\'1K\',26.7J(/4B|2O\\([^)]*\\)/,\'\')+\'2O(\'+2N+\')\');11 c};f 7K=$.22.4Q.7L;$.22.4Q.7L=q(){n(c.2m==\'2b\'){11 3c($(c.4G).2b())}17 n(c.2m==\'2O\'){11 3c($(c.4G).2O())}11 7K.5v(c,5w)};$.22.7M.2b=q(22){$(22.4G).2b(22.7N+3Q)};$.22.7M.2O=q(22){$(22.4G).2O(22.7N)};f 7O=$.2f.H;$.2f.H=q(2m){n(2d 2m[\'2b\']!=\'1Y\'){f m=2m[\'2b\'].7I().4F(/^(([+-]=)?(-?\\d+(\\.\\d+)?))(.+)?$/);n(m&&m[5]){3Q=m[5]}2m[\'2b\']=m[1]}11 7O.5v(c,5w)};q 7P(7Q){f 7R=[\'1K\',\'9G\',\'9H\',\'9I\',\'9J\'];f p;5s(p=7R.9K()){n(2d 7Q.26[p]!=\'1Y\'){11 p}}11\'1K\'};f 2v=1A;f 7S=$.2f.A;$.2f.A=q(2e,2N){n(2v===1A){n(2d $.7T!=\'1Y\'){2v=$.7T}17 n(2d $.3v!=\'1Y\'){2v=$.3v}17{2v={}}}n(2d 2v[\'1K\']==\'1Y\'&&(2e==\'1K\'||(2d 2e==\'7U\'&&2d 2e[\'1K\']!=\'1Y\'))){2v[\'1K\']=7P(c.7V(0))}n(2v[\'1K\']!=\'1K\'){n(2e==\'1K\'){2e=2v[\'1K\'];n(2d 2N==\'1Y\'&&4x.26){11 4x.26(c.7V(0),2e)}}17 n(2d 2e==\'7U\'&&2d 2e[\'1K\']!=\'1Y\'){2e[2v[\'1K\']]=2e[\'1K\'];9L 2e[\'1K\']}}11 7S.5v(c,5w)}})(4x);',62,606,'||||||||||||this|||var|settings|self||find|box_skitter|box_clone||if|||function|left|total|top||width_box|width_skitter||||css|height_box|Math|delay_time|width|options|time_animate|animate|height|easing|ceil|break|height_skitter|case|opacity|callback|easing_default|false|true|show|attr|img|col_t|src|_btop|px||return||col|_bleft|||else|_vleft|delay|_vtop|is_animating|init_top|init_left|velocity|for|hide|division_h|image_main|images_links|random|_vleft_image|addBoxClone|finishAnimation|div|setActualLevel|_vtop_image|image_old|200|division_w|class|100|image_atual|image_i|length|size_box|null|info_slide|_ileftc|radius|progressbar|append|getBoxClone|_ftop|_ileft|_itop|transform|500|stop|image|href|class_info|easeOutQuad|link_atual|image_number|_itopc|opacity_elements|next_button|extend|animation_type|undefined|img_clone||focus_button|fx|elapsedTime|prev_button||style||setLinkAtual|box_clone_next|_fleft|rotate|cssPosition|typeof|arg|fn|hideTools|progressbar_css|target|direction|getBoxCloneImgOld|play_pause_button|prop|label|is_paused|position|ul|right|fadeTo|loading|100px|_propsObj|new|interval|interval_in_elements|300|focus|info_slide_thumb|remove|click|clearTimer|_left|number_skitter|interval_out_elements|span|label_skitter|link|switch|_fleftc|val|scale|is_hover_box_skitter|foucs_active|controls|timer|window|image_number_select|html|new_x|auto|400|bottom||easeOutExpo|sk|label_atual|xml|preview|is_blur||||is_paused_time|stop_over|parseFloat|rel|text|li|offset|parseInt|queue|_i_animation|700|_ftopc|_itopn|_ileftn|_ftopn|_fleftn|spread|pow|_space|keyCode|date|props|each|animateNumberOut|dots|width_label|obj|addClass|w_info_slide_thumb|fadeIn|startTime|setTimeout|animations_functions|default|animationDirection|css3|line|box_clone_main|box_clone_container|completeMove|resumeTime|arrayOrigem|rotateUnits|skitter|animation|numbers|navigation|target_atual|random_ia|thumbs|color|animateNumberActive||fullscreen|center||timeStart|with_animations|auto_play|container_skitter|size|initial_select_class|Array|dimension_thumb|id|width_info_slide|width_value|jumpToImage|bind|imageNumber|preview_slide|duration|image_loading|background|img_link|resizeImage|nextImage|easeInQuad|easeInOutQuad|delay_type|sequence|order|mod|getBoxCloneBackground|border|jQuery|pauseTime|overlay_skitter|mark_position|none|arrayDestino|indice|numRandom|match|elem|_self|backgroundColor|fff|animateNumberOver|onLoad|imageSwitched|numbers_align|focus_position|controls_position|prototype|absolute|1000|body|addImageLink|image_n_|_|width_image|x_value|info_slide_dots||removeClass|mouseover|init_pause|setValueBoxText|showBoxText|mouseOverInit|pauseProgressBar|animationCube|animationCubeStop|animationShowBars|animationTube|animationBlindDimension|animationDirectionBars|animationSwapBars|easeOutBack|150|getRandom|vleft|sqrt|easeOutCirc|document|trigger|_top|objectSize|key|Date|getTime|while|valorIni|prefixes|apply|arguments|skitters|push|defaults|show_randomly|enable_navigation_keys|mouseOverButton|mouseOutButton|structure|number|setup|index|or|is|getEasing|type|url|container_thumbs|copy_info_slide|y_value|novo_width|15px|sort|mouseleave|hover|width_preview_ul|_left_info|_left_image|_left_preview|_left_ul|easeOutSine|focusSkitter|setControls|addProgressBar|enableNavigationKeys|loadImages|self_il|start|images|windowFocusOut|stopOnMouseOver|isFunction|floor|cube|cubeRandom|block|cubeStop|cubeStopRandom|cubeHide|cubeSize|horizontal|showBars|showBarsRandom|tube|fade|fadeFour|paralell|blind|blindHeight|blindWidth|directionTop|directionBottom|directionRight|directionLeft|cubeSpread|glassCube|glassBlock|circles|circlesInside|circlesRotate|cubeShow|upBars|downBars|hideBars|swapBars|swapBarsBack|hideProgressBar|random_id|total_with_animations|animationBlock|animationCubeHide|animationCubeSize|animationHorizontal|animationFade|animationFadeFour|animationParalell|animationBlind|animationCubeSpread|animationCubeJelly|animationGlassCube|animationGlassBlock|animationCircles||animationCirclesInside|animationCirclesRotate|animationCubeShow|animationHideBars||easeInBack|20px|600|easeOutElastic|1400|easeInOutExpo|zebra|shuffleArray|_rotate|20deg|setImageLink|addClassNumber|hideBoxText|increasingImage|name_image|link_image|label_image|target_link|easing_accepts|leftTop|rightTop|leftBottom|rightBottom|code|_topFinal|_leftFinal|before|prepend|finish_overlay_skitter|pause|play_button|in|startProgressBar|dequeue|linear|resumeProgressBar|randomUnique|valorFim|toString|replace|curProxied|cur|step|now|animateProxied|getTransformProperty|element|properties|proxied|cssProps|object|get|data|skitter_number|2500|time_interval||333|000|cc3333|max_number_height|prev|next|overflown|hidden|console|warn|Width|Skitter|Slideshow|ajax|GET|async|dataType|success|slide|json|label_text|clone|outerWidth|mousemove|pageX|pageY|scroll_thumbs|box_scroll_thumbs|5px|0px|eq|mouseenter|image_current_preview|preview_slide_current|Loading|9999em|Image|load|error|white|black|Error|One|more|were|not|found|1500|randomSmart|cubeJelly|800|1200|120|browser|mozilla|last|easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart||easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeInOutSine|easeInExpo||easeInCirc|easeInOutCirc|easeInElastic|easeInOutElastic|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce|inArray|slideDown|slideUp|force|clearInterval|removeAttr|keypress|which|scrollTop|9999|2000|hasClass|relative|play|visible|hasOwnProperty|fadeOut|keydown|splice|do|blur|moz|ms|webkit|deg|WebkitTransform|msTransform|MozTransform|OTransform|shift|delete'.split('|'),0,{}))


/***************************************************
		TIMERS
***************************************************/

/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/10/16
 *
 * @author Blair Mitchelmore
 * @version 1.2
 *
 **/

jQuery.fn.extend({
	everyTime: function(interval, label, fn, times) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times) {
			var counter = 0;
			
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			
			interval = jQuery.timer.timeParse(interval);

			if (typeof interval != 'number' || isNaN(interval) || interval < 0)
				return;

			if (typeof times != 'number' || isNaN(times) || times < 0) 
				times = 0;
			
			times = times || 0;
			
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			
			if (!timers[label])
				timers[label] = {};
			
			fn.timerID = fn.timerID || this.guid++;
			
			var handler = function() {
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
			};
			
			handler.timerID = fn.timerID;
			
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			
			this.global.push( element );
			
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			
			if ( timers ) {
				
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});

jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});

/***************************************************
		MODERNIZER
***************************************************/

/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")},p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

	
/***************************************************
		TWEETABLE
***************************************************/

/*
 * tweetable 1.6 - jQuery twitter feed generator plugin
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * With modifications from Philipp Robbel (http://www.robbel.com/) and Patrick DW (stackoverflow)
 * for IE compatibility.
 * Revision: $Id: jquery.tweetable.js 2011-01-06 $ 
 */
(function(a){a.fn.tweetable=function(b){var c={limit:5,username:"jo_phillips",time:false,replies:false,position:"append"};var b=a.extend(c,b);return this.each(function(e){var d=a(this);var j;var i="";var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var g="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=";var h="&count=";a.getJSON(g+c.username+h+c.limit+"&callback=?",d,function(k){a.each(k,function(m,n){if(m==0){j=a('<ul class="tweetList">')[c.position.toLowerCase()+"To"](d)}if(c.replies===false){if(n.in_reply_to_status_id===null){j.append('<li class="tweet_content_'+m+'"><p class="tweet_link_'+m+'">'+n.text.replace(/#(.*?)(\s|$)/g,'<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2')+"</p></li>")}}else{j.append('<li class="tweet_content_'+m+'"><p class="tweet_link_'+m+'">'+n.text.replace(/#(.*?)(\s|$)/g,'<span class="hash">#$1 </span>').replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ').replace(/@(.*?)(\s|\(|\)|$)/g,'<a href="http://twitter.com/$1">@$1 </a>$2')+"</p></li>")}if(c.time==true){for(var l=0;l<=12;l++){if(f[l]==n.created_at.substr(4,3)){i=l+1;if(i<10){i="0"+i}}}a(".tweet_link_"+m).append("<small> "+n.created_at.substr(8,2)+"/"+i+"/"+n.created_at.substr(26,4)+" "+n.created_at.substr(11,8)+"</small>")}})})})}})(jQuery);

	
/***************************************************
		NEWS TICKER
***************************************************/

/*!
 * liScroll 1.0
 * Examples and documentation at: 
 * http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
 * 2007-2010 Gian Carlo Mingati
 * Version: 1.0.2 (30-MARCH-2009)
 * Dual licensed under the MIT and GPL licenses:  http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html Requires: jQuery v1.2.x or later
*/
jQuery.fn.liScroll = function(settings) {
		settings = jQuery.extend({
		travelocity: 0.05
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripWidth = 0;
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerWidth = $strip.parent().parent().width();	//a.k.a. 'mask' width 	
				$strip.find("li").each(function(i){
				stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar
				});
				$strip.width(stripWidth);			
				var totalTravel = stripWidth+containerWidth;
				var defTiming = totalTravel/settings.travelocity;	// thanks to Scott Waye		
				function scrollnews(spazio, tempo){
				$strip.animate({left: '-='+ spazio}, tempo, "linear", function(){$strip.css("left", containerWidth); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.left + stripWidth;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};
	
/***************************************************
		PAGINATION
***************************************************/

/*
 * 	Easy Paginate 1.0 - jQuery plugin
 *	written by Alen Grakalic http://cssglobe.com/
 *	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
 *	Built for jQuery library http://jquery.com
 */
(function($){$.fn.easyPaginate=function(_1){var _2={step:4,delay:100,numeric:true,nextprev:true,controls:"pagination",current:"current"};var _1=$.extend(_2,_1);var _3=_1.step;var _4,_5;var _6=$(this).children();var _7=_6.length;var _8,_9,_a;var _b=1;function _c(){_4=((_b-1)*_3);_5=_4+_3;$(_6).each(function(i){var _d=$(this);_d.hide();if(i>=_4&&i<_5){setTimeout(function(){_d.fadeIn("fast");},(i-(Math.floor(i/_3)*_3))*_1.delay);}if(_1.nextprev){if(_5>=_7){_9.fadeOut("fast");}else{_9.fadeIn("fast");}if(_4>=1){_a.fadeIn("fast");}else{_a.fadeOut("fast");}}});$("li","#"+_1.controls).removeClass(_1.current);$("li[data-index=\""+_b+"\"]","#"+_1.controls).addClass(_1.current);};this.each(function(){_8=this;if(_7>_3){var _e=Math.floor(_7/_3);if((_7/_3)>_e){_e++;}var ol=$("<ol id=\""+_1.controls+"\"></ol>").insertAfter(_8);if(_1.nextprev){_a=$("<li class=\"prev\">Previous</li>").hide().appendTo(ol).click(function(){_b--;_c();});}if(_1.numeric){for(var i=1;i<=_e;i++){$("<li data-index=\""+i+"\">"+i+"</li>").appendTo(ol).click(function(){_b=$(this).attr("data-index");_c();});}}if(_1.nextprev){_9=$("<li class=\"next\">Next</li>").hide().appendTo(ol).click(function(){_b++;_c();});}_c();}});};})(jQuery);
	
	
/***************************************************
		FORM VALIDATION JAVASCRIPT
***************************************************/

$(document).ready(function() {
	$('form#contact_form').submit(function() {
		$('form#contact_form .error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
            	var labelText = $(this).prev('label').text();
            	$(this).parent().append('<span class="error">Please enter your '+labelText+'</span>');
            	$(this).addClass('inputError');
            	hasError = true;
            } else if($(this).hasClass('email')) {
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            	if(!emailReg.test(jQuery.trim($(this).val()))) {
            		var labelText = $(this).prev('label').text();
            		$(this).parent().append('<span class="error">Please a valid '+labelText+'</span>');
            		$(this).addClass('inputError');
            		hasError = true;
            	}
            }
		});
		if(!hasError) {
			$('form#contact_form input.submit').fadeOut('normal', function() {
				$(this).parent().append('');
			});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contact_form').slideUp("fast", function() {
					$(this).before('<p class="success">Thank you!<br/>Your email was sent successfully.<br/>I will contact you as soon as possible.</p>');
				});
			});
		}

		return false;

	});
				
				
});

/***************************************************
		TOOLTIPS
***************************************************/
/*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 * Version 1.3   -   Updated: Mar. 23, 2010
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

$(function(){
        $(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 5, defaultPosition: "top" });
        });
		
		
/***************************************************
		QUOVOLVER
***************************************************/

/*
 * jQuery Quovolver v1.0 - http://sandbox.sebnitu.com/jquery/quovolver
 * By Sebastian Nitu - Copyright 2009 - All rights reserved
 */

(function($) {
	$.fn.quovolver = function(speed, delay) {
		
		/* Sets default values */
		if (!speed) speed = 500;
		if (!delay) delay = 6000;
		
		// If "delay" is less than 4 times the "speed", it will break the effect 
		// If that's the case, make "delay" exactly 4 times "speed"
		var quaSpd = (speed*4);
		if (quaSpd > (delay)) delay = quaSpd;
		
		// Create the variables needed
		var	quote = $(this),
			firstQuo = $(this).filter(':first'),
			lastQuo = $(this).filter(':last'),
			wrapElem = '<div id="quote_wrap"></div>';
		
		// Wrap the quotes
		$(this).wrapAll(wrapElem);
		
		// Hide all the quotes, then show the first
		$(this).hide();
		$(firstQuo).show();
		
		// Set the hight of the wrapper
		$(this).parent().css({height: $(firstQuo).height()});		
		
		// Where the magic happens
		setInterval(function(){
			
			// Set required hight and element in variables for animation
			if($(lastQuo).is(':visible')) {
				var nextElem = $(firstQuo);
				var wrapHeight = $(nextElem).height();
			} else {
				var nextElem = $(quote).filter(':visible').next();
				var wrapHeight = $(nextElem).height();
			}
			
			// Fadeout the quote that is currently visible
			$(quote).filter(':visible').fadeOut(speed);
			
			// Set the wrapper to the hight of the next element, then fade that element in
			setTimeout(function() {
				$(quote).parent().animate({height: wrapHeight}, speed);
			}, speed);
			
			if($(lastQuo).is(':visible')) {
				setTimeout(function() {
					$(firstQuo).fadeIn(speed*2);
				}, speed*2);
				
			} else {
				setTimeout(function() {
					$(nextElem).fadeIn(speed);
				}, speed*2);
			}
			
		}, delay);
	
	};
})(jQuery);

 $(document).ready(function() {
$('blockquote').quovolver();
 });
         
 
/***************************************************
		DROP DOWN PANEL
***************************************************/

//Drop Down Panel script (March 29th, 08'): By JavaScript Kit: http://www.javascriptkit.com

var jkpanel={
	controltext: '',
	$mainpanel: null, contentdivheight: 0,

	openclose:function($, speed){
		this.$mainpanel.stop() //stop any animation
		if (this.$mainpanel.attr('openstate')=='closed')
			this.$mainpanel.animate({top: 0}, speed).attr({openstate: 'open'})
		else
			this.$mainpanel.animate({top: -this.contentdivheight+'px'}, speed).attr({openstate: 'closed'})
	},
	
	init:function(file, height, speed){
		jQuery(document).ready(function($){
			jkpanel.$mainpanel=$('<div id="dropdownpanel"><div class="contentdiv"></div><div class="control">'+jkpanel.controltext+'</div></div>').prependTo('body')
			var $contentdiv=jkpanel.$mainpanel.find('.contentdiv')
			var $controldiv=jkpanel.$mainpanel.find('.control').css({cursor: 'wait'})
			$contentdiv.load(file, '', function($){
					var heightattr=isNaN(parseInt(height))? 'auto' : parseInt(height)+'px'
					$contentdiv.css({height: heightattr})
					jkpanel.contentdivheight=parseInt($contentdiv.get(0).offsetHeight)
					jkpanel.$mainpanel.css({top:-jkpanel.contentdivheight+'px', visibility:'visible'}).attr('openstate', 'closed')
					$controldiv.css({cursor:'hand', cursor:'pointer'})
			})
			jkpanel.$mainpanel.find('.control').click(function(){jkpanel.openclose($, speed)});		
		})
	}
}

//Initialize script: jkpanel.init('path_to_content_file', 'height of content DIV in px', animation_duration)
//jkpanel.init('panelcontent.html', '330px', 500)
})


(jQuery);
