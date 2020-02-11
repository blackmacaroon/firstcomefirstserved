# firstcomefirstserved
 I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. 
 All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.
 Recently, some customers have been complaining that people who placed orders afterthem are getting their food first. Yikes—that's not good for business! To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:
 The take-out orders as they were entered into the system and given to the kitchen.
  ```takeOutOrders```
 The dine-in orders as they were entered into the system and given to the kitchen.
  ```dineInOrders```
 Each customer order (from either register) as it was finished by the kitchen.
  ```servedOrders```
 
 ### Given all three arrays, write a function to check that my service is rst-come,rst-served. All food should come out in the same order customers requested it.

 Each order is represented as a unique integer 

 ## Examples
 Input: `[1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6]`
 Expected Output: "True"

 Input: `[1, 3, 5], [2, 4, 6], [1, 2, 4, 5, 6, 3]`
 Expected Output: "False"

