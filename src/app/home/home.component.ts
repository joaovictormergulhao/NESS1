import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
    $(document).ready(function (){
      $("#carrossel img:eq(0)").addClass("banner-ativo").show()
  
    })
  
    setInterval(slide, 2000);
  
    function slide(){
      if($(".banner-ativo").next().length){
          $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
      }else{
          $(".banner-ativo").removeClass().hide()
          $("#carrossel img:eq(0)").addClass("banner-ativo").show()
      }
    } 
  }

}
