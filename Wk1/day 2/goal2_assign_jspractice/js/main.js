/*
     Name: Jeanna Anderson
     Date: 08/08/13
     Class & Section:  PWA1-####
     Comments: "Goal 1: Review of WPF"
 */

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    
    
    var avgNumbers = function(arr){
        var sum = 0;
        var average = 0;
        for(var i=0; i<arr.length; i++){
               sum += i;
            }
        average = sum / arr.length;
        return average;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    
    //--------------------------------------------------------
    console.log("2. concat first and last name");


    var fullName = function(firstName, lastName){
        var full = firstName.concat(lastName);

        return full;
    }

     console.log(fullName('James ', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        var wordCount = function(ipsum){
            ipsum.split('');
            console.log(ipsum);

            for(var i=0; i<ipsum.length; i++){
               
                if(''===''){
                    var total = i;
                }

            }
            return total;
        }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        var charCount = function(test){
            test.trim();

            for(var i=0; i<test.length; i++){
               var total=[i];
            }
            return total;
        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
       
/*       var vowelsInWord = function(word){
            var totalVowel = 0;
            word.split('');

            for(var i=0; i < word.length; i++){
                
                if("a" || "i" || "e" || "o" || "u"){
                   totalVowel++;
                }
            }
            return totalVowel;
        }

      console.log(vowelsInWord('JavaScript'));*/

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        var findNum = function(myArr, boo){
            var arr = [];
            var even = 0;
            var odd = 0;
            //console.log('myarray', myArr);

            if(boo === undefined || boo){
                for(var i=0; i < myArr.length; i++)
                {
                    if (myArr[i]%2 == 0){
                        even = myArr[i];
                        arr.push(even);
                        console.log('even: ' + even);
                    }
                }
            }else{
                for(var i=0; i < myArr.length; i++)
                {
                   if(myArr[i]%2 !== 0){
                        odd = myArr[i];
                        arr.push(odd);
                        console.log('odd: ' + odd);
                    } 
                }
            }   
            return arr;
        }

    console.log(findNum([31,22,4,67,83,6,5,4])); 
    console.log(findNum([31,22,4,67,83,6,5,4], false));
})();