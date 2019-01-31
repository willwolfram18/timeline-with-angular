import { Component } from "@angular/core";

@Component({
    selector: "app-timeline",
    templateUrl: "./timeline.component.html",
    styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent
{
    private readonly numEvents = 15;

    readonly events: Date[] = [];
    readonly today = new Date();
    readonly yesterday = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate() - 1
    );

    constructor() {
        for (let i = 0; i < this.numEvents; i++) {
            this.events.push(
                this.randomDate(
                    this.yesterday,
                    this.today
                )
            );
        }
    }

    private get timelineDuration() {
        return this.today.getTime() - this.yesterday.getTime();
    }

    randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    computePosition(date: Date) {
        return `${((this.today.getTime() - date.getTime()) / this.timelineDuration) * 100}%`;
    }
}
