function reverseString(strword){
    let str = strword.split('');
    str = str.reverse('');
    str = str.join('');
    return str;
    
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Adisorn Khamsaen"));