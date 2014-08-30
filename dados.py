import numpy as np
import matplotlib.pyplot as plot
import random as rnd
from matplotlib.collections import PatchCollection
import matplotlib as mtplt
def rollDice():
        return rnd.randint(1,6)

def simRolls(n):
        i = 1;
        res = []
        while(i <= n):
                first = rollDice()
                second = rollDice()
                result = first + second
                res.append(result)
                i = i + 1
        return res
# def dibuja():
#         patches = []
#         ax = plot.plyplot()
#         circle = plot.mpatches.Circle(grid[0],0.1,ec="none")
#         patches.append(circle)
#         colors = np.linspace(0, 1, len(patches))
#         collection = PatchCollection(patches, cmap=plot.pyplot.cm.hsv, alpha=0.3)
#         collection.set_array(np.array(colors))
#         ax.add_collection(collection)
#         ax.add_line(line)
#         plot.pyplot.subplots_adjust(left=0, right=1, bottom=0, top=1)
#         plot.pyplot.axis('equal')
#         plot.pyplot.axis('off')
#         plot.pyplot.show()
def dibuja():
        circle = plot.Circle((0.0),.2,color='r')
        fig = plot.gcf()
        fig.gca().add_artist(circle)
        plot.show()
dibuja()



