function myYanlıs(){
    var e=document.getElementById("input").value;
    var say=e.length;
    if(say<1){
        document.getElementById("dogru").classList.add('hidden')
        document.getElementById("yanlıs").classList.remove('hidden')
    }
    else{
        document.getElementById("yanlıs").classList.add('hidden')
        document.getElementById("dogru").classList.remove('hidden')
     
}}

   
       
     

       
     

