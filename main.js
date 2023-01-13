document.addEventListener("DOMContentLoaded", function(_) {
    document.getElementById("average-button").addEventListener("click", handleOnClickAverageButton)
});


function calculateAverage(intArr) {
    if (intArr === null || intArr === undefined || intArr.length <= 0) {
        throw new Error("Invalid number array");
    }

    let result = 0;
    intArr.forEach(function(num) {
        result += num;
    });

    return result / intArr.length;
}

function parseStringToFloat(stringValue) {
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
    document.getElementById("result-content").innerHTML = resultAsString;
}

function handleOnClickAverageButton(_) {
    try {
        const firstNumberValue = getValueFromElement("first-number");
        const secondNumberValue = getValueFromElement("second-number");
        const thirdNumberValue = getValueFromElement("third-number");

        let intArr = [
            parseStringToFloat(firstNumberValue),
            parseStringToFloat(secondNumberValue),
            parseStringToFloat(thirdNumberValue)
        ];

        const averageResult = calculateAverage(intArr);
        displayResult(averageResult);
    } catch (e) {
        displayResult(e.message);
    }
}
