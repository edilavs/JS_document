var element=document.getElementsByClassName('btn');
element.onclick=function()
{
    check=true;
    var lb=document.getElementById('leftbar')
    if(check){
        lb.style.left=0;
        lb.position="relative";
   
        check=false
    }
    else{
        lb.style.left="-100px";
        lb.style.position="absolute"; 
      
        check=true;
    }
}