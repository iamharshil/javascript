# GRAPH TRAVERSAL - algo to visit every vertex of a graph

## DFS Intuition

- Order 1: 0 -> 1 -> 2 -> 1 -> 3 -> 5 -> 6 -> 7 -> 8 -> 9 -> 8 -> 7 -> 5 -> 3 -> 1 -> 4 -> 1 -> 0
- we go for each vertex and find if it has new vertex after current one then we go for it and once we find end(9) we will go back to previous till we go to first vertex
- this is what depth for search where we go for new vertices till we get depth of it.
- order 2: 0 -> 2 -> 1 -> 4-> 1 -> 3 -> 5 -> 8 -> 9 -> 8 -> 7 -> 8 -> 5 -> 6

# DFS Implementation 1

```python
dfs (G,0): 0 1 3 4 2

def dfs(G, v):
    visit(v)
    for w in G.neighbors(v):
        dfs(G,w)
```

- There is issue where 0 -> 1 then 1 can go back to 0 and it will go infinity
- to fix this we mark node that are already visited

```python
marked = [False] * G.size()
def dfs(G,v):
    visit(v)
    marked[v] = True
    for w in G.neighbors(v):
        if not marked[w]:
            dfs(G,w)
```

- alright so
  Solution by each vertex call:
- Each time dfs runs older dfs gets new added because of marked[v] = True
- So (G, 0) will get added by all other after it
- (G,1) will get added by 1 to all after it

```python
dfs(G, 0)
0 -> 1 -> 3 -> 4 -> 2
```

```python
dfs(G, 1)
1 -> 3 -> 4 -> 2
```

```python
dfs(G, 3)
3 -> 4 -> 2
```

```python
dfs(G, 4)
4 -> 2
```

- Since there are no more vertex
- it will goto 3 where it doesn't have new vertex it will goto 2

```python
dfs(G, 2)
2
```

# DFS Implementation 2

- We will use staked data structure to keep track

```python
marked = [False] * G.size()
dfs(G, v):
    stack = [v]
    while len(stack) > 0:
        v = stack.pop()
        if not marked[v]:
            visit(v)
            marked[v] = True
            for w in G.neighbors(v):
                if not marked[w]:
                    stack.append(w)
```


- There is preorder and postorder vertex
- the methods we seen are preorder where when we discover the vertex we add it.
- in postorder when vertex don't have any new vertext to explore then we add it.

- Postorder
```python
marked = [False] * G.size()
def dfs_post(G, v):
    marked[v] = True
    for w in G.neighbors(v):
        if not marked[w]:
            dfs(G,w)
    visit(v)
```


## DFS Applications
- Cycle Detection
- Finding connected components
- Topological sort
- Maze Generation