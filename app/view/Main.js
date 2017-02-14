Ext.define('gallery.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'south',
        xtype: 'panel',
        title: 'south',
        height: 500,
        items: [
        ]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Center Tab 1',
            xtype: 'phoneGallery'
        }]
    }]
});
