class Vector3 {
    _x: number;
    _y: number;
    _z: number;

    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get z(): number {
        return this._z;
    }

}

class Vector2 {
    _x: number;
    _y: number;
    
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

}