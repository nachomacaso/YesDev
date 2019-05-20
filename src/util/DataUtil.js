export const getMinMax = (data) => {
  var initVal = {
    minProfit: 0,
    maxProfit: 0,
    minCost: 0,
    maxCost: 0,
    minRev: 0,
    maxRev: 0,
  };
  
  const callBack = (acc, curr) => {
    if(!acc) {
      acc = initVal;
    }
    if(acc.maxProfit < curr.PROFIT) {
      acc.maxProfit = curr.PROFIT;
    }
    if(curr.PROFIT < acc.minProfit) {
      acc.minProfit = curr.PROFIT;
    }
    if(acc.maxCost < curr.COST) {
      acc.maxCost = curr.COST;
    }
    if(curr.COST < acc.minCost) {
      acc.minCost = curr.COST;
    }
    if(acc.maxRev < curr.REVENUE) {
      acc.maxRev = curr.REVENUE;
    }
    if(curr.REVENUE < acc.minRev) {
      acc.minRev = curr.REVENUE;
    }
    return acc
  };
  
  return data.reduce(callBack, initVal);
};
