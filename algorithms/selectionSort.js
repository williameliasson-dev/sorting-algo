export default async function selectionSort(arr, setArr, speed) {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      arr[j].state = "active";
      setArr([...arr]);
      arr[lowest].state = "passive";
      setArr([...arr]);
      await timer(speed);
      arr[j].state = "none";
      setArr([...arr]);
      arr[lowest].state = "none";
      setArr([...arr]);
      if (arr[j].height < arr[lowest].height) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      // Swap
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      setArr([...arr]);
    }
  }
  for (let x = 0; x < arr.length; x++) {
    arr[x].state = "done";
  }
  return arr;
}
