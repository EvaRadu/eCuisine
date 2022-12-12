import {Component, Input} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


/**
 * @title Configurable progress-bar
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['progress-bar.component.scss'],
})
export class ProgressBarComponent {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'buffer';
  @Input() value !: number;
  @Input() percent !: number;
  bufferValue = 100;
}