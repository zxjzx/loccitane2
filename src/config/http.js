const apiMethods = {
  methods: {
    apiGet (url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, data).then(response => {
          resolve(response.data)
        }, error => {
          reject(error)
          bus.$message.warning('请求超时，请检查网络')
        })
      })
    },

    apiPost (url, data) {
      return new Promise((resolve, reject) => {
        console.log(url)
        axios.post(url, data).then(response => {
          resolve(response.data)
        }).catch((response) => {
          console.log('f', response)
          resolve(response)
          bus.$message({
            message: '请求超时，请检查网络',
            type: 'warning'
          })
        })
      })
    }

  }
}

export default apiMethods
