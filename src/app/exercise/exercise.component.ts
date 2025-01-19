import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../assets/material/material.module';
import { ExerciseService } from './exercise.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  imports: [CommonModule, MaterialModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent implements OnInit {
  word: string = '';

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.exerciseService.getWord(category).subscribe((data: any) => {
          this.word = data.word; // Assuming the API returns an object with a 'word' property
        });
      }
    });
  }
}
