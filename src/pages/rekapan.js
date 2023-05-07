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
        id: 'triwulan',
        header: 'Triwulan',
        accessorKey: 'triwulan'
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
            <Tooltip title='Ubah' followCursor>
              <IconButton color='info'>
                <Icon icon='mdi:pencil-outline' />
              </IconButton>
            </Tooltip>
            <Tooltip title='Hapus' followCursor>
              <IconButton color='error'>
                <Icon icon='mdi:delete-outline' />
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
