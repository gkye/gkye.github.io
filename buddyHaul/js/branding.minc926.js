!function(e,t,n){function s(){d=e(selectors.newsletterButton),g=e(selectors.email),v=e(selectors.newsletterHeader),y=e(selectors.newsletterSubtitle),b=e(selectors.newsletterInputContainer),k=e(selectors.newsletterNotYou),S=e(selectors.newsletterErrors),T=e(selectors.newsletterSuccess)}function r(){d.on("click",u),g.on("keydown",function(e){var t=e.which;13==t&&(e.preventDefault(),u())}),k.on("click",p),k.hover(function(){e(this).css("cursor","pointer")})}function o(e,t,n){if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3);var r="; expires="+s.toString()}else var r="";document.cookie=e+"="+t+r+"; path=/"}function l(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var r=n[s];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null}function i(e){o(e,"",-1)}function a(e){var t=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return!!t.test(e)}function c(){var e=l("newsletterEmail");e?m(e):p()}function u(){var e=g.val(),t=a(e);t?w(e):h()}function w(e){f(e)}function h(){S.html("&#8618; Please enter a valid email address.")}function f(n){e.ajax({type:"POST",url:"/api/newsletter",dataType:"json",data:{email:n,url:t.location.pathname}}).done(function(e){e.success?(o("newsletterEmail",n),m(n),S.html(""),T.show().html("Sweet!")):S.html('<p>&#8618; Whoops! Looks like something went wrong. Try again or <a href="/contact" style="display:inline-block;">contact us</a> to sign up!</p>')}).fail(function(e){S.html('<p>&#8618; Whoops! Looks like something went wrong. Try again or <a href="/contact" style="display:inline-block;">contact us</a> to sign up!</p>')})}function p(){i("newsletterEmail"),k.hide(),T.hide(),y.html("Sign up for our monthly&nbsp;newsletter, the&nbsp;Data&nbsp;Digest!"),b.show()}function m(e){b.hide(),k.show(),y.html("You're signed up with email "+e+".")}var d,g,v,y,b,k,S,T;selectors={newsletterButton:".newsletter-submit",email:".newsletter-input",newsletterHeader:".newsletter-header",newsletterSubtitle:".newsletter-sub",newsletterInputContainer:".newsletter-input-container",newsletterNotYou:".newsletter-not-you",newsletterErrors:".newsletter-errors",newsletterSuccess:".newsletter-success"},s(),r(),c()}(jQuery,window);
!function(i,a,e){var n,o,t="navOpen";o=i(".sr-nav"),n=i(".menuContainer").click(function(i){o.toggleClass(t)});var r,c="subNavOpen";r=i(".withSubNav");var s=i(".howWorksLink");s.click(function(i){r.toggleClass(c),o.hasClass(t)&&i.preventDefault()}),function(i){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4))}(navigator.userAgent||navigator.vendor||a.opera);var m={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},iPad:function(){return navigator.userAgent.match(/iPad/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return m.Android()||m.BlackBerry()||m.iOS()||m.Opera()||m.Windows()}};a.branding=a.branding||{},a.branding.isMobile=m}(jQuery,window);
!function(t,n,a){function e(){s=t(c.linksButtonsAndImgs)}function i(){s.on("mouseup",r)}function o(n,a){return t(n).parents().filter(function(){return t(this).data(a)}).eq(0).data(a)}function r(a){var e=t(this),i=e.parent(),r=n.location.pathname,s=e.text(),c=t(a.target).data(),l=c.tracking||o(e,"tracking")||"no tag found",p=c.trackingDetail||o(e,"trackingDetail")||"no tag found",g={category:r,action:"General Click Event",label:s,tracking:l,trackingDetail:p,element:{classList:e.prop("classList"),tag:e.prop("tagName"),text:s,offsetTop:e.offset().top},page:{path:r,title:document.title},parent:{classList:i.prop("classList"),tag:i.prop("tagName")}};analytics.track("General Click Event",g)}var s,c={linksButtonsAndImgs:'a, .btn, input[type="button"], img'};e(),i()}(jQuery,window);
!function(r,e,o){function a(){c=r(p.contactFormSection),d=c.find(p.contactForm),u=d.find(p.submitButton),f=c.find(p.successArea),h=d.find(p.name),E=d.find(p.email),v=f.find(p.yourName),w={nameError:d.find(p.errors.nameError),emailError:d.find(p.errors.emailError)}}function n(){f.hide(),u.on("click",i),E.on("keydown",function(r){var e=r.which;13==e&&(r.preventDefault(),i())}),w.nameError.hide(),w.emailError.hide()}function i(){a();var e=s();e&&(r("body").find("*").css("cursor","progress"),u.html("...sending"),l())}function t(r){var e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return!!e.test(r)}function m(){w.nameError.html(""),w.emailError.html(""),h.removeClass("formfield-error"),E.removeClass("formfield-error"),w.nameError.hide(),w.emailError.hide()}function s(){m();var r=h.val(),e=E.val(),o=t(e);return r||(h.addClass("formfield-error"),w.nameError.show().html("&#8618; Please enter your name.")),o||(E.addClass("formfield-error"),w.emailError.show().html("&#8618; Please enter a valid email.")),!(!r||!o)}function l(){var o=e.location.pathname,a=d.serialize()+"&url="+o,n=h.val().split(" ")[0];r.ajax({type:"POST",url:"/api/simple-contact",data:a}).done(function(e){r("body").find("*").css("cursor","default"),e.success&&(v.html(n),f.show(),u.html("Request sent!").attr("disabled","disabled").off("click"))})}var c,d,u,f,h,E,v,w={},p={contactFormSection:".simpleContact",contactForm:".form-contact",submitButton:".submit-form",successArea:".success-area",name:'input[name="name"]',email:'input[name="email"]',yourName:".your-name",errors:{nameError:".name-error",emailError:".email-error"}};a(),n()}(jQuery,window);
!function(e,o,n){function t(){function o(){s=e(f.blurContainer),c=s.contents(),l=e(f.videoContainer),u=e(f.videoClose),p=e(f.videoOpen),h=e("."+f.videoTag),b=e(f.videoHtml)}function n(){l.hide(),"ontouchstart"in document.documentElement||(document.documentElement.className+=" no-touch"),p.on("click",r),u.on("click",d)}function t(){l.hide(),s.removeClass("blur")}function i(){l.show(),s.addClass("blur")}function d(e){v(),t()}function a(){return'<video id="takeover-video" class="video-js vjs-big-play-centered vjs-full-window takeover-video" controls preload="auto" data-setup=\'{}\'><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>'}function r(o){b.html(a());var n=e(this).data("videoSrc"),t=e(this).data("videoType");m=e(videojs(f.videoTag,{type:t,src:n}))[0],m.src({type:t,src:n}),m.load(),m.ready(function(){m.on("ended",d),document.querySelector("video").controls||i(),m.play()})}function v(){m.currentTime(0).pause(),m.dispose()}var s,c,l,u,p,m,h,b,f={blurContainer:".blur-div",videoContainer:".takeover",videoClose:".takeover-close",videoOpen:".takeover-open",videoTag:"takeover-video",videoHtml:".video-html"};o(),n()}o.branding=o.branding||{},o.branding.videoTakeover=new t}(jQuery,window);
!function(r,e,o){function s(){u=r(w.contactFormSection),c=r(w.contactForm),d=c.find(".submit-form"),f=r(w.successArea),E=r(w.name),h=c.find(w.email),p=r(w.userType),y=r(w.userInterest),v=r(w.yourName),T={nameError:r(w.errors.nameError),emailError:r(w.errors.emailError),userTypeError:r(w.errors.userTypeError),userInterestError:r(w.errors.userInterestError)}}function t(){f.hide(),d.on("click",a),T.nameError.hide(),T.emailError.hide(),T.userTypeError.hide(),T.userInterestError.hide()}function a(){s();var e=l();e?(r("body").find("*").css("cursor","progress"),i()):r("html, body").animate({scrollTop:u.offset().top},50)}function n(r){var e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return!!e.test(r)}function m(){T.nameError.html(""),T.emailError.html(""),T.userTypeError.html(""),T.userInterestError.html(""),E.removeClass("formfield-error"),h.removeClass("formfield-error"),p.removeClass("formfield-error"),y.removeClass("formfield-error"),T.nameError.hide(),T.emailError.hide(),T.userTypeError.hide(),T.userInterestError.hide()}function l(){m();var r=E.val(),e=h.val(),o=p.val(),s=y.val(),t=n(e);return r||(E.addClass("formfield-error"),T.nameError.show().html("&#8618; Please enter your name.")),t||(h.addClass("formfield-error"),T.emailError.show().html("&#8618; Please enter a valid email.")),o||(p.addClass("formfield-error"),T.userTypeError.show(),T.userTypeError.html("&#8618; Please select from the dropdown.")),s||(y.addClass("formfield-error"),T.userInterestError.show(),T.userInterestError.html("&#8618; Please select your interest.")),!!(r&&t&&o&&s)}function i(){var e=c.serialize(),o=E.val().split(" ")[0];r.ajax({type:"POST",url:"/api/contact",data:e}).done(function(e){r("body").find("*").css("cursor","default"),e.success&&(c.trigger("reset"),c.hide(),v.html(o),f.show(),r("html, body").animate({scrollTop:u.offset().top},50))})}var u,c,d,f,E,h,p,y,v,T={},w={contactFormSection:".contactFormSection",contactForm:".form-contact",successArea:".success-area",name:'input[name="name"]',email:'input[name="email"]',userType:'select[name="userType"]',userInterest:'select[name="userInterest"]',yourName:".your-name",errors:{nameError:".name-error",emailError:".email-error",userTypeError:".userType-error",userInterestError:".userInterest-error"}};s(),t()}(jQuery,window);
!function(n,i,o){function t(){d=n(C.input).find("input"),h=n(C.submit),l=n(C.error),m=n(C.whatDomain),g=n(C.signinContainer),w=n(C.domainInfoContainer),p=n(C.gotIt)}function c(){w.hide(),h.on("click",u),p.on("click",a),m.on("click",r),d.on("keydown",function(n){var i=n.which;13==i&&(n.preventDefault(),u())})}function r(){g.hide(),w.show()}function a(){g.show(),w.hide()}function u(){h.html("Checking..."),n("body").find("*").css("cursor","url(/img/spinwait.gif), progress");var i=d.val();i?s(i):e(),h.html("Continue &#10142;"),n("body").find("*").css("cursor","default")}function e(){d.addClass("formfield-error"),d.focus(),l.show().html("&#8618; Whoops! I don't recognize that domain!")}function s(i){n.ajax({url:"/api/client-check",data:{client:i}}).success(function(n){f(i)}).fail(function(n){e()})}function f(n){i.location="https://"+n+".schoolrunner.org/login"}var d,h,l,m,g,w,p,C={input:".domain-input",submit:".submit-signin",error:".domain-error",whatDomain:".what-domain",signinContainer:".signin-content",domainInfoContainer:".domain-info",gotIt:".got-it"};t(),c()}(jQuery,window);
//# sourceMappingURL=branding.min.js.map