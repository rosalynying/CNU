/**
 * Created by student on 2018/11/17.
 */

function Yuedu(){
        var caution = false
        function setCookie(name, value, expires, path, domain, secure) {
            var curCookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "")
            if (!caution || (name + "=" + escape(value)).length <= 4000) document.cookie = curCookie
            else if (confirm("Cookie exceeds 4KB and will be cut!")) document.cookie = curCookie
        }

        function getCookie(name) {
            var prefix = name + "="
            var cookieStartIndex = document.cookie.indexOf(prefix)
            if (cookieStartIndex == -1) return null
            var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
            if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length
            return (document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
        }

        function deleteCookie(name, path, domain) {
            if (getCookie(name)) {
                document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") +
                        "; expires=Thu, 01-Jan-70 00:00:01 GMT"
            }
        }

        function fixDate(date) {
            var base = new Date(0)
            var skew = base.getTime()
            if (skew > 0) date.setTime(date.getTime() - skew)
        }

        var now = new Date()
        fixDate(now)
        now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
        var visits = getCookie("counter")
        if (!visits) visits = 1
        else visits = parseInt(visits) + 1;
        setCookie("counter", visits, now)
       var s=document.getElementById("yuedu");
        s.value="阅读:"+visits;
//       s.innerHTML("阅读" + visits);

    }

 
function Guanzhu(){
    var index = true;
    my$("guanzhu").onclick = function () {
        if(index == true){
            index = false;
            my$("guanzhu").value = "取消关注";
        }
        else {
            index = true;
            my$("guanzhu").value = "+ 关注";
        }
    }
}

function Shoucang(){
    var index = true;
    my$("shoucang").onclick = function(){
        if(index == true){
            index = false;
            my$("shoucang").className= "shoucang1";
        }
        else{
            index = true;
            my$("shoucang").className = "shoucang";
        }
    }
}

function Huifu(){
    var icon_text = my$("icon_text");
    var liuy_one = my$("liuy_one");
    var liuyan = my$("liuyan");
    my$("icon_pinglun").onclick = function(e){
        var oev = e || window.event;
        if (icon_text.value == "" || icon_text.value.length == 0){
            return;
        }else{
            var div1 = document.createElement("div");
            div1.className = "hua1";
            div1.style.width = "100%";
            div1.style.height= "100px";
            div1.style.margin = "40px auto";
            div1.style.borderBottom = "1px dashed darkgrey";
            div1.style.width = "100%";
            div1.style. padding = "20px";
            div1.style. position = "relative";
            liuyan.appendChild(div1);
            var img = document.createElement("img");
            img.src = "../images/15.jpg";
            img.style. width = "50px";
            img.style. height = "50px";
            img.style. borderRadius = "5px";
            img.style. position = "absolute";
            img.style. left = "10%";
            img.style. top = "15%";
            div1.appendChild(img);
            var a = document.createElement("a");
            a.style.cssText = "  color: #94B5AE;font-size: 14px;font-family: inherit;font-weight: 500;position: absolute;left: 26%;top: 20%;";
            a.innerText = "小胸许";
            div1.appendChild(a);
            var span1 = document.createElement("span");
            span1.style.cssText = " display: inline-block;font-size: 14px;font-family: inherit;font-weight: 500;position: absolute;left:26%;top: 44%;";
            span1.innerText = icon_text.value;
            icon_text.value = "";
            div1.appendChild(span1);
            div1.appendChild(img);
            var input  = document.createElement("input");
            input .style.cssText = "display: inline-block;border: hidden;position: absolute;left: 70%;top: 20%;background-color: white;height: 20px;line-height: 18px;padding: 0 0 0 20px;margin: 0 5px;color: #ccc;";
            input.value = "回复";
            input.type = "button";
            div1.appendChild(input );
        }

    }
}

function Show(){
    var picture = document.getElementsByClassName("picture");
        var img = document.getElementsByClassName("img");
        var container = my$("container");
        var lengthpic = picture.length;
        function hiddenandShow() {
                for (var i = 0; i < picture.length; i++) {
                    for (var j = 0; j < img.length; j++) {
                        img[i].onclick = function () {
                            index = false;
                            var div11 = document.createElement("div");
                            div11.className = "bigbac";
                            var img11 = document.createElement("img");
                            img11.src =  this.src;
                            img11.className = "bigimg";
                            div11.appendChild(img11);
                            document.querySelector("body").appendChild(div11);
                            document.querySelector(".bigbac").onclick = function(){
                                document.querySelector("body").removeChild(this);

                        }
                    }
                }
            }
            }
        hiddenandShow();
}


/*window.onresize=function () {
    var pic=document.getElementsByClassName("bigbac");
        bannerWidth=banner.offsetWidth
        pic.style.width=bannerWidth*count+"px"
        pic.style.left=-bannerWidth*index+"px"
    }
    var startX=0
    var moveX=0
    var distanceX=0;
    var pic=document.getElementsByClassName("bigbac");
    //用来控制拖动节奏
    var isEnd = true;
//    移动端的touch事件,拖动事件
    addEventListener(pic,"touchstart",function (e) {
        clearInterval(timerId)
        var touch=e.targetTouches[0]
        startX=touch.clientX
    })
    addEventListener(pic,"touchmove",function (e) {
        if(isEnd == true) {
            var touch = e.targetTouches[0]
            moveX = touch.clientX
            distanceX = moveX - startX
            pic.style.transition = "none"
            pic.style.left = -index * bannerWidth + distanceX + "px"
        }
    })
    addEventListener(pic,"touchend",function (e) {
        isEnd = false;
        if(Math.abs(distanceX)>100){
            if(distanceX>0){
                index--;
                pic.style.transition="all 0.5s"
                pic.style.left=-index*bannerWidth+"px"

            }
            else{
                index++
                pic.style.transition="all 0.5s"
                pic.style.left=-index*bannerWidth+"px"
            }
        }
        else{
            pic.style.transition="all 0.5s"
            pic.style.left=-index*bannerWidth+"px"
        }
        //拖动结束后重置
        startX = 0;
        moveX = 0;
        distanceX = 0;
    })*/



window.onload=function(){
    Yuedu();
    Guanzhu();
    Shoucang();
    Huifu();
    Show();
}