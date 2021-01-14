import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navLinks: boolean;
  constructor() {
    this.navLinks  = false;
  }

  ngOnInit(): void {
    this.toogleHamburger();
  }

  toogleHamburger(): void{
    const navbarItems = document.querySelectorAll('.navbar-nav>li');
    navbarItems.forEach(navbarItem => {
      navbarItem.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar != null) {navbar.classList.remove('show'); }
      });
    });
  }

}
