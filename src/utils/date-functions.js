export function getMonthName(quarter, month) {
  const monthNames = [
    ['Januari', 'Februari', 'Maret'],
    ['April', 'Mei', 'Juni'],
    ['Juli', 'Agustus', 'September'],
    ['Oktober', 'November', 'Desember']
  ]

  return monthNames[quarter - 1][month - 1]
}
