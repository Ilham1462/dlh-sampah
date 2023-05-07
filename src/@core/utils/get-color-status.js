export function getColorStatus(status) {
  if (status === 'Telah Diverifikasi') {
    return 'success'
  } else if (status === 'Belum Diverifikasi') {
    return 'warning'
  } else if (status === 'Revisi') {
    return 'error'
  } else {
    return 'secondary'
  }
}
