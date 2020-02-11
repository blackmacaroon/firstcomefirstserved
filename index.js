// base case, there are no orders left, return true

// break into sub problems: 
//      check the first served (should be the first ordered)
//      find the customer order to match,  takeout[0] or dinein[0] 
//      once we find the match at [0], pop off the servedorder and the matching customer order
//      recursively check servedorder[0] with the [0] index, if it doesn't match return false

function fcfs(takeOutOrders, dineInOrders, servedOrders) {
    if (servedOrders === 0) {
        return true
    }

    if(takeOutOrders[0] === servedOrders[0]){
        return fcfs(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1))
    }

    else if(dineInOrders[0] === servedOrders[0]){
        return fcfs(dineInOrders.slice(1), takeOutOrders, servedOrders.slice(1))
    }
    else {
        return false
    }
}