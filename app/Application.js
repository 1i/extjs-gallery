Ext.define('gallery.Application', {
    name: 'gallery',

    extend: 'Ext.app.Application',
    //requires:['/resources/ux/Animated'],

    views: [
        // TODO: add views here
        'gallery.view.phoneGallery',
        'phoneGrid',
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function () {
        console.log('launched');
        var flat = {};
        var flatter = {};
        var phoneFields = [];
        var first = json[Object.keys(json)[0]];
        for (var key in first) {
            phoneFields.push({name: key});
        }
        phoneFields.push({name: 'Android', mapping: 'filterfeatures.Android'})

        var phone = Ext.define('phone', {
            extend: 'Ext.data.Model',
            fields: phoneFields,
        });
        var store = Ext.create('Ext.data.Store', {
            storeId: 'phoneStore',
            model: phone,
            associations: [{
                type: 'hasMany',
                model: 'features',
                name: 'features'
            }]
        });

        var grid = Ext.create('gallery.view.phoneGrid', {
            store: store
        });
        Ext.ComponentQuery.query('panel[title=south]')[0].add(grid);

        function filterData(slider) {
            var values = slider.getValues();

            var test = [];

            //TODO: the suspend/resume hack can be removed once Filtering has been updated
            store.suspendEvents();
            store.clearFilter();
            store.resumeEvents();
            store.filter([{
                fn: function (record) {
                    return record.get('price') >= values[0] && record.get('price') <= values[1];
                }
            }]);

            store.sort('name', 'ASC');
        }

        var phoneSlider = Ext.create('Ext.slider.Multi', {
            hideLabel: false,
            width: 300,
            fieldLabel : "Price",
            minValue: 0,
            maxValue: 500,
            values: [0, 700],

            listeners: {
                change: {
                    buffer: 70,
                    fn: filterData
                }
            }
        });
        console.log(phoneSlider);


        var view = {
            xtype: 'container',
            items: [{
                xtype: 'dataview',
                title: 'dataview',
                store: store,
                tpl: [
                    '<tpl for=".">',
                    '<div>',
                    '<img width="64" height="100" src="http://vodafone.ie/{imageFront}" /> <br>',
                    '<span>{description}</span> <br>',
                    '<span>{priceFrom:usMoney} ( Rating : {rating})</span>',
                    '</div>',
                    '</tpl>',
                    '<div class="x-clear"></div>'
                ],
                plugins : [
                    Ext.create('Ext.ux.DataView.Animated', {
                        duration  : 550,
                        idProperty: 'id'
                    })
                ],

                multiSelect: true,
                height: 310,
                autoScroll: true,
                trackOver: true,
                overItemCls: 'x-item-over',
                itemSelector: 'div.thumb-wrap',
                emptyText: 'No images to display',
                listeners: {
                    afterrender: function () {
                        console.log('AF', this);
                    }
                }
            },
                phoneSlider
            ]
        };
        Ext.ComponentQuery.query('tabpanel')[0].add(view);


        Ext.each(json, function (phone) {
            for (key in phone) {
                store.add(phone[key]);
            }
        });
        console.log(store);

    },


});
