
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Positronretina_0": {
            "type": "raster",
            "tiles": ["http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"],
            "tileSize": 256
        },
        "nynta2020_22anynta2020_1": {
            "type": "geojson",
            "data": json_nynta2020_22anynta2020_1
        }
                    ,
        "OffStreetParkingOff_Street_Parking_2": {
            "type": "geojson",
            "data": json_OffStreetParkingOff_Street_Parking_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Positronretina_0_0",
            "type": "raster",
            "source": "Positronretina_0"
        },
        {
            "id": "lyr_nynta2020_22anynta2020_1_0",
            "type": "line",
            "source": "nynta2020_22anynta2020_1",
            "layout": {},
            "paint": {'line-width': 0.7142857142857143, 'line-opacity': 1.0, 'line-color': '#020101'}
        }
,
        {
            "id": "lyr_OffStreetParkingOff_Street_Parking_2_0",
            "type": "circle",
            "source": "OffStreetParkingOff_Street_Parking_2",
            "layout": {},
            "paint": {'circle-radius': ['case', ['all', ['>=', ['get', 'Capacity'], 6.0], ['<=', ['get', 'Capacity'], 163.0]], ['/', 7.142857142857142, 2], ['all', ['>', ['get', 'Capacity'], 163.0], ['<=', ['get', 'Capacity'], 460.0]], ['/', 7.142857142857142, 2], ['all', ['>', ['get', 'Capacity'], 460.0], ['<=', ['get', 'Capacity'], 1144.0]], ['/', 7.142857142857142, 2], ['all', ['>', ['get', 'Capacity'], 1144.0], ['<=', ['get', 'Capacity'], 3739.0]], ['/', 7.142857142857142, 2], ['all', ['>', ['get', 'Capacity'], 3739.0], ['<=', ['get', 'Capacity'], 6640.0]], ['/', 7.142857142857142, 2], 0], 'circle-color': ['case', ['all', ['>=', ['get', 'Capacity'], 6.0], ['<=', ['get', 'Capacity'], 163.0]], '#f0f9e8', ['all', ['>', ['get', 'Capacity'], 163.0], ['<=', ['get', 'Capacity'], 460.0]], '#bae4bc', ['all', ['>', ['get', 'Capacity'], 460.0], ['<=', ['get', 'Capacity'], 1144.0]], '#7bccc4', ['all', ['>', ['get', 'Capacity'], 1144.0], ['<=', ['get', 'Capacity'], 3739.0]], '#43a2ca', ['all', ['>', ['get', 'Capacity'], 3739.0], ['<=', ['get', 'Capacity'], 6640.0]], '#0868ac', '#ffffff'], 'circle-opacity': ['case', ['all', ['>=', ['get', 'Capacity'], 6.0], ['<=', ['get', 'Capacity'], 163.0]], 1.0, ['all', ['>', ['get', 'Capacity'], 163.0], ['<=', ['get', 'Capacity'], 460.0]], 1.0, ['all', ['>', ['get', 'Capacity'], 460.0], ['<=', ['get', 'Capacity'], 1144.0]], 1.0, ['all', ['>', ['get', 'Capacity'], 1144.0], ['<=', ['get', 'Capacity'], 3739.0]], 1.0, ['all', ['>', ['get', 'Capacity'], 3739.0], ['<=', ['get', 'Capacity'], 6640.0]], 1.0, 0], 'circle-stroke-width': ['case', ['all', ['>=', ['get', 'Capacity'], 6.0], ['<=', ['get', 'Capacity'], 163.0]], 1, ['all', ['>', ['get', 'Capacity'], 163.0], ['<=', ['get', 'Capacity'], 460.0]], 1, ['all', ['>', ['get', 'Capacity'], 460.0], ['<=', ['get', 'Capacity'], 1144.0]], 1, ['all', ['>', ['get', 'Capacity'], 1144.0], ['<=', ['get', 'Capacity'], 3739.0]], 1, ['all', ['>', ['get', 'Capacity'], 3739.0], ['<=', ['get', 'Capacity'], 6640.0]], 1, 0], 'circle-stroke-color': ['case', ['all', ['>=', ['get', 'Capacity'], 6.0], ['<=', ['get', 'Capacity'], 163.0]], '#232323', ['all', ['>', ['get', 'Capacity'], 163.0], ['<=', ['get', 'Capacity'], 460.0]], '#232323', ['all', ['>', ['get', 'Capacity'], 460.0], ['<=', ['get', 'Capacity'], 1144.0]], '#232323', ['all', ['>', ['get', 'Capacity'], 1144.0], ['<=', ['get', 'Capacity'], 3739.0]], '#232323', ['all', ['>', ['get', 'Capacity'], 3739.0], ['<=', ['get', 'Capacity'], 6640.0]], '#232323', '#000000']}
        }
],
}