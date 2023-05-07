// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import PageHeader from 'src/@core/components/page-header'
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Tooltip
} from '@mui/material'
import PelaporanCard from 'src/views/pages/pelaporan/PelaporanCard'
import { Icon } from '@iconify/react'
import { jenisLimbahB3, perlakuanLimbah } from 'src/@fake-db/autocomplete'
import { Fragment, useMemo, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import CleaveWrapper from 'src/@core/styles/libs/react-cleave'

import { useForm, useFieldArray } from 'react-hook-form'
import { getMonthName } from 'src/utils/date-functions'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import AppTable from 'src/@core/components/table/AppTable'
import Chip from 'src/@core/components/mui/chip'
import { limbahB3 } from 'src/@fake-db/table/limbah-b3'
import renderSubRowTableLimbahB3 from 'src/views/pages/pelaporan/SubRowTableLimbahB3'
import CardInfoLaporanMinimal from 'src/views/pages/laporan-masuk/CardInfoLaporanMinimal'
import NextLink from 'next/link'

const PelaporanLimbahB3Page = () => {
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
        subtitle={
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/laporan-masuk'>
              Pelaporan
            </Link>
            <Typography color='text.primary'>Limbah B3</Typography>
          </Breadcrumbs>
        }
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/timolins/react-hot-toast' target='_blank'>
              Pelaporan Limbah B3
            </Link>
          </Typography>
        }
      />
      <Grid item xs={12}>
        <CardInfoLaporanMinimal />
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
            <Button
              LinkComponent={NextLink}
              href={'/pelaporan/limbah-b3/create'}
              sx={{ mr: 4, mb: 2 }}
              color='primary'
              variant='outlined'
              startIcon={<Icon icon='mdi:plus' fontSize={20} />}
            >
              Tambah Item
            </Button>
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

PelaporanLimbahB3Page.acl = {
  subject: '/pelaporan/limbah-b3'
}

export default PelaporanLimbahB3Page
