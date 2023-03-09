import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {

  video$: Array<any>;
  constructor(private videoService: ServicesService) {
    this.video$ = this.videoService.videoList.items.map(this.addRelativeTime);
  }

  addRelativeTime(video: any) {

    video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
    video.contentDetails.length = moment.duration(video.contentDetails.duration, "minutes").asHours();
    return video;
  }

}
