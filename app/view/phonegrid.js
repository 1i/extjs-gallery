Ext.define('gallery.view.phoneGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.phonegrid',
  height: 400,
  //store : Ext.getStore('phoneStore'),
  columns: [{
      "text": "product id",
      "dataIndex": "productid",
      width: 'auto'
    }, {
      "text": "ttproductid",
      "dataIndex": "ttproductid",
      hidden: true,
      width: 'auto'
    }, {
      "text": "handsetcode",
      "dataIndex": "handsetcode",
      hidden: true,
      width: 'auto'
    }, {
      "text": "offer code",
      "dataIndex": "offercode",
      hidden: true,
      width: 'auto'
    }, {
      "text": "imageFront",
      "dataIndex": "imageFront",
      hidden: true,
      width: 'auto'
    }, {
      "text": "imageBack",
      "dataIndex": "imageBack",
      hidden: true,
      width: 'auto'
    }, {
      "text": "imageDetails",
      "dataIndex": "imageDetails",
      hidden: true,
      width: 'auto'
    }, {
      "text": "product category",
      "dataIndex": "productcategory",
      hidden: true,
      width: 'auto'
    }, {
      "text": "description",
      "dataIndex": "description",
      width: 175,
    }, {
      "text": "extra Description",
      "dataIndex": "extraDescription",
      width: 150
    }, {
      "text": "manufacturer",
      "dataIndex": "manufacturer",
      width: 'auto'
    }, {
      "text": "out Of Stock",
      "dataIndex": "outOfStock",
      width: 'auto'
    },
    // {
    //   "text": "category features",
    //   "dataIndex": "categoryfeatures"
    // },
    {
      "text": "colors",
      "dataIndex": "colors",
      width: 175
    },
    // {
    //   "text": "sort features",
    //   "dataIndex": "sortfeatures"
    // },
    //{
    //   "text": "filter features",
    //   "dataIndex": "filterfeatures",
    //   hidden: true
    // },
    {
      "text": "inFuture",
      "dataIndex": "inFuture",
      width: 'auto',
      hidden: true
    }, {
      "text": "rating",
      "dataIndex": "rating",
      width: 'auto'
    }, {
      "text": "4G",
      "dataIndex": "enabled4G",
      width: 'auto'
    }, {
      "text": "productDescription",
      "dataIndex": "productDescription",
      hidden: true
    }, {
      "text": "priceFrom",
      "dataIndex": "priceFrom",
      width: 'auto'
    },

  ],
  listeners: {

    itemdblclick: function(grid, record, item, index, e, eOpts) {
      var tabpanel = grid.up('app-main').down('tabpanel');
      var dvPanel = tabpanel.down('panel[use=detailedView]');
      tabpanel.setActiveTab(dvPanel);
      dvPanel.loadImage(record.get('imageDetails'),record.get('handsetcode'))
      dvPanel.writeInfo(record)
    }
  }

});
