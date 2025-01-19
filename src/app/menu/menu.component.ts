import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../assets/material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  categories: any[] = [];
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  navigateToExercise(category: string): void {
    this.router.navigate(['/exercise', category]);
  }

}
