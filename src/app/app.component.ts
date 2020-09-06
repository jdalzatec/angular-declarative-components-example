import { Component } from "@angular/core";
import Players from "./players";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "2020 Most paid players";
  players: Player[] = [];

  ngOnInit() {
    this.players = this.getPlayers();
  }

  getPlayers = (): Player[] => {
    return Players;
  };
}
interface Player {
  name: string;
  age: number;
  photo: string;
  sport: string;
  salary: number;
}
