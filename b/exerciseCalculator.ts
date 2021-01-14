interface result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number | string;
    ratingDescription: number | string;
    target: number;
    average: number;
  }

  interface calculateExercisesValues {
      exerciseDailyHours: Array<number>;
      target: number;
  }

  const parseArgumentsForEC = (args: Array<string>): calculateExercisesValues => {

    const argsLenght = args.length;
    console.log(argsLenght);
    console.log(args);

    if (argsLenght > 1) {
        return {
            exerciseDailyHours: [Number(args[3]), Number(args[4]), Number(args[5]), Number(args[6]), Number(args[7]), 
            Number(args[8]), Number(args[9]), Number(args[10]), Number(args[11]) ],
            target: Number(args[2])
          
        };
      } else {
        throw new Error('Provided values were not numbers!');
      }
    };

  const average = (arr: Array<number>) => {
        console.log(arr.reduce( ( p, c ) => p + c, 0 ) / arr.length);
        return arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  };

  const rateValue = (avg: number, target: number) => {
        console.log(avg/target);
        return avg/target;
  };
  const rate = (rateValue: number, rd: boolean) => {



    if( rateValue < 0.75 ) return rd === true ? "bad you need to exercise more" : 1;
    if( 0.75 < rateValue && rateValue < 1 ) return rd === true ?"not too bad but could be better" : 2;
    if( 1 < rateValue ) return rd === true ? "exelent you are the best" : 3;
    
    else throw new Error('This should be never happened');

    
};

  export const calculateExercises = (dailyExerciseHoursArray: number[], b: number): result => {

    

    return {
        periodLength: dailyExerciseHoursArray.length,
        trainingDays: dailyExerciseHoursArray.filter(deh => deh !== 0).length,
        success: rateValue(average(dailyExerciseHoursArray), b) > 1 ? true : false,
        rating: rate(rateValue(average(dailyExerciseHoursArray), b), false),
        ratingDescription: rate(rateValue(average(dailyExerciseHoursArray), b), true),
        target: b,
        average: average(dailyExerciseHoursArray)
      };

  };

  try {
    const { exerciseDailyHours, target } = parseArgumentsForEC(process.argv);

    console.log(exerciseDailyHours);
    console.log(target);
     console.log(calculateExercises(exerciseDailyHours, target));

  } catch(error) { // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(error.message);

  }