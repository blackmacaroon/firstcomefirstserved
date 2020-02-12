// base case, there are no orders left, return true
// not necessarily consecutive order numbers

// break into sub problems: 
//      check the first served (should be the first ordered)
//      find the customer order to match,  takeout[0] or dinein[0] 
//      once we find the match at [0], pop off the servedorder and the matching customer order
//      recursively check servedorder[0] with the [0] index, if it doesn't match return false

function fcfs(takeOutOrders, dineInOrders, servedOrders) {
    // base case
    if (servedOrders === 0) {
        return true
    }
    // compare the first order from served, if it's first in takeout
    if(takeOutOrders[0] === servedOrders[0]){
        // the order is accounted for and it's removed from both lists
        return fcfs(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1))
    }
    // if not, compare the first order from served, if it's the first in takeout
    else if(dineInOrders[0] === servedOrders[0]){
        // the order is accounted for and it's removed from both lists
        return fcfs(dineInOrders.slice(1), takeOutOrders, servedOrders.slice(1))
    }
    // if neither are true, it was not first-come-first served
    else {
        return false
    }
}