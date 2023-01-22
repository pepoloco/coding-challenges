function codingChallenge() {
    //BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). formula
    const markWeigth = 78;
    const markHeight = 1.69;
    const johnWeigth = 92;
    const johnHeigh = 1.95;
    const markBmi = markWeigth / markHeight ** 2;
    const johnBmi = johnWeigth / johnHeigh ** 2;

    let markHigherBMI = markBmi > johnBmi;
    if (markHigherBMI) {
        console.log(markHigherBMI);
    } else {
        console.log(markHigherBMI);
    }
}
codingChallenge();