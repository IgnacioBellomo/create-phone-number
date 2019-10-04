const createPhoneNumber = numArr => {
    if (numArr.length !== 10) {
        return -1;
    } else {
        let phoneNumber = "(";
        for (let i = 0; i < numArr.length; i++) {
            if (i < 3) {
                phoneNumber += numArr[i];
            } else if (i === 3) {
                phoneNumber += `) ${numArr[i]}`;
            } else if (i < 6) {
                phoneNumber += numArr[i];
            } else if (i === 6) {
                phoneNumber += `-${numArr[i]}`;
            } else {
                phoneNumber += numArr[i];
            }
        }
        return phoneNumber;
    }
}