class Polygon {
    constructor(sides) {
        this._sides = sides;
    };

    get countSides() {
        return this._sides.length;
    };

    get perimeter() {
        return this._sides.reduce((total, current) => total + current, 0);
    };
};

class Triangle extends Polygon {
    get isValid() {
        const [a, b, c] = this._sides;
        if ( ((a + b) > c) && ((a + c) > b) && ((b + c) > a) ) {
            return true;
        };
        return false;
    };
};

class Square extends Polygon {
    get isValid() {
        const a = this._sides[0];
        for (const side of this._sides) {
            if (side !== a) {return false};
        };
        return true;
    };

    get area() {
        return this._sides[0] ** 2;
    };
};