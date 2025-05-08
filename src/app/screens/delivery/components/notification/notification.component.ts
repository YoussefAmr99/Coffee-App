import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  note?: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.note = this.sharedService.getNote();
  }
}
