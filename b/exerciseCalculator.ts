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

  const average = (arr: Array<number>) => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

  const rateValue = (avg: number, target: number) => avg/target

  const rate = (rateValue: number, rd: boolean) => {



    if( rateValue < 0.75 ) return rd === true ? "bad you need to exercise more" : 1;
    if( 0.9 < rateValue && rateValue < 1 ) return rd === true ?"not too bad but could be better" : 2;
    if( 1 < rateValue ) return rd === true ? "exelent you are the best" : 3;
    
    else throw new Error('This should be never happened');

    
}

  const calculateExercises = (dailyExerciseHoursArray: number[], b: number): result => {

    

    if(dailyExerciseHoursArray.length === 7) {

    

    return {
        periodLength: dailyExerciseHoursArray.length,
        trainingDays: dailyExerciseHoursArray.filter(deh => deh !== 0).length,
        success: rateValue(average(dailyExerciseHoursArray), b) > 1 ? true : false,
        rating: rate(rateValue(average(dailyExerciseHoursArray), b), false),
        ratingDescription: rate(rateValue(average(dailyExerciseHoursArray), b), true),
        target: b,
        average: average(dailyExerciseHoursArray)
      }
    }

  }

  try {
      console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));

  } catch(error) {
      console.log(error.message);

  }