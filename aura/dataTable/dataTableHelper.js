/**
 * Created by michaelwilliams on 9/11/18.
 */
({
    sortData: function(component, event) {
        // Pull API name and direction from event
        let fieldName = event.getParam('fieldName');
        let sortDirection = event.getParam('sortDirection');

        component.set('v.sortedBy', fieldName);
        component.set('v.sortedDirection', sortDirection);

        let data = component.get('v.data');
        // Determine direction
        let reverse = sortDirection !== 'asc' ? -1 : 1;

        data.sort(that.sortBy(fieldName, reverse));
        component.set('v.data', data);
    },

    sortBy: function(field, reverse) {
        // x represents a JSON obj, need to access x[field] where 'field' represents a property name (API Name)
        let key = function(x) { return x[field]; };

        return function(a, b) {
            return reverse * ((key(a) > key(b)) - (key(b) > key(a)));
        };
    }
})