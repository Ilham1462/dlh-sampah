// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import { Box, Button, Card, Chip, IconButton, Link, TextField, Tooltip } from '@mui/material'
import PelaporanCard from 'src/views/pages/pelaporan/PelaporanCard'
import { Icon } from '@iconify/react'
import NextLink from 'next/link'
import AppTable from 'src/@core/components/table/AppTable'
import { limbahB3 } from 'src/@fake-db/table/limbah-b3'
import { useMemo } from 'react'
import { laporanMasuk } from 'src/@fake-db/table/laporan-masuk'
import { getColorStatus } from 'src/@core/utils/get-color-status'
import { laporan } from 'src/@fake-db/table/laporan'
import ModalCreateLaporan from '../../views/pages/pelaporan/ModalCreateLaporan'

const PelaporanPage = () => {
  const columns = useMemo(
    () => [
      {
        id: 'no',
        header: 'No',
        width: 10,
        accessorFn: (row, index) => `${index + 1}`
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
            {data.status === 'Draft' && (
              <>
                <Tooltip title='Lanjutkan' followCursor>
                  <IconButton color='info' LinkComponent={NextLink} href='/pelaporan/limbah-b3'>
                    <Icon icon='mdi:arrow-right-bold-circle-outline' />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Hapus' followCursor>
                  <IconButton color='error'>
                    <Icon icon='mdi:delete-outline' />
                  </IconButton>
                </Tooltip>
              </>
            )}
            {data.status === 'Belum Diverifikasi' && (
              <Tooltip title='Review' followCursor>
                <IconButton color='primary'>
                  <Icon icon='mdi:file-find-outline' />
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
            <Link href='https://github.com/timolins/react-hot-toast' target='_blank'>
              Pelaporan
            </Link>
          </Typography>
        }
      />
      <Grid item xs={12} sm={6} md={4}>
        <PelaporanCard title=''>
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              '& svg': { mb: 2 }
            }}
          >
            <Icon icon='mdi:bottle-tonic-skull' fontSize='2rem' />
            <Typography sx={{ mb: 4, fontWeight: 600 }}>Limbah B3</Typography>
            <Typography sx={{ mb: 3 }}>
              Sisa usaha dan/atau kegiatan yang mengandung bahan beracun dan berbahaya (B3)
            </Typography>
            <ModalCreateLaporan title={'Limbah B3'} />
          </Box>
        </PelaporanCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PelaporanCard title=''>
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              '& svg': { mb: 2 }
            }}
          >
            <Icon icon='mdi:delete-empty' fontSize='2rem' />
            <Typography sx={{ mb: 4, fontWeight: 600 }}>Sampah Spesifik</Typography>
            <Typography sx={{ mb: 3 }}>
              Sampah yang karena sifat, konsentrasi dan/atau volumenya memerlukan pengelolaan khusus
            </Typography>
            <ModalCreateLaporan title={'Sampah Spesifik'} />
          </Box>
        </PelaporanCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PelaporanCard title=''>
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              '& svg': { mb: 2 }
            }}
          >
            <Icon icon='mdi:liquid-spot' fontSize='2rem' />
            <Typography sx={{ mb: 4, fontWeight: 600 }}>Sampah Domestik</Typography>
            <Typography sx={{ mb: 3 }}>
              Sampah dari kegiatan rumah tangga, bangunan perdagangan, perkantoran dan sarana sejenis
            </Typography>
            <ModalCreateLaporan title={'Sampah Domestik'} />
          </Box>
        </PelaporanCard>
      </Grid>
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
          <AppTable columns={columns} initialData={laporan} disablePagination />
        </Card>
      </Grid>
    </Grid>
  )
}

PelaporanPage.acl = {
  subject: '/pelaporan'
}

export default PelaporanPage
