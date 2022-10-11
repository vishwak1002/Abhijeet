function expandFunction(id1,id2) {

    var T = document.getElementById(id1);
    var S=document.getElementById(id2)
    if (T.style.display === "block"){
        T.style.display = "none";
       
    }
    else {
        T.style.display = "block";
    }
    S.style.display="none";
}