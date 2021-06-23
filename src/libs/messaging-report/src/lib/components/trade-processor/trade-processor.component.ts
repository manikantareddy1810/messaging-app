import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-processor',
  templateUrl: './trade-processor.component.html',
  styleUrls: ['./trade-processor.component.css']
})
export class TradeProcessorComponent implements OnInit {

  void onMessage(Message msg) {
		// Write code here
	}

  constructor() { }

  ngOnInit(): void {
  }

}
