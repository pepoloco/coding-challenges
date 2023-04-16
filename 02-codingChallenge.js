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
    console.log(
      `Mark's BMI ${markBmi.toFixed(2)} is higher than John's ${johnBmi.toFixed(
        2
      )}!`
    );
  } else {
    console.log(
      `Mark's BMI ${markBmi.toFixed(2)} is higher than John's ${johnBmi.toFixed(
        2
      )}!`
    );
  }
}
codingChallenge();
/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/
