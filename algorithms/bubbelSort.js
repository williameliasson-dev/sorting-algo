export default async function bblSort(arr, setArray) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  let newArray = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      newArray[j].state = "active";
      newArray[j + 1].state = "active";
      if (arr[j].height > arr[j + 1].height) {
        // If the condition is true then swap them
        await timer(90);
        let temp = arr[j].height;
        newArray[j].height = arr[j + 1].height;
        newArray[j + 1].height = temp;

        newArray[j + 1].state = "none";
        newArray[j].state = "none";
        setArray([...newArray]);
      } else {
        newArray[j + 1].state = "none";
        newArray[j].state = "none";
        setArray([...newArray]);
      }
    }
  }
  for (let x = 0; x < arr.length; x++) {
    arr[x].state = "done";
  }
  return arr;
}
