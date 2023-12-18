import fetch from 'node-fetch';
import fs from 'fs';
import inquirer from 'inquirer';

async function getUserInputs() {
  const questions = [
    {
      type: 'input',
      name: 'url',
      message: 'Enter endpoint to benchmark:',
    },
    {
      type: 'input',
      name: 'speaker',
      message: 'Enter speaker number:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter text to synthesize:',
    },
    {
      type: 'list',
      name: 'benchmarkType',
      message: 'Select benchmark type:',
      choices: ['Easy', 'Medium', 'Hard', 'Extreme', 'Ultra', 'Hyper', 'All'],
    },
  ];

  const answers = await inquirer.prompt(questions);
  const { url, speaker, text, benchmarkType } = answers;

  const urlWithParams = `${url}?voice=${speaker}&text=${text}`;

  switch (benchmarkType) {
    case 'Easy':
      await easyBenchmark(urlWithParams);
      break;
    case 'Medium':
      await mediumBenchmark(urlWithParams);
      break;
    case 'Hard':
      await hardBenchmark(urlWithParams);
      break;
    case 'Extreme':
      await extremeBenchmark(urlWithParams);
      break;
    case 'Ultra':
      await ultraBenchmark(urlWithParams);
      break;
    case 'Hyper':
      await hyperBenchmark(urlWithParams);
      break;
    case 'All':
      await runAllBenchmarks(urlWithParams);
      break;
    default:
      console.log('Invalid benchmark type');
  }
}

async function runAllBenchmarks(url) {
  console.log(`Running All benchmarks...`);
  await easyBenchmark(url);
  await mediumBenchmark(url);
  await hardBenchmark(url);
  await extremeBenchmark(url);
  await ultraBenchmark(url);
  await hyperBenchmark(url);
}

getUserInputs();

async function easyBenchmark(urlWithParams) {
  console.log(`Benchmarking... 1 request/second, 10 times`);
  const repeat = 10;
  let totalTime = 0;

  for (let i = 0; i < repeat; i++) {
    setTimeout(async () => {
      const startTime = Date.now();
      const response = await fetch(urlWithParams);
      const audioBuffer = await response.buffer();
      const audioLength = audioBuffer.length;
      const fileName = `synthesized_${i}.wav`;
      fs.writeFileSync(fileName, audioBuffer);
      const endTime = Date.now();
      const requestTime = endTime - startTime;
      totalTime += requestTime;
      console.log(`Synthesized ${audioLength} bytes in ${requestTime}ms`);
      
      if (i === repeat - 1) {
        const averageTime = totalTime / repeat;
        console.log(`Average request time: ${averageTime}ms`);
      }
    }, i * 1000);
  }
}

async function mediumBenchmark(urlWithParams) {
    console.log(`Benchmarking... 2 requests/second, 10 times`);
    const repeat = 10;
    let totalTime = 0;
  
    for (let i = 0; i < repeat; i++) {
      setTimeout(async () => {
        const startTime = Date.now();
        const response = await fetch(urlWithParams);
        const audioBuffer = await response.buffer();
        const audioLength = audioBuffer.length;
        const fileName = `synthesized_${i}.wav`;
        fs.writeFileSync(fileName, audioBuffer);
        const endTime = Date.now();
        const requestTime = endTime - startTime;
        totalTime += requestTime;
        console.log(`Synthesized ${audioLength} bytes in ${requestTime}ms`);
        
        if (i === repeat - 1) {
          const averageTime = totalTime / repeat;
          console.log(`Average request time: ${averageTime}ms`);
        }
      }, i * 500);
    }
  }

  async function hardBenchmark(urlWithParams) {
    console.log(`Benchmarking... 5 requests/second, 10 times`);
    const repeat = 10;
    let totalTime = 0;
  
    for (let i = 0; i < repeat; i++) {
      setTimeout(async () => {
        const startTime = Date.now();
        const response = await fetch(urlWithParams);
        const audioBuffer = await response.buffer();
        const audioLength = audioBuffer.length;
        const fileName = `synthesized_${i}.wav`;
        fs.writeFileSync(fileName, audioBuffer);
        const endTime = Date.now();
        const requestTime = endTime - startTime;
        totalTime += requestTime;
        console.log(`Synthesized ${audioLength} bytes in ${requestTime}ms`);
        
        if (i === repeat - 1) {
          const averageTime = totalTime / repeat;
          console.log(`Average request time: ${averageTime}ms`);
        }
      }, i * 200);
    }
  }

  async function extremeBenchmark(urlWithParams) {
    console.log(`Benchmarking... 10 requests/second, 10 times`);
    const repeat = 10;
    let totalTime = 0;
  
    for (let i = 0; i < repeat; i++) {
      setTimeout(async () => {
        const startTime = Date.now();
        const response = await fetch(urlWithParams);
        const audioBuffer = await response.buffer();
        const audioLength = audioBuffer.length;
        const fileName = `synthesized_${i}.wav`;
        fs.writeFileSync(fileName, audioBuffer);
        const endTime = Date.now();
        const requestTime = endTime - startTime;
        totalTime += requestTime;
        console.log(`Synthesized ${audioLength} bytes in ${requestTime}ms`);
        
        if (i === repeat - 1) {
          const averageTime = totalTime / repeat;
          console.log(`Average request time: ${averageTime}ms`);
        }
      }, i * 100);
    }
  }

  async function ultraBenchmark(urlWithParams) {
    console.log(`Benchmarking... 50 requests/second, 10 times`);
    const repeat = 10;
    let totalTime = 0;
  
    for (let i = 0; i < repeat; i++) {
      setTimeout(async () => {
        const startTime = Date.now();
        const response = await fetch(urlWithParams);
        const audioBuffer = await response.buffer();
        const audioLength = audioBuffer.length;
        const fileName = `synthesized_${i}.wav`;
        fs.writeFileSync(fileName, audioBuffer);
        const endTime = Date.now();
        const requestTime = endTime - startTime;
        totalTime += requestTime;
        console.log(`Synthesized ${audioLength} bytes in ${requestTime}ms`);
        
        if (i === repeat - 1) {
          const averageTime = totalTime / repeat;
          console.log(`Average request time: ${averageTime}ms`);
        }
      }, i * 20);
    }
  }

  async function hyperBenchmark(urlWithParams) {
    console.log(`Benchmarking... 100 requests/second, 10 times`);
    const repeat = 10;
    let totalTime = 0;
  
    for (let i = 0; i < repeat; i++) {
      setTimeout(async () => {
        const startTime = Date.now();
        const response = await fetch(urlWithParams);
        const audioBuffer = await response.buffer();
        const audioLength = audioBuffer.length;
        const fileName = `synthesized_${i}.wav`;
        fs.writeFileSync(fileName, audioBuffer);
        const endTime = Date.now();
        const requestTime = endTime - startTime;
        totalTime += requestTime;
        console.log(`Synthesized ${audioLength} bytes in ${requestTime}ms`);
        
        if (i === repeat - 1) {
          const averageTime = totalTime / repeat;
          console.log(`Average request time: ${averageTime}ms`);
        }
      }, i * 10);
    }
  }