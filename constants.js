export const MODE_SELECTING_AREA = 'MODE_SELECTING_AREA';       // Mode where user selects areas for renovation
export const MODE_HACKING_DOOR = 'MODE_HACKING_DOOR';           // Mode where user selects door to hack
export const MODE_FINISHING_FLOOR = 'MODE_FINISHING_FLOOR';     // Mode where user working on floor finishes
export const MODE_HOLDING_ITEM = 'MODE_HOLDING_ITEM';           // Mode where user chose furniture from catalog and holding that before actually placing on the area
export const MODE_DROPPING_ITEM = 'MODE_DROPPING_ITEM';         // Mode where user dropped chosen furniture on the area
export const MODE_TRANSFORMING_ITEM = 'MODE_TRANSFORMING_ITEM'; // Mode where user can transform (drag, rotate, resize) furniture item

export const HACKING_OPTIONS = [
    {
        name: 'Yes',
        selected: true
    },
    {
        name: 'No',
        selected: false
    }
]

export const FLOOR_FINISHES_OPTIONS = [
    {
        name: 'Tiles',
        selected: true,
        source: '@assets/images/tile.jpeg'
    },
    {
        name: 'Vinyl',
        selected: false,
        source: '@assets/images/vinyl.jpg'
    },
    {
        name: 'Parquet',
        selected: false,
        source: '@assets/images/parquet.jpeg'
    },
    {
        name: 'Grass',
        selected: false,
        source: '@assets/images/grass.jpg'
    }
]