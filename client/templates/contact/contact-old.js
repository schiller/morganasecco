Template.contactOld.events({
	"submit #contact-form": function (event, template) {
		event.preventDefault();

		var name = event.target['contact-name'].value;
		var phone = event.target['contact-phone'].value;
		var email = event.target['contact-email'].value;
		var subject = event.target['contact-subject'].value;
		var message = event.target['contact-message'].value;

		// Clear form
		event.target['contact-name'].value = "";
		event.target['contact-phone'].value = "";
		event.target['contact-email'].value = "";
		event.target['contact-subject'].value = "";
		event.target['contact-message'].value = "";
	}
});