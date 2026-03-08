
    ///leaf section
    var wid = document.getElementById("wid");

    ///scedule section
    var inn = document.getElementById("inn");
    var ol = document.getElementById("ol");

    ///mirror section
     var mi=document.getElementById("mi")
     var mii=document.getElementById("mii")
    function big() {
      wid.setAttribute("class", "widx");
    }

    ///arithmetic section
     var one=document.getElementById("one")
     var two=document.getElementById("two")
     var res=document.getElementById("result")

     ///name secetion
     var ni=document.getElementById("ni")
     var re=document.getElementById("re")
    function to() {
      var lst = document.createElement("li");
      lst.innerHTML=inn.value + "<button onclick='too(event)'>delete</button>";
      ol.append(lst);
    }
    ///random number section
    var ra=document.getElementById("ra")
    var crt=document.getElementById("crt")
    var ranres=document.getElementById("ranres")
    var chk=Math.floor(Math.random()*10)+1
    var sc=10
    function too() 
    {
      event.target.parentElement.remove();
    }
    function me()
    {
      var result=mi.value
      mii.textContent=result
    }
    function ch()
    {
      var onee=Number(one.value)
      var twoo=Number(two.value)
      var resu=onee+twoo
      result.textContent=resu
    }
    function nam()
    {
      var nii=document.createElement("h3")
      nii.textContent=ni.value
     re.append(nii)
      
    }
    function bb()
    {
       var random=chk
       if(re==random)
       {
         crt.textContent="right"
        alert("u won 100k...!!!")
       }
       else
       {
        sc=sc-1
        crt.textContent="wrong"
        ranres.textContent="score :" +sc
       }
    }