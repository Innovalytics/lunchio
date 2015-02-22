'use strict';

/**
 * @ngdoc service
 * @name lunchioApp.Foodservice
 * @description
 * # Foodservice
 * Service in the lunchioApp.
 */
angular.module('lunchioApp')
  .service('Foodservice', ['$http', '$log', function ($http, $log) {
		var NAMARA_API_KEY = 'de8b99fc46d44e6f3db0bd841ae7f007618c6393ed9d35c43d68e75c62dd9180';
		var NAMARA_API_KEY_2 = '3640b953bdec14e68370fb5772e35fb7c9ca32167fa229378dd4d5003876cf2e';
		var NAMARA_API_KEY_3 = 'f2088de5083cadca54a8ba7351730ee5afd3eee767c092d1fd96f69dcdb38969';

		var categories = {
			sweets: {
				href: 'http://api.namara.io/v0/data_sets/25ca7719-521b-4e3b-9b2d-516ab3a85cd5/data/en-0'
			},
			fastfoods: {
				href: 'http://api.namara.io/v0/data_sets/6200bc9b-2c9d-4457-9afe-3569b8620dc2/data/en-0'
			},
			misc: {
				href: 'http://api.namara.io/v0/data_sets/e5d9b2c6-94ab-4fb4-be76-e1e94b2c75fb/data/en-0'	
			},
			snacks: {
				href: 'http://api.namara.io/v0/data_sets/81eb31f3-368b-4e48-80ae-512962c0075f/data/en-0'
			},
			beverages: {
				href: 'http://api.namara.io/v0/data_sets/0a7cc1f7-eb86-4633-baca-4a22699e7a07/data/en-0'
			},
			mixed: {
				href: 'http://api.namara.io/v0/data_sets/54e4da6e-ea87-485d-8fa7-2c6f5bad2fdc/data/en-0'
			},
			fruits: {
				href: 'http://api.namara.io/v0/data_sets/bb2d77c3-142a-4951-b9ef-13864764cc35/data/en-0'
			},
			nuts: {
				href: 'http://api.namara.io/v0/data_sets/b0994377-c3a3-4808-92c6-991c672630f5/data/en-0'
			},
			baked: {
				href: 'http://api.namara.io/v0/data_sets/5e959f5d-d0a0-40ee-b8b0-f0f01e4f5071/data/en-3'
			},
			eggs: {
				href: 'http://api.namara.io/v0/data_sets/aa2594fe-7b61-4587-97f7-2f92fbf9a39b/data/en-1'
			},
			fish: {
				href: 'http://api.namara.io/v0/data_sets/aa4edb20-ea41-42da-b22c-e11a65731f8b/data/en-0'
			},
			meat: {
				href: 'http://api.namara.io/v0/data_sets/5824853c-ab12-44f5-a4c5-a56ea4c12a71/data/en-0'
			},
			vegetables: {
				href: 'http://api.namara.io/v0/data_sets/205edcf7-9a0f-491a-88e7-88b68a3e60cc/data/en-1'
			},
			bread: {
				href: 'http://api.namara.io/v0/data_sets/796a66b4-e3f7-4ebf-8765-4fc198c330ba/data/en-0'
			},
			dairy: {
				href: 'http://api.namara.io/v0/data_sets/6f745be3-0543-4c04-829d-6d6518b7a944/data/en-0'
			}
		};

		return {
			categories: categories,
			find: function (category, term, callback) {
				var key = 'foods.' + category;

				var url = categories[category].href;
				var whereClause = 'energy_kcal IS NOT NULL AND food_name LIKE \'%' + term.toUpperCase() + '%\'';

				var options = {
					params: {
						'api_key': NAMARA_API_KEY_3,
						'where': whereClause
					}
				};

				$http.get(url, options)
					.success(function (data, status) {
						localStorage[key] = JSON.stringify(data);
						callback(null, data);
					})
					.error(function (data, status) {
						callback('Error getting food');
					});
			}
		}
  }]);
