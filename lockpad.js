var circles=document.querySelectorAll(".circles");
var input=document.querySelector("input");
var st="";
var password="0909";
var c=0;
a=[]
for(var i=0;i<9;i++)
{
    a.push(circles[i]);
}
a.forEach(function(element){
    element.addEventListener("click", function(){
        input.classList.remove("login-error");
        if(st.length<4)
        {
            var s=element.textContent;
            console.log(s);
            st=st+s;
            input.value=st
            console.log(st);
        }
    });
});

circles[9].addEventListener("click", function(){
    st=st.substring(0,st.length-1);
    input.value=st;
});

circles[10].addEventListener("click", function(){
    input.classList.remove("login-error");
    if(st.length<4)
        {
            var n=0;
            var s=n.toString();
            st=st+s;
            input.value=st
        }
});

circles[11].addEventListener("click", function(){
    if(st.length==4 && st==password)
    {
            location.href="redirectpage.html";
    }
    else
    {
        input.classList.add("login-error");
        input.value=""
        st=""
    }
});
