const squareTypes = { blackSquare: 0, whiteSquare: 1 };
const pieceTypes = { empty: 0, blackPiece: 1, whitePiece: 2 };
Object.freeze(squareTypes);
Object.freeze(pieceTypes);

class CheckersGame {}
class CheckerBoard {
	constructor() {
		let board = {};
		for (let y = 0; y < 8; y++) {
			let array = {};
			for (let x = 0; x < 8; x++) {
				let square;
				if (x % 2 == 0) {
					square = CheckersSquare(squareTypes.whiteSquare, pieceTypes.empty);
				} else {
					square = CheckersSquare(squareTypes.blackSquare, pieceTypes.empty);

					if (y <= 2) {
						square = CheckersSquare(squareTypes.blackSquare, pieceTypes.whitePiece);
					} else if (y >= 5) {
						square = CheckersSquare(squareTypes.blackSquare, pieceTypes.blackPiece);
					}
				}
			}
			board.push({});
		}
	}
}

class CheckersSquare {
	constructor(squareType, pieceType) {
		this.squareType = squareType;
		this.pieceType = pieceType;
	}
}
