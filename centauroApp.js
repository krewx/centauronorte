var centauro = angular.module('centauroApp', ['ngRoute'])

	centauro.controller('astarController', function ($scope, $http) {
		var cy = cytoscape({
		  container: document.getElementById('cy'),
		  
		  style: cytoscape.stylesheet()
		    .selector('node')
		      .css({
		        'content': 'data(name)',
		        'text-valign': 'top',
		        'color': 'white',
		        'text-outline-width': 2,
		        'text-outline-color': '#888',
		        'height': 80,
		        'width': 80,
		        'background-fit': 'cover',
		        'border-color': '#000',
		        'border-width': 3,
		        'border-opacity': 0.5
		      })
		    .selector('edge')
		      .css({
		        'content': 'data(weight)',
		        'text-valign': 'top',
		        'color': 'white',
		        'text-outline-width': 2,
		        'text-outline-color': '#888',		      	
		        'width': 6,
		        'target-arrow-shape': 'triangle',
		        'line-color': '#ffaaaa',
		        'target-arrow-color': '#ffaaaa'
		      })
		    .selector('.highlighted')
		      .css({
		        'background-color': '#61bffc',
		        'line-color': '#61bffc',
		        'target-arrow-color': '#61bffc',
		        'transition-property': 'background-color, line-color, target-arrow-color',
		        'transition-duration': '0.5s'
		      })		      
		    .selector('#macuspana')
		      .css({
		        'background-image': 'http://mexico.cnn.com/media/2012/03/28/lopez-obrador-perfil.jpg'
		      })
		    .selector('#nacajuca')
		      .css({
		        'background-image': 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Nacajuca_Artesan%C3%ADa_3.jpg/250px-Nacajuca_Artesan%C3%ADa_3.jpg'
		      })
		    .selector('#balancan')
		      .css({
		        'background-image': 'http://www.conaculta.gob.mx/turismocultural/guias/images_guia8/balancan.jpg'
		      })
		  .selector('#jonuta')
		      .css({
		        'background-image': 'http://diarioavancetabasco.com/wp-content/uploads/2013/04/MUNICIPIO-31-650x489.jpg'
		      })
		  .selector('#huimanguillo')
		      .css({
		        'background-image': 'http://media-cdn.tripadvisor.com/media/photo-s/01/58/46/0c/huimanguillo.jpg'
		      })
		  .selector('#jalpa')
		      .css({
		        'background-image': 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jalpa_de_M%C3%A9ndez_Artesan%C3%ADas.jpg/275px-Jalpa_de_M%C3%A9ndez_Artesan%C3%ADas.jpg'
		      })
		  .selector('#villahermosa')
		      .css({
		        'background-image': 'http://lagunapark.mx/wp-content/uploads/2014/08/LagunaIlusiones.jpg'
		      })
		  .selector('#unam')
		      .css({
		        'background-image': 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo-UNAM-escalable.svg/200px-Escudo-UNAM-escalable.svg.png'
		      })
  		  .selector('#xochimilco')
		      .css({
		        'background-image': 'http://www.arqueomex.com/images/ESPECIAL43/g.viajeros_xochimilco.jpg'
		      })		      
  		  .selector('#santa-fe')
		      .css({
		        'background-image': 'http://ww1.prweb.com/prfiles/2013/02/20/10451363/Santa-Fe-DF.jpg'
		      })
  		  .selector('#los-pinos')
		      .css({
		        'background-image': 'http://static.squarespace.com/static/531e7341e4b00453258c181e/t/5418fda3e4b0fa4ecac21f6b/1410923940190/bandera+de+Mexico'
		      }),		      
		  
		  elements: {
		    nodes: [
		      { data: { id: 'macuspana', name: 'Macuspana' } },
		      { data: { id: 'nacajuca', name: 'Nacajuca' } },
		      { data: { id: 'balancan', name: 'Balancán' } },
		      { data: { id: 'jonuta', name: 'Jonuta' } },
		      { data: { id: 'huimanguillo', name: 'Huimanguillo' } },
		      { data: { id: 'jalpa', name: 'Jalpa' } },
		      { data: { id: 'villahermosa', name: 'Villahermosa' } },
		      { data: { id: 'unam', name: 'UNAM' } },
		      { data: { id: 'xochimilco', name: 'Xochimilco' } },
		      { data: { id: 'santa-fe', name: 'Santa Fe' } },
		      { data: { id: 'los-pinos', name: 'Los Pinos' } }
		    ],
		    edges: [
		      { data: { source: 'macuspana', target: 'nacajuca', weight: 15 } },
		      { data: { source: 'macuspana', target: 'huimanguillo', weight: 11 } },
		      { data: { source: 'macuspana', target: 'balancan', weight: 18 } },
		      { data: { source: 'macuspana', target: 'jonuta', weight: 21 } },
		      { data: { source: 'macuspana', target: 'jalpa', weight: 20 } },
		      { data: { source: 'jalpa', target: 'nacajuca', weight: 21 } },
		      { data: { source: 'macuspana', target: 'villahermosa', weight: 17 } },
		      { data: { source: 'balancan', target: 'nacajuca', weight: 16 } },
		      { data: { source: 'villahermosa', target: 'unam', weight: 34 } },
		      { data: { source: 'unam', target: 'xochimilco', weight: 11 } },
		      { data: { source: 'unam', target: 'santa-fe', weight: 16 } },
		      { data: { source: 'unam', target: 'los-pinos', weight: 23 } },
		      { data: { source: 'xochimilco', target: 'santa-fe', weight: 15 } },
		      { data: { source: 'xochimilco', target: 'los-pinos', weight: 20 } },
		    ]
		  },
		  
		  layout: {
		    name: 'breadthfirst',
		    directed: true,
		    padding: 10
		  }
		}); // cy init
		
		var aStar = cy.elements().aStar({ root: "#macuspana", goal: "#los-pinos" });

		aStar.path.edges().addClass('highlighted');
	});

	centauro.controller('treesController', function ($scope, $http) {

	});