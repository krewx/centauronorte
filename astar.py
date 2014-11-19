import search

class Node(search.Node):
	def __init__(self,parent=None,children,cost):
		self.parent = parent
		self.children = children
		self.cost = cost

	def expand(self):
		return self.children

class Problem(search.Problem):
		# Initial y goal pueden ser tags O referencias
	def __init__(self,initial,goal,g=0):
		self.initial = initial; self.goal = goal

	def actions(self.node):
		# Nodos posibles de recorrer desde el estado actual
		return node.expand

	def result(self,nodes):
		# Decide por el mejor nodo, calcula f = g + h
		return min(nodes, key=lambda node: node.cost)

	def astar(self):
		
		openList = []
		closedList = []
		openList.append(self.initial)
		print self.result(self.actions(self.initial))



p = Problem(Node(cost=7,children=[Node(cost=3),Node(cost=5),Node(cost=11)]))