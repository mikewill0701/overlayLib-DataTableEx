({
	init: function(component, event, helper) {
	    // Column A, Column B, ....
        component.set('v.columns', [
            {label: 'A', fieldName: 'API_Name__a', type: 'string', sortable: true},
            {label: 'B', fieldName: 'API_Name__b', type: 'string', sortable: true},
            {label: 'C', fieldName: 'API_Name__c', type: 'string', sortable: true},
            {label: 'D', fieldName: 'API_Name__d', type: 'string', sortable: true}
        ]);

        // Row 1, Row 2, ....
        component.set('v.data', [
            {API_Name__a: 'a1', API_Name__b: 'b1', API_Name__c: 'c1', API_Name__d: 'd1'},
            {API_Name__a: 'a2', API_Name__b: 'b2', API_Name__c: 'c2', API_Name__d: 'd2'},
            {API_Name__a: 'a3', API_Name__b: 'b3', API_Name__c: 'c3', API_Name__d: 'd3'},
            {API_Name__a: 'a4', API_Name__b: 'b4', API_Name__c: 'c4', API_Name__d: 'd4'},
            {API_Name__a: 'a5', API_Name__b: 'b5', API_Name__c: 'c5', API_Name__d: 'd5'},
        ]);

        // init full data for filtering
        component.set('v.fullData', component.get('v.data'));
	},

    sortData: function(component, event, helper) {
        helper.sortData(component, event);
    },

    filter: function(component, event, helper) {
        // Grab user-entered filter string
        let filterString = event.getSource().get('v.value');

        // If it's empty display all data
        if (filterString == '' || filterString == null) {
            component.set('v.data', component.get('v.fullData'));
        }

        // Otherwise, find all entries with a matching substring in Column A
        else {
            let allRows = component.get('v.fullData');

            let filteredRows = [];
            for (let i = 0; i < allRows.length; i++) {
                if (allRows[i].API_Name__a.indexOf(filterString) > -1) {
                    filteredRows.push(allRows[i]);
                }
            }

            component.set('v.data', filteredRows);
        }
    }
})