import { Component, OnInit } from '@angular/core';
// import {callJSFun} from '../../assets/main.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void {
    // callJSFun();
    /**
     * Easy selector helper function
     */
    const select = (el: string) => {''
      el = el.trim()
      return document.querySelector(el)
    }

    /**
     * Scrolls to an element with header offset
     */
    // const scrollto = (el: string) => {
    //   let header: any = select('#header');
    //   let offset = header?.offsetHeight;

    //   let elementPos: any = select(el)
    //   window.scrollTo({
    //     top: elementPos.offsetTop - offset,
    //     behavior: 'smooth'
    //   })
    // }


    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    const selectHeader = select('#header');
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader?.classList.add('header-scrolled')
      } else {
        selectHeader?.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);

    /**
     * Mobile nav toggle
     */
    let selectMobileNavT = document.querySelector('.mobile-nav-toggle');
    let selectNavbar = document.querySelector('#navbar');
    selectMobileNavT?.addEventListener('click', (e) => {
      selectNavbar?.classList.toggle('navbar-mobile');
      selectMobileNavT?.classList.toggle('bi-list');
      selectMobileNavT?.classList.toggle('bi-x');
    })

    /**
     * Mobile nav dropdowns activate
     */
    // let selectNavbarDropdown: any = document.querySelectorAll('.navbar .dropdown > a');
    // selectNavbarDropdown?.forEach(e => e.addEventListener('click', function (e) {
    //   if (selectNavbar?.classList.contains('navbar-mobile')) {
    //     e.preventDefault();
    //     selectNavbarDropdown.nextElementSibling.classList.toggle('dropdown-active');
    //   }
    // }));

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    let selectScrollto = document.querySelector('.scrollto');
    selectScrollto?.addEventListener('click', (e) => {
      console.log(selectScrollto);
    //   if (selectScrollto?.hash) {
    //     e.preventDefault();

    //     let navbar = select('#navbar')
    //     if (navbar?.classList.contains('navbar-mobile')) {
    //       navbar.classList.remove('navbar-mobile');
    //       selectMobileNavT?.classList.toggle('bi-list');
    //       selectMobileNavT?.classList.toggle('bi-x');
    //     }
    //     scrollto(selectScrollto.hash);
    //   }
    })

  }
}
