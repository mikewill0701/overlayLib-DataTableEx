({
	openModal: function(component, event, helper) {
		$A.createComponent(
            'c:modalContent', // content component

            {
                'message': 'Hey there, modal!' // attribute passed to modal content component
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