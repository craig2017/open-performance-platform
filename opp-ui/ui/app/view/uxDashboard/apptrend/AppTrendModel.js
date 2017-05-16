Ext.define('OppUI.view.uxDashboard.apptrend.AppTrendModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.apptrend',
    itemId: 'appTrendViewModel',

    data: {
        
    },
    stores: {
        remoteAppTrend: {
            model: 'OppUI.model.uxDashboard.AppTrend',
            autoLoad: false,

            proxy: {
                type: 'ajax',
                url: 'http://roadrunner.roving.com/uxsvc/v2/rrux/wptTrendData', 
                reader: {
                    type: 'json',
                    rootProperty: 'dataTable'
                },
                data: []
            },
            listeners: {
                load: 'onRemoteAppTrendLoad'
            }
        }
    }
});