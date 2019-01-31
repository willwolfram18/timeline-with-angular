import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-timeline",
    templateUrl: "./timeline.component.html",
    styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit
{
    @Input()
    events: Date[] | null = null;

    @Input()
    endOfTimeline: Date | null = null;

    @Input()
    startOfTimeline: Date | null = null;

    ngOnInit() {
        if (!this.events) {
            throw new Error("No events.");
        }

        if (!this.endOfTimeline) {
            throw new Error("No end of timeline.");
        }

        if (!this.startOfTimeline) {
            throw new Error("No start of timeline.")
        }
    }

    computePosition(date: Date) {
        return `${((this.endOfTimeline.getTime() - date.getTime()) / this.timelineDuration) * 100}%`;
    }

    private get timelineDuration() {
        return this.endOfTimeline.getTime() - this.startOfTimeline.getTime();
    }
}
