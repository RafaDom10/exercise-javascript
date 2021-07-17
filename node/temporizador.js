import { scheduleJob } from 'node-schedule';

scheduleJob('*5/ * 4 * * 4', function () {
  console.log('Executando tarefa 1', new Date().getSeconds());
})