function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
function partition(arr, left, result) {
    const pivotIndex = Math.floor((left + right) / 2);
    const pivotValue = arr[pivotIndex];
    
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivotValue) {
            i++;
        }
        while (arr[j] > pivotValue) 
            j--;
    }
    if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
    
    }
    return i;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}