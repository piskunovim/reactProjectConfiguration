export default function serviceStatus () {
  const startedTime = new Date()

  return {
      started: startedTime,
      uptime: (Date.now() - Number(startedTime)) / 1000
  }
}