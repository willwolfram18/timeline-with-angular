import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent
{
    private readonly numEvents = 15;

    readonly events: TimelineEvent[] = [];
    readonly today = new Date();
    readonly yesterday = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate() - 1
    );

    constructor() {
        for (let i = 0; i < this.numEvents; i++) {
            this.events.push({
                key: i,
                description: `Description ${i}`,
                title: `Title ${i}`,
                timestamp: this.randomDate(
                    this.yesterday,
                    this.today
                )
            });
        }
        this.events.sort((e1, e2) => e2.timestamp.getTime() - e1.timestamp.getTime());
    }

    randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}

interface TimelineEvent {
    key: number;
    timestamp: Date;
    title: string;
    description: string;
}
