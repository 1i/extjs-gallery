Ext.define('gallery.view.featuresGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.featuresGrid',
  store: Ext.create('Ext.data.Store', {
    model: 'gallery.model.features',
    data: []
  }),
  listeners: {
    itemclick: function(view, record, item, index, e, eOpts) {
      console.log('click', arguments)
    }
  },
  columns: [{
    text: "Description",
    dataIndex: "description",
    width: 150
  }, {
    text: "3G",
    dataIndex: "3G",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Android",
    dataIndex: "Android",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Bluetooth",
    dataIndex: "Bluetooth",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Camera",
    dataIndex: "Camera",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Email",
    dataIndex: "Email",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "FM radio",
    dataIndex: "FM radio",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }

  }, {
    text: "Internet browser",
    dataIndex: "Internet browser",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "MP3 player",
    dataIndex: "MP3 player",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Picture messaging",
    dataIndex: "Picture messaging",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Smartphone",
    dataIndex: "Smartphone",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Touchscreen",
    dataIndex: "Touchscreen",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Video messaging",
    dataIndex: "Video messaging",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Video recording",
    dataIndex: "Video recording",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "WiFi",
    dataIndex: "WiFi",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Large keys",
    dataIndex: "Large keys",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "Memory card",
    dataIndex: "Memory card",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "QWERTY keyboard",
    dataIndex: "QWERTY keyboard",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }, {
    text: "LandlineOnly",
    dataIndex: "LandlineOnly",
    width: 'auto',
    renderer: function(v, meta, rec) {
      if (v) {
        return '<img src="/resources/icons/circle_green.png">'
      } else {
        return '<img src="/resources/icons/circle_red.png">'
      }
    }
  }]

});
