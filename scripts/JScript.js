

//querySt For Get value of Menu in new Page
// such as  products.aspx?IdMenu=3" :  ji = 3
function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i = 0; i < gy.length; i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}
// *****************************************************************************************
//For HyperLink Change Language to Thai 
function ChangToThai() 
{
    var pathLang = window.location.href;

    window.location = pathLang.replace("/en/", "/th/");
}
function ChangToEng() {
    var pathLang = window.location.href;

    window.location = pathLang.replace("/th/", "/en/");
}
// *****************************************************************************************
// showMenu : For control menu


function showMenu(id, obj, classname) {

          if ((id == '1')||(id == '2')||(id == '7')) {
              
               document.getElementById("Sub").style.display = 'none'; 
               document.getElementById("Blank").style.display = 'block';
           } else if ((id == '3') || (id == '4') || (id == '5') || (id == '6')) {
                
              document.getElementById("Sub").style.display = 'block';
              document.getElementById("Blank").style.display = 'none';
           }
    var j = 1;
    for (j = 1; j < 7; j++) {
        document.getElementById("Menu" + j).className = "";
    }

    for (j = 1; j < 7; j++) {
        if ((j == id) && (id != '1')&&(id != '2')) {
            obj.className = classname;
            if (document.getElementById("subMenu" + id) != null) {
                document.getElementById("subMenu" + id).style.display = 'block';
//                document.getElementById("Sub").style.display = 'block';
            }
        }
        else {
            if (document.getElementById("subMenu" + j) != null) {
                document.getElementById("subMenu" + j).style.display = 'none';
//                document.getElementById("Sub").style.display = 'block';
            }
        }
    }
}
// *****************************************************************************************
/* setStock : for Swap body of SET and Stock Quote*/
// id is value of BODY{1,2} 1 is SET Body and 2 is STOCK Body.
function setStock(id) {

    if (id == '1') {   //TAB SET
         
        document.getElementById("setTab1").style.display = 'block'; //orenge Active
        document.getElementById("setTab2").style.display = 'none'; //blue
        //TAB Stock
        document.getElementById("stockTab1").style.display = 'block'; //blue
        document.getElementById("stockTab2").style.display = 'none'; //orenge Active
        // SET AND STOCK BODY
        document.getElementById("set1").style.display = 'block'; //set body
        document.getElementById("Stock2").style.display = 'none'; //stock body

    }
    else {
        
        //TAB SET
        document.getElementById("setTab1").style.display = 'none'; //orenge Active
        document.getElementById("setTab2").style.display = 'block'; //blue
        //TAB Stock
        document.getElementById("stockTab1").style.display = 'none'; //blue
        document.getElementById("stockTab2").style.display = 'block'; //orenge Active

        document.getElementById("set1").style.display = 'none'; //set body
        document.getElementById("Stock2").style.display = 'block'; //stock body
    }
}

// *****************************************************************************************

