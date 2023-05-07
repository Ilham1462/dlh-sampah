// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import { Box, Button, Card, Chip, IconButton, Link, TextField, Tooltip } from '@mui/material'
import { Icon } from '@iconify/react'
import NextLink from 'next/link'
import AppTable from 'src/@core/components/table/AppTable'
import { laporanMasuk } from 'src/@fake-db/table/laporan-masuk'
import { useMemo } from 'react'
import { getColorStatus } from 'src/@core/utils/get-color-status'

const LaporanMasukPage = () => {
  const columns = useMemo(
    () => [
      {
        id: 'no',
        header: 'No',
        width: 10,
        accessorFn: (row, index) => `${index + 1}`
      },
      {
        id: 'perusahaan',
        accessorKey: 'perusahaan',
        header: 'Perusahaan'
      },
      {
        id: 'jenisLaporan',
        accessorKey: 'jenisLaporan',
        header: 'Jenis Laporan'
      },
      {
        id: 'Triwulan',
        header: 'Triwulan',
        accessorFn: (row, index) => `${row.triwulan} - ${row.tahun}`
      },
      {
        id: 'status',
        header: 'Status',
        cell: ({ row: { original: data } }) => (
          <Chip
            skin='light'
            size='small'
            label={data.status}
            color={getColorStatus(data.status)}
            sx={{ height: 20, mt: 0.4, fontSize: '0.75rem', fontWeight: 600 }}
          />
        )
      },
      {
        id: 'aksi',
        header: 'Aksi',
        cell: ({ row: { original: data } }) => (
          <Box sx={{ display: 'flex' }}>
            {data.status === 'Belum Diverifikasi' && (
              <Tooltip title='Periksa' followCursor>
                <IconButton color='info' LinkComponent={NextLink} href='/laporan-masuk/periksa'>
                  <Icon icon='mdi:arrow-right-bold-circle-outline' />
                </IconButton>
              </Tooltip>
            )}

            {data.status === 'Telah Diverifikasi' && (
              <>
                <Tooltip title='Review' followCursor>
                  <IconButton color='primary'>
                    <Icon icon='mdi:file-find-outline' />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Download TTE' followCursor>
                  <IconButton color='success'>
                    <Icon icon='mdi:file-download-outline' />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </Box>
        )
      }
    ],

    []
  )

  return (
    <Grid container spacing={6}>
      <PageHeader
        subtitle=''
        title={
          <Typography variant='h5'>
            <Link href='/laporan-masuk'>Laporan Masuk</Link>
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Card>
          <Box
            sx={{
              p: 5,
              pb: 3,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box></Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField size='small' sx={{ mr: 4, mb: 2 }} placeholder='Cari...' onChange={() => {}} />
            </Box>
          </Box>
          <AppTable columns={columns} initialData={laporanMasuk} disablePagination getRowCanExpand={() => true} />
        </Card>
      </Grid>
    </Grid>
  )
}

LaporanMasukPage.acl = {
  subject: '/laporan-masuk'
}

export default LaporanMasukPage
