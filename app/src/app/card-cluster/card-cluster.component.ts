import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cluster',
  templateUrl: './card-cluster.component.html',
  styleUrls: ['./card-cluster.component.scss']
})
export class CardClusterComponent implements OnInit {
  @Input() typeCluster !: string;
  @Input() numberOfCommand !: number;
  @Input() nameCluster !: string;
  @Input() idChef !: number;
  id !: string;

  ngOnInit(): void {
    this.id = this.idChef.toString();
  }
}


