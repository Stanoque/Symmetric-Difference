function sym(args) {

    let resultArray = []; // array to return

    const findDuplicates = (arr, index) => { // this func finds the end of duplicate row in sorted array and returns
                                             // index of the last duplicate of the arr[index]
      let secondIndex = 0;
      for(let i = index; i < arr.length - 1; i++){
        if(arr[i] === arr[i+1]){
          secondIndex = i+1;
        } else {
          return secondIndex;
        }
      }
      return secondIndex;
    }
    const nonDuplicate = (arr, strict) => { // this func crops out duplicates row, leaving only one unique element
                                            // if strict === 0 or none of duplicates if strict === 1
      let length = arr.length;
      for(let i = 0; i <= length; i++){
        let secondIndex = findDuplicates(arr, i);
        if(secondIndex !== 0){
          arr.splice(i, secondIndex - i + strict);
        }
        let oldLength = length;
        length = arr.length;
        i-= oldLength - length;
      }
    }

    const subtract = (firstArray, secondArray) =>{ // this function perfoms difference through other funcs above
      firstArray = firstArray.concat(secondArray); // concating two arrays
      firstArray.sort((x,y)=>x-y); // sorting new array
      nonDuplicate(firstArray, 1); // deleting duplicates strictly
      return firstArray; 
    }
  
    for (let element of arguments){
      nonDuplicate(element.sort((x,y)=>x-y), 0); // sorting all the arrays before processing
    }
   
    resultArray = [...arguments[0]];
    for(let i = 1; i < arguments.length; i++){
      resultArray = subtract(resultArray, arguments[i]);
    }
   
  
    return resultArray;
  }
  
