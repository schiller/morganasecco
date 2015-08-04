Schemas = {};

Schemas.BaseSchema = new SimpleSchema({
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();
			}
		},
		denyUpdate: true
	},
	// Force value to be current date (on server) upon update
	// and don't allow it to be set upon insert.
	updatedAt: {
		type: Date,
		autoValue: function() {
			if (this.isUpdate) {
				return new Date();
			} else if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return new Date();
			}
		},
		// denyInsert: true,
		optional: true
	},
});