interface calculateBmiValues {
    value1: number;
    value2: number;
  }

  
const parseArguments = (args: Array<string>): calculateBmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
    
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
          value1: Number(args[2]),
          value2: Number(args[3])
        }
      } else {
        throw new Error('Provided values were not numbers!');
      }
    }

   export const calculateBmi = (a: number, b: number) => {

        const bmi = (b/(Math.pow(a/100,2)))

        if( bmi < 15 ) return "Very severely underweight";
        if( 15 < bmi && bmi < 17 ) return "Severely underweight";
        if( 17 < bmi && bmi < 18.5 ) return "underweight";
        if( 18.5 < bmi && bmi < 25 ) return "Normal (healthy weight)";
        if( 25 < bmi && bmi < 30 ) return "Overweight";
        if( 30 < bmi && bmi < 35 ) return "Obese Class I (Moderately obese)";
        if( 35 < bmi && bmi < 40 ) return "Obese Class II (Severely obese)";
        if( bmi > 40 ) return "Obese Class III (Very severely obese)";
        
        else throw new Error('This should be never happened');

        
    }


try {
    const { value1, value2 } = parseArguments(process.argv);
    console.log(calculateBmi(value1, value2));
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }