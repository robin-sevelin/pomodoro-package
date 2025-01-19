const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function startPomodoro() {
  let isWorking = true;

  do {
    if (isWorking) {
      console.log('Dags att fokusera! 25 minuter arbete börjar nu...');
      await sleep(25 * 60 * 1000);
      console.log('Bra jobbat! Ta en kort paus på 5 minuter.');
    } else {
      console.log('Paus! 5 minuter börjar nu...');
      await sleep(5 * 60 * 1000);
      console.log('Pausen är över! Tillbaka till jobbet.');
    }

    isWorking = !isWorking;
  } while (true);
}

startPomodoro();
