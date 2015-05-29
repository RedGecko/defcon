Template.incidentAdd.events({
    "submit .add-incident-entry": function(event) {
        event.preventDefault();
        console.log("Add Incident entry");

        var incident = {
            name: event.target.name.value,
            location: event.target.location.value,
        };


        Meteor.call("addIncident", incident, function(error, result) {
            if (error) {
                return Errors.throw(error.reason);
            }
            else {
                Router.go('incident');
            }
        });

    },
});