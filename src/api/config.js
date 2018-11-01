const config = [{
  name: 'loadProvince',
  url: '/bankAccount/loadProvince',
  method: 'GET'
}, {
  name: 'getCity',
  url: '/bankAccount/loadCity/{provinceId}',
  method: 'GET'
}]

export default config
