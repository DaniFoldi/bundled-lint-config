const value = 1

function makeValue(param = 1) {
  return param
}

function useMemo(callback) {
  return callback()
}

function useEffect(callback) {
  callback()
}

const items = [ { id: 'a' } ]
const targetId = 'a'

const found = useMemo(() => {
  return items.find(item => item.id === targetId)
})

useEffect(() => {
  const intervalId = setInterval(() => {
    if (intervalId) clearInterval(intervalId)
  }, 1000)
})
