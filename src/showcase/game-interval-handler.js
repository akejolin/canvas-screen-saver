export const removeInterval = intervalName => {
  if (window.hasOwnProperty('gameIntervals')) {
    if (window.gameIntervals.hasOwnProperty(intervalName)) {
      clearInterval(window.gameIntervals[intervalName])
    }
  }
  return null
}

export const addInterval = (intervalName, time, callback = () => {}) => {
  if (!window.gameIntervals) {
    window.gameIntervals = {}
  }
  removeInterval(intervalName)
  window.gameIntervals[intervalName] = setInterval(() => {
    callback()
  }, Number(time))
  return null
}

export const clearAllIntervals = () => {
  if (!window.gameIntervals) {
    return null
  }
  const keys = Object.keys(window.gameIntervals)
  for (const key of keys) {
    removeInterval(key)
  }
  return null
}