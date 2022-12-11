import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-cluster',
  templateUrl: './card-cluster.component.html',
  styleUrls: ['./card-cluster.component.scss']
})
export class CardClusterComponent {
  @Input() typeCluster !: string;
  @Input() numberOfCommand !: number;
}


