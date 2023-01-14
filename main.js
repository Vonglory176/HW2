document.addEventListener("DOMContentLoaded", function(_) {
    document.getElementById("average-button").addEventListener("click", handleOnClickAverageButton)
});

/*
 * Input: Array of numbers 
 * Output: Return average number of array
 * */
function calculateAverage(numberArr) {
    // Throw an exception whenever array of number is not defined or is empty
    if (numberArr === null || numberArr === undefined || numberArr.length <= 0) {
        throw new Error("Invalid number array");
    }

    let result = 0;
    numberArr.forEach(function(num) {
        result += num;
    });

    return result / numberArr.length;
}

function parseStringToFloat(stringValue) {
    // Throw an exception when string is not a number
    if (isNaN(stringValue)) {
        throw new Error(stringValue + " is not a number");
    }

    return parseFloat(stringValue);
}

function getValueFromElement(elementId) {
    return document.getElementById(elementId).value;
}

function displayResult(resultAsString) {
    console.log(resultAsString);
    document.getElementById("result-content").style.display = "block";
    document.getElementById("result-content").innerHTML = resultAsString;

    // CHANGES HERE: Adding CSS to output
    document.getElementById("result-content").style.backgroundColor = "lightgrey";
    document.getElementById("result-content").style.borderStyle = "dotted";
    // document.getElementById("result-content").style.margin = "0px 50px 0px 50px"; //top,right,bottom,left
    document.getElementById("result-content").style.overflow = "hidden";
}

function handleOnClickAverageButton(_) {
    try {
        const firstNumberValue = getValueFromElement("first-number");
        const secondNumberValue = getValueFromElement("second-number");
        const thirdNumberValue = getValueFromElement("third-number");

        let numberArr = [
            parseStringToFloat(firstNumberValue),
            parseStringToFloat(secondNumberValue),
            parseStringToFloat(thirdNumberValue)
        ];

        const averageResult = calculateAverage(numberArr);
        displayResult(averageResult);
    } catch (e) {
        // whenever an exception get caught, we will display error message
        displayResult(e.message);
    }
}
