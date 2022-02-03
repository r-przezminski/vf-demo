import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graphic-field-structure',
  templateUrl: './graphic-field-structure.component.html',
  styleUrls: ['./graphic-field-structure.component.scss']
})
export class GraphicFieldStructureComponent implements OnInit {
  @Input() legend: { name: string, color: string }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
