module.exports = [
  {
    name: 'My Account', icon: 'el-icon-third-location', id: 'basic', sub: [
      {name: 'login', icon: 'el-icon-third-lock', componentName: 'login'},
      {name: 'ChangePassword', icon: 'el-icon-third-lock', componentName: 'changePassword'},
      {name: 'Logout', icon: 'el-icon-third-log_out', componentName: 'logout'}
    ]
  },
  {
    name: 'User', icon: 'el-icon-third-location', id: 'user', sub: [
      {name: 'user-list', icon: '', componentName: 'user-list'},
      {name: 'user-add', icon: '', componentName: 'user-add'},
    ]
  },
  {
    name: 'Home', icon: 'el-icon-third-shouye', id: 'home',
    sub: [{
      name: 'mock table',
      icon: 'el-icon-third-lock',
      componentName: 'getMyTable'
    }, {
      name: 'html-css',
      icon: 'el-icon-third-lock',
      componentName: 'html-css'
    }, {
      name: 'html-css-js',
      icon: 'el-icon-third-lock',
      componentName: 'html-css-js'
    }, {
      name: 'html-css-flex',
      icon: 'el-icon-third-lock',
      componentName: 'html-css-flex'
    }]
  },
  {
    name: 'Shop', icon: 'el-icon-third-location', id: 'shop',
    sub: [{
      name: 'shop',
      icon: 'el-icon-third-lock',
      componentName: 'shop'
    }]
  },
  {
    name: 'Member', icon: 'el-icon-third-Member', id: 'member',
    sub: []
  },
  {
    name: 'Staff',
    icon: 'el-icon-third-staff',
    id: 'staff',
    sub: []
  }, {
    name: 'Product',
    icon: 'el-icon-third-product',
    id: 'product',
    sub: []
  }, {
    name: 'Booking',
    icon: 'el-icon-third-booking',
    id: 'booking',
    sub: []
  }, {
    name: 'Commission',
    icon: 'el-icon-third-commission',
    id: 'commission',
    sub: []
  }, {
    name: 'Sales',
    icon: 'el-icon-third-sales',
    id: 'sales',
    sub: []
  }, {
    name: 'Prepaid',
    icon: 'el-icon-third-icon_prepaid_details',
    id: 'prepaid',
    sub: []
  }, {
    name: 'Payroll',
    icon: 'el-icon-third-payroll',
    id: 'payroll',
    sub: []
  }, {
    name: 'Inventory',
    icon: 'el-icon-third-inventory',
    id: 'inventory',
    sub: []
  }, {
    name: 'Loyalty',
    icon: 'el-icon-third-loyalty',
    id: 'loyalty',
    sub: []
  }, {
    name: 'Discount',
    icon: 'el-icon-third-discount',
    id: 'discount',
    sub: []
  }, {
    name: 'Report',
    icon: 'el-icon-third-report',
    id: 'report',
    sub: []
  }, {
    name: 'System Configuration',
    icon: 'el-icon-third-SystemSettings',
    id: 'systemConfig',
    sub: []
  }, {
    name: 'System Settings',
    icon: 'el-icon-third-xitongpeizhi',
    id: 'systemSet',
    sub: []
  }]
