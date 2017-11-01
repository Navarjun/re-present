
export class Cell {
    constructor (value) {
        this._raw = value
    }
    value (type) {
        switch (type) {
        case Cell.Type.String:
            return '' + this._raw
        case Cell.Type.Float:
            return +this._raw
        }
    }
}

Cell.Type = {
    String: 0,
    Float: 1
}
