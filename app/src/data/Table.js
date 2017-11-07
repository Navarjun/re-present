import {Cell} from './Cell'

export class Table {
    constructor (colNames, rows) {
        this.colNames = colNames
        this.id = 'index'
        this.rows = []
        this.types = {}
        colNames.forEach(d => {
            this.types[d] = Cell.Type.String
        })

        for (var i in rows) {
            var row = rows[i]
            var rowObj = {}
            this.colNames.forEach((d, i) => {
                rowObj[d] = new Cell(row[i])
            })
        }
    }

    get (row, col) {
        if (col && row !== 0 && !row) {
            return this.getCol(col)
        } else if (row && !col) {
            return this.getRow(row)
        } else if ((row === 0 || row) && col) {
            return this.getRow(row)[col]
        }
    }

    getCol (col) {
        this.rows.map((d, i) => {
            var obj = {}
            if (this.id === 'index') {
                obj.index = i
            } else {
                obj[this.id] = d[this.id].value(this.types[this.id])
            }
            obj[col] = d[col].value(this.types[col])
            return obj
        })
    }

    getRow (row) {
        var rowObj = this.rows[row]
        for (var key in Object.keys(rowObj)) {
            rowObj[key] = rowObj[key].value(this.types[key])
        }
        return rowObj
    }
}
