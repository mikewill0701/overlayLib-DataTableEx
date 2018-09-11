/**
 * Created by michaelwilliams on 9/11/18.
 */
({
    sortData: function(component, event) {
        let that = this;

        // set spinner on sort
        setTimeout(function() {
            let fieldName = event.getParam('fieldName');
            let sortDirection = event.getParam('sortDirection');

            component.set('v.sortedBy', fieldName);
            component.set('v.sortedDirection', sortDirection);

            let data = component.get('v.data');
            let reverse = sortDirection !== 'asc' ? -1 : 1;

            data.sort(that.sortBy(fieldName, reverse));
            component.set('v.data', data);
        }, 0);
    },

    sortBy: function(field, reverse) {
        let key = function(x) { return x[field]; };

        return function(a, b) {
            return reverse * ((key(a) > key(b)) - (key(b) > key(a)));
        };
    }
})