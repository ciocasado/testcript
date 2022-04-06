let _: any

const init = () => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
  document.head.appendChild(script)

  return new Promise<void>((resolve, reject) => {
    script.onload = () => {
      _ = window['_']
      resolve()
    }
    script.onerror = err => {
      document.head.removeChild(script)
      reject(err)
    }
  })
}

const isWorking = () => {
  typeof _ === 'undefined'
    ? console.log('CD API is not working')
    : console.log('cdApi is working', _)
}


module.exports.biocatchManager = {
  init,
  isWorking
}
