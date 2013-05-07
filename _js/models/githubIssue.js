can.Model("CanJSUS.GithubIssue", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: data.source_data.org.avatar_url,
			title: data.title,
			body: data.body,

			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: 'http://api.bithub.com/api/events/?category=bug&also=source_data&order=upvotes&limit={limit}',
		dataType: 'json'
	}
}, { });