import app from '../utils/index'

interface githubApiRes {
  content: string
}

class Apis {
  public baseUrl = 'https://api.github.com/repos'
  public sha = '34709373e6157be33748b58344969c318bec9fc1'
  public setResp (githubUrl:string, branch:string = 'master'):string {
    this.baseUrl = this.baseUrl + githubUrl.replace('https://github.com', '').replace(/\/$/, '')
    return this.baseUrl
  }
  // https://api.github.com/repos/Youjingyu/vue-hap-tools/contents/.eslintignore
  public getBlob (path:string):Promise<string> {
    return request(this.baseUrl + '/contents' + path.replace(/^\//, '')).then((res) => {
      return app.globalUtils.base64.decode(res.content)
    })
  }
}

export default new Apis()

function request (url:string):Promise<githubApiRes>{
  return new Promise((resolve, reject) => {
    // wx.request({
    //   url,
    //   dataType: 'json',
    //   success: function(res) {
    //     if (res) {
    //       resolve(res.data)
    //     } else {
    //       reject(new Error('no data received'))
    //     }
    //   },
    //   fail: function(){
    //     reject(new Error('request failed'))
    //   }
    // })
    resolve({
      content: 'Ly8gaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvdXNlci1ndWlkZS9jb25maWd1\ncmluZwoKbW9kdWxlLmV4cG9ydHMgPSB7CiAgcm9vdDogdHJ1ZSwKICBwYXJz\nZXJPcHRpb25zOiB7CiAgICBwYXJzZXI6ICdiYWJlbC1lc2xpbnQnCiAgfSwK\nICBlbnY6IHsKICAgIGJyb3dzZXI6IHRydWUsCiAgfSwKICBleHRlbmRzOiBb\nCiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3RhbmRhcmQvc3RhbmRhcmQv\nYmxvYi9tYXN0ZXIvZG9jcy9SVUxFUy1lbi5tZAogICAgJ3N0YW5kYXJkJwog\nIF0sCiAgLy8gYWRkIHlvdXIgY3VzdG9tIHJ1bGVzIGhlcmUKICBydWxlczog\newogICAgLy8gYWxsb3cgYXN5bmMtYXdhaXQKICAgICdnZW5lcmF0b3Itc3Rh\nci1zcGFjaW5nJzogJ29mZicsCiAgICAvLyBhbGxvdyBkZWJ1Z2dlciBkdXJp\nbmcgZGV2ZWxvcG1lbnQKICAgICduby1kZWJ1Z2dlcic6IHByb2Nlc3MuZW52\nLk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnZXJyb3InIDogJ29mZics\nCiAgICAic2VtaSI6IDAsCiAgICAib25lLXZhciI6IDAKICB9Cn0K'
    })
  })
}