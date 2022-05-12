var APP_DATA = {
  "scenes": [
    {
      "id": "0-bayfront-park",
      "name": "Bayfront Park",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.6939840268960777,
        "pitch": -0.15344963094470288,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": -2.378462211767779,
          "pitch": -0.0311474469275268,
          "rotation": 5.497787143782138,
          "target": "1-seaside-spot"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.998319313545026,
          "pitch": 0.002518016053365102,
          "title": "Pepper Fountain",
          "text": "170 feet wide"
        }
      ]
    },
    {
      "id": "1-seaside-spot",
      "name": "Seaside spot",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.4706371606781374,
        "pitch": 0.05174192399709909,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": -2.988381863875187,
          "pitch": -0.02810836710744269,
          "rotation": 11.780972450961727,
          "target": "2-skyviews-miami-observation-wheel"
        },
        {
          "yaw": 0.6690247001052754,
          "pitch": -0.025647257455492678,
          "rotation": 11.780972450961727,
          "target": "0-bayfront-park"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.07864901760437,
          "pitch": -0.055658024150261554,
          "title": "Port Miami Bridge",
          "text": "links Miami to the Port of Miami"
        }
      ]
    },
    {
      "id": "2-skyviews-miami-observation-wheel",
      "name": "Skyviews Miami Observation Wheel",
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
        "yaw": -0.6447029996735125,
        "pitch": -0.3754489456408905,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": -2.17213669064213,
          "pitch": 0.07100186530605157,
          "rotation": 11.780972450961727,
          "target": "1-seaside-spot"
        },
        {
          "yaw": -0.19991454242979856,
          "pitch": -0.07527871817419296,
          "rotation": 5.497787143782138,
          "target": "3-bayside-marina-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6461644106756399,
          "pitch": 0.06748914343538104,
          "title": "Skyviews Miami Observation Wheel",
          "text": "200 feet tall<div>$17/ticket</div>"
        }
      ]
    },
    {
      "id": "3-bayside-marina-1",
      "name": "Bayside Marina 1",
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
        "yaw": 0.586083149557771,
        "pitch": -0.01532444676085376,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": 1.8934901175692547,
          "pitch": -0.05154046183724503,
          "rotation": 0,
          "target": "2-skyviews-miami-observation-wheel"
        },
        {
          "yaw": -1.2282775329616147,
          "pitch": 0.04720859901097185,
          "rotation": 0,
          "target": "4-bayside-marina-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0631695908905563,
          "pitch": -0.03751054970831014,
          "title": "Hard Rock Cafe Miami",
          "text": "opens from 12pm"
        }
      ]
    },
    {
      "id": "4-bayside-marina-2",
      "name": "Bayside Marina 2",
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
        "yaw": -2.945356648022397,
        "pitch": 0.046895792746315834,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": -2.2164581510768997,
          "pitch": 0.010416261796912352,
          "rotation": 0,
          "target": "3-bayside-marina-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0861348897545433,
          "pitch": 0.11415119684597208,
          "title": "Bayside Marina",
          "text": "many boat tours"
        }
      ]
    }
  ],
  "name": "Miami Beach",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
