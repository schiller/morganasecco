Meteor.startup(function() {
	if (Meteor.isClient) {
		return SEO.config({
			title: 'Morgana Secco Fotografia | Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Fotografia Lifestyle',
			meta: {
				'description': 'Fotógrafa lifestyle de família, crianças, casais, gestantes, feminino. Fotografias espontâneas e com luz natural. Porto Alegre, Lajeado (RS).'
			},
			og: {
				'title': 'Morgana Secco Fotografia',
				'image': 'http://morganasecco.com.br/images/og/morgana-secco-fotografia.jpg'
			}
		});
	}

	SeoCollection.update(
	{
		route_name: 'contact'
	},
	{
		$set: {
			route_name: 'contact',
			title: 'Contato | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia',
			meta: {
				'description': 'Para saber mais sobre meu trabalho ou solicitar orçamentos, mande uma mensagem. Ficarei muito feliz em responder! :)'
			},
			og: {
				'title': 'Contato - Morgana Secco Fotografia'
			}
		}
	},
	{
		upsert: true
	}
	);

	SeoCollection.update(
	{
		route_name: 'about'
	},
	{
		$set: {
			route_name: 'about',
			title: 'Sobre mim | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia',
			og: {
				'title': 'Sobre mim - Morgana Secco Fotografia'
			}
		}
	},
	{
		upsert: true
	}
	);

	SeoCollection.update(
	{
		route_name: 'posts'
	},
	{
		$set: {
			route_name: 'posts',
			title: 'Galerias | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia',
			og: {
				'title': 'Galerias - Morgana Secco Fotografia'
			}
		}
	},
	{
		upsert: true
	}
	);
});
