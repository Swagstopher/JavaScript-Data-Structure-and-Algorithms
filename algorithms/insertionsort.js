/*
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
  -Simple implementation
  -Efficient for (quite) small data sets
  -Worst Case: O(n^2)
  -Best Case: O(n)
  -Average Case: O(n^2)
*/

var insertionSort = function(arr){
  var i,j;

for(i = 0; i < arr.length; i++){
  j = i;
  while(j>0 && arr[j-1] > arr[j] ){
      var temp = arr[i-1];
      arr[i] = arr[i - 1];
      arr[i-1] = temp;
      j--;
  };
}
return arr;
}
