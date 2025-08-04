function openButton(){
    document.getElementById ("header--navbar").style.width = "60%"
    document.getElementById ("open--Button").style.display = "none"
    document.getElementById ("close--Button").style.display = "block"
    document.getElementById ("close--Button").style.zIndex = "2"
    document.getElementById ("header--navbar--ul").style.width = "100%"
    
}

function closeButton(){
    document.getElementById ("header--navbar").style.width = "0%"
    document.getElementById ("open--Button").style.display = "block"
    document.getElementById ("close--Button").style.display = "none"
    document.getElementById ("close--Button").style.zIndex = "0"

} 