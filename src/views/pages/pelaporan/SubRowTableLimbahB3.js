import PropTypes from 'prop-types'
import { Box, Card, IconButton, Tooltip } from '@mui/material'
import React, { useMemo } from 'react'
import { perlakuanLimbahB3 } from 'src/@fake-db/table/limbah-b3'
import AppTable from 'src/@core/components/table/AppTable'
import { getMonthName } from 'src/utils/date-functions'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

const renderSubRowTableLimbahB3 = ({ row }) => <SubRowTableLimbahB3 row={row} />

const SubRowTableLimbahB3 = ({ row }) => {
  const router = useRouter()

  const columns = useMemo(
    () => [
      {
        accessorFn: (row, index) => `${index + 1}`,
        id: 'no',
        header: 'No'
      },
      {
        id: 'perlakuan',
        accessorKey: 'perlakuan',
        header: 'Perlakuan'
      },
      {
        id: 'saldo',
        accessorKey: 'saldo',
        header: 'Saldo'
      },
      {
        id: 'bulan1',
        accessorKey: 'bulan1',
        header: `${getMonthName(1, 1)}`
      },
      {
        id: 'bulan2',
        accessorKey: 'bulan2',
        header: `${getMonthName(1, 2)}`
      },
      {
        id: 'bulan3',
        accessorKey: 'bulan3',
        header: `${getMonthName(1, 3)}`
      },
      {
        id: 'total',
        accessorKey: 'total',
        header: 'Total'
      },
      {
        id: 'keterangan',
        accessorKey: 'keterangan',
        header: 'Keterangan'
      },
      {
        id: 'kodeManifest',
        accessorKey: 'kodeManifest',
        header: 'Manifest'
      },

      {
        id: 'aksi',
        header: 'Aksi',
        cell: ({ row: { original: data } }) => (
          <Box sx={{ display: 'flex' }}>
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
    <Card>
      <AppTable
        stickyHeader
        size='small'
        columns={columns}
        initialData={perlakuanLimbahB3}
        disablePagination
        columnVisibility={{ aksi: router.pathname === '/pelaporan/limbah-b3' ? true : false }}
      />
    </Card>
  )
}

SubRowTableLimbahB3.propTypes = {
  row: PropTypes.any
}

export default renderSubRowTableLimbahB3
