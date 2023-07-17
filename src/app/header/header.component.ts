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
     * Navbar links active state on scroll
     */
    let navbarlinks: any = document.querySelectorAll('#navbar .scrollto');
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section: any = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    document.addEventListener('scroll', navbarlinksActive);

    /**
     * Close the navbar mobile
    */
    navbarlinks.forEach(selectEl => selectEl.addEventListener('click', () => {
      if (select(selectEl.hash)) {
        let navbar: any = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle: any = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
      }
    }));

  }
}
