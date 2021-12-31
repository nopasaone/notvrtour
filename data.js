var APP_DATA = {
  "scenes": [
    {
      "id": "0-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14810852941336883,
          "pitch": 0.5856250311402071,
          "rotation": 0,
          "target": "1-living-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7183539735354927,
          "pitch": 0.6095433756865489,
          "title": "Inodoro Ferrum",
          "text": "<div>DESCRIPCIÓN GENÉRICA: Inodoro largo</div><div><br></div><div>MATERIAL: Porcelana Sanitaria</div><div><br></div><div>CARACTERISTICAS TECNICAS</div><div>CAPACIDAD: 6 / 3 Litros</div><div><br></div><div>PESO: 18,7 kg</div><div><br></div><div>FUNCIONAMIENTO: Arrastre / Volteo 6 litros</div>"
        }
      ]
    },
    {
      "id": "1-living-2",
      "name": "Living 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6730240384460409,
          "pitch": 0.4725430252737137,
          "rotation": 0,
          "target": "0-bao"
        },
        {
          "yaw": -1.6866102803055298,
          "pitch": 0.4596738345119,
          "rotation": 0,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.28168901992346207,
          "pitch": 0.41209642094701593,
          "rotation": 0,
          "target": "1-living-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
