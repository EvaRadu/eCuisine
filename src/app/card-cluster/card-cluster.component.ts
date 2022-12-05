import {Component, Input} from '@angular/core';
import {Task} from "../tasks";

@Component({
  selector: 'app-card-cluster',
  templateUrl: './card-cluster.component.html',
  styleUrls: ['./card-cluster.component.scss']
})
export class CardClusterComponent {
  @Input() typeCluster !: string;
  @Input() numberOfCommand !: number;
}
