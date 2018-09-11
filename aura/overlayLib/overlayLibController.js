({
	openModal: function(component, event, helper) {
		$A.createComponent(
            'c:modalContent',

            {
                'message': 'Hey there, modal!'
            },

            function(content, status) {
                if (status === 'SUCCESS') {
                    component.find('overlayLib').showCustomModal({
                        header: 'Modal Header',
                        body: content,
                        showCloseButton: true,
                        closeCallback: function() {
                            console.log('Closed!');
                        }
                    })
                }
            }
        );	
	}
})