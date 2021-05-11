import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  newGame() {
    this.squares = Array(3).fill(null).map(() => new Array(3).fill(null).map(() => null));
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(row: number, col: number) {
    if (!this.squares[row][col] && !this.winner) {
      this.squares[row][col] = this.player;
      this.xIsNext = !this.xIsNext;
    }
    this.checkWinnder();
  }

  checkWinnder() {
    let rows = this.squares;
    let cols = [];
    let diags = [];
    for (let i = 0; i < 3; i++) {
      cols.push(rows.map(row => row[i]));
    }
    diags.push(new Array(rows[0][0],rows[1][1],rows[2][2]));
    diags.push(new Array(rows[0][2],rows[1][1],rows[2][0]));
    let lines = [].concat(rows,cols,diags);
    for (let i = 0; i < lines.length; i++) {
      if (new Set(lines[i]).size == 1 && [...new Set(lines[i])][0] != null) {
        this.winner = lines[i][0];
      }
    }
  }

  ngOnInit(): void {
    
  }

}
