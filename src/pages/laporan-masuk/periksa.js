// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import { Box, Breadcrumbs, Button, Card, Chip, IconButton, Link, TextField, Tooltip } from '@mui/material'
import { Icon } from '@iconify/react'
import AppTable from 'src/@core/components/table/AppTable'
import { useMemo } from 'react'
import { limbahB3 } from 'src/@fake-db/table/limbah-b3'
import renderSubRowTableLimbahB3 from 'src/views/pages/pelaporan/SubRowTableLimbahB3'
import CardInfoLaporan from 'src/views/pages/laporan-masuk/CardInfoLaporan'

const PeriksaPage = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row, index) => `${index + 1}`,
        id: 'no',
        header: 'No',
        width: 10
      },
      {
        id: 'jenisLimbah',
        accessorKey: 'jenisLimbah',
        header: 'Jenis Limbah'
      },
      {
        id: 'sumber',
        accessorKey: 'sumber',
        header: 'Sumber'
      },
      {
        id: 'satuan',
        accessorKey: 'satuan',
        header: 'Satuan'
      },
      {
        id: 'aksi',
        header: 'Aksi',
        cell: ({ row }) => (
          <Box sx={{ display: 'flex' }}>
            {row.getCanExpand() && (
              <Tooltip title='Detail Perlakuan' followCursor>
                <IconButton color='primary' onClick={row.getToggleExpandedHandler()}>
                  <Icon icon='mdi:arrow-down-left-bold' />
                </IconButton>
              </Tooltip>
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
        subtitle={
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/laporan-masuk'>
              Laporan Masuk
            </Link>
            <Typography color='text.primary'>Periksa Laporan</Typography>
          </Breadcrumbs>
        }
        title={
          <Typography variant='h5'>
            <Link href='/laporan-masuk/perikas'>Periksa Laporan</Link>
          </Typography>
        }
      />
      <Grid item xs={12}>
        <CardInfoLaporan />
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
            <Box>
              <Button
                sx={{ mr: 4, mb: 2 }}
                color='primary'
                variant='contained'
                startIcon={<Icon icon='mdi:check-all' fontSize={20} />}
              >
                Verifikasi
              </Button>
              <Button
                sx={{ mr: 4, mb: 2 }}
                color='error'
                variant='contained'
                startIcon={<Icon icon='mdi:alert-circle-outline' fontSize={20} />}
              >
                Revisi
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField size='small' sx={{ mr: 4, mb: 2 }} placeholder='Cari...' onChange={() => {}} />
            </Box>
          </Box>
          <AppTable
            columns={columns}
            initialData={limbahB3}
            disablePagination
            getRowCanExpand={() => true}
            renderSubComponent={renderSubRowTableLimbahB3}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

PeriksaPage.acl = {
  subject: '/laporan-masuk/periksa'
}

export default PeriksaPage
