import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AustinOfficeOwners from './components/AustinOfcOwners/AustinOfcOwners';
import ContactForm from './components/ContactForm/ContactForm';

$(document).ready(function(){
    $("#worldclass").click(function () {
       //this is change select value 1
        $('.FormInputt').val('WorldClass').trigger('change');
    });
     $(".btn2").click(function () {
         //
         //this is change select value 1
         $('#dynamicChange').val('2').trigger('change');
    });
});