Ext.define('gallery.view.phoneGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.phonegrid',
    height: 400,
    //store : Ext.getStore('phoneStore'),
    columns: [
            {
                "text": "product id",
                "dataIndex": "productid"
            },
            {
                "text": "ttproductid",
                "dataIndex": "ttproductid",
                hidden: true
            },
            {
                "text": "handsetcode",
                "dataIndex": "handsetcode",
                hidden: true
            },
            {
                "text": "offer code",
                "dataIndex": "offercode",
                hidden: true
            },
            {
                "text": "imageFront",
                "dataIndex": "imageFront",
                hidden: true
            },
            {
                "text": "imageBack",
                "dataIndex": "imageBack",
                hidden: true
            },
            {
                "text": "imageDetails",
                "dataIndex": "imageDetails",
                hidden: true
            },
            {
                "text": "product category",
                "dataIndex": "productcategory",
                hidden: true
            },
            {
                "text": "description",
                "dataIndex": "description"
            },
            {
                "text": "extra Description",
                "dataIndex": "extraDescription"
            },
            {
                "text": "manufacturer",
                "dataIndex": "manufacturer"
            },
            {
                "text": "out Of Stock",
                "dataIndex": "outOfStock"
            },
            {
                "text": "category features",
                "dataIndex": "categoryfeatures"
            },
            {
                "text": "colors",
                "dataIndex": "colors"
            },
            {
                "text": "sort features",
                "dataIndex": "sortfeatures"
            },
            {
                "text": "filter features",
                "dataIndex": "filterfeatures"
            },
            {
                "text": "inFuture",
                "dataIndex": "inFuture",
                hidden: true
            },
            {
                "text": "rating",
                "dataIndex": "rating"
            },
            {
                "text": "enabled4G",
                "dataIndex": "enabled4G"
            },
            {
                "text": "productDescription",
                "dataIndex": "productDescription",
                hidden : true
            },
            {
                "text": "priceFrom",
                "dataIndex": "priceFrom"
            }
    ]

});
