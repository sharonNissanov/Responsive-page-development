"use strict";
var opened_footer_rows = {row1Opened: false,row2Opened: false,row3Opened: false};
var is_list_open = {sdarot: true , kamuti: true};

function showFooterLinks(id){
    var listID =document.getElementById(id);
    if( id == "the-company"){
        opened_footer_rows.row1Opened ?  document.getElementById("plus_button1").innerHTML=("+") : document.getElementById("plus_button1").innerHTML=("-");
        opened_footer_rows.row1Opened = !opened_footer_rows.row1Opened;
    }
    if( id == "help"){
        opened_footer_rows.row2Opened ?  document.getElementById("plus_button2").innerHTML=("+") : document.getElementById("plus_button2").innerHTML=("-");
        opened_footer_rows.row2Opened = !opened_footer_rows.row2Opened;
    }
    if( id == "collaborations"){
        opened_footer_rows.row3Opened ?  document.getElementById("plus_button3").innerHTML=("+") : document.getElementById("plus_button3").innerHTML=("-");
        opened_footer_rows.row3Opened = !opened_footer_rows.row3Opened;
    }
    if(listID.style.display == "inline")
        listID.style.display= "none";
    else
        listID.style.display = "inline";
}

function open_close_tests_list(list_name){
    var listID =document.getElementById(list_name);
    if( list_name == "sdarot_list"){
        is_list_open.sdarot ? document.getElementById("open_icon_sdarot").className = "fa fa-chevron-down fa-1x" : document.getElementById("open_icon_sdarot").className = "fa fa-chevron-left fa-1x"  ;
         is_list_open.sdarot = !is_list_open.sdarot;
    }
    if( list_name == "kamuti_list"){
        is_list_open.kamuti ? document.getElementById("open_icon_kamuti").className = "fa fa-chevron-down fa-1x" : document.getElementById("open_icon_kamuti").className = "fa fa-chevron-left fa-1x"  ;
         is_list_open.kamuti = !is_list_open.kamuti;
    }

    if(listID.style.display == "block")
        listID.style.display= "none";
    else
        listID.style.display = "block";
}

function show_grades(grades_list){
    var listID =document.getElementById(grades_list);

     if(listID.style.display == "block")
        listID.style.display= "none";
    else
        listID.style.display = "block";
    
    
} 