declare module 'node-cron' {
    export type CronJob = any;
    export function scheduleJob(cronExpression: string, func: () => void): CronJob;
  }
  