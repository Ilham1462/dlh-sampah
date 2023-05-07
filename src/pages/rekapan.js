// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import { Box, Button, Card, IconButton, Link, TextField, Tooltip } from '@mui/material'
import { useMemo } from 'react'
import AppTable from 'src/@core/components/table/AppTable'
import { Icon } from '@iconify/react'
import { rekapan } from 'src/@fake-db/table/rekapan'

const RekapanPage = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row, index) => `${index + 1}`,
        id: 'no',
        header: 'No',
        width: 10
      },
      {
        id: 'perusahaan',
        header: 'Perusahaan',
        accessorKey: 'perusahaan'
      },
      {
        id: 'jenisLaporan',
        header: 'Jenis Laporan',
        accessorKey: 'jenisLaporan'
      },
      {
        id: 'Triwulan',
        header: 'Triwulan',
        accessorFn: (row, index) => `${row.triwulan} (${row.tahun})`
      },
      {
        id: 'aksi',
        header: 'Aksi',
        cell: ({ row }) => (
          <Box sx={{ display: 'flex' }}>
            <Tooltip title='Export Neraca' followCursor>
              <IconButton color='primary'>
                <Icon icon='mdi:file-download-outline' />
              </IconButton>
            </Tooltip>
            <Tooltip title='Download TTE' followCursor>
              <IconButton color='success'>
                <Icon icon='mdi:file-download-outline' />
              </IconButton>
            </Tooltip>
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
            <Link href='/rekapan'>Rekapan</Link>
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
          <AppTable columns={columns} initialData={rekapan} disablePagination />
        </Card>
      </Grid>
    </Grid>
  )
}

RekapanPage.acl = {
  subject: '/rekapan'
}

export default RekapanPage
