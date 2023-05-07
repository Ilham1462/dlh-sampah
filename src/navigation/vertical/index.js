const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
      subject: '/home'
    },
    {
      title: 'Pelaporan',
      path: '/pelaporan',
      icon: 'mdi:file-document-edit-outline',
      subject: '/pelaporan'
    },
    {
      title: 'Laporan Masuk',
      path: '/laporan-masuk',
      icon: 'mdi:file-download-outline',
      subject: '/laporan-masuk'
    },
    {
      title: 'Rekapan',
      path: '/rekapan',
      icon: 'mdi:file-document-check-outline',
      subject: '/rekapan'
    },

    // {
    //   title: 'Perusahaan',
    //   path: '/perusahaan',
    //   icon: 'mdi:factory',
    //   subject: '/perusahaan'
    // },
    {
      title: 'Pengguna',
      path: '/pengguna',
      icon: 'mdi:account-multiple-outline',
      subject: '/pengguna'
    }
  ]
}

export default navigation
