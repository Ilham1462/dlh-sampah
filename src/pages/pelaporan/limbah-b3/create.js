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
  TextField
} from '@mui/material'
import PelaporanCard from 'src/views/pages/pelaporan/PelaporanCard'
import { Icon } from '@iconify/react'
import { jenisLimbahB3, perlakuanLimbah } from 'src/@fake-db/autocomplete'
import { Fragment, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import CleaveWrapper from 'src/@core/styles/libs/react-cleave'

import { useForm, useFieldArray } from 'react-hook-form'
import { getMonthName } from 'src/utils/date-functions'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const CreateLimbahB3Page = () => {
  const router = useRouter()
  const [triwulanValue, setTriwulanValue] = useState('1')

  const handleTriwulanChange = event => {
    setTriwulanValue(event.target.value)
  }

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      fields: [{ perlakuan: '', saldo: 0, bulan1: 0, bulan2: 0, bulan3: 0, keterangan: '', kodeManifest: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields'
  })

  function onSubmit(data) {
    console.log(data.fields)
  }

  return (
    <Grid container spacing={6}>
      <PageHeader
        subtitle={
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' href='/pelaporan'>
              Pelaporan
            </Link>
            <Link underline='hover' color='inherit' href='/pelaporan/limbah-b3'>
              Limbah B3
            </Link>
            <Typography color='text.primary'>Tambah</Typography>
          </Breadcrumbs>
        }
        title={
          <Typography variant='h5'>
            <Link href='https://github.com/timolins/react-hot-toast' target='_blank'>
              Tambah Limbah B3
            </Link>
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  Jenis Limbah B3
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  startIcon={<Icon icon='mdi:arrow-left' />}
                  variant='outlined'
                  color='secondary'
                  onClick={() => {
                    router.push('/pelaporan/limbah-b3')
                  }}
                  sx={{ mr: 3 }}
                >
                  Kembali
                </Button>
                <Button
                  variant='contained'
                  startIcon={<Icon icon='mdi:check' />}
                  onClick={() => {
                    toast.success('Item berhasil disimpan')
                    router.push('/pelaporan/limbah-b3')
                  }}
                >
                  Simpan
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor='jenisLimbah' sx={{ mb: 2, fontSize: '.85rem' }}>
                  Jenis Limbah
                </InputLabel>
                <Autocomplete
                  options={jenisLimbahB3}
                  id='jenisLimbah'
                  getOptionLabel={option => option.title}
                  renderInput={params => <TextField {...params} placeholder='Pilih jenis limbah' />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor='sumber' sx={{ mb: 2, fontSize: '.85rem' }}>
                  Sumber
                </InputLabel>
                <TextField fullWidth id='sumber' type='text' placeholder='Excavator, Dump Truck, dll' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor='satuan' sx={{ mb: 2, fontSize: '.85rem' }}>
                  Satuan
                </InputLabel>
                <TextField id='satuan' fullWidth type='text' placeholder='Kg' />
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ mb: '0 !important' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  Detail Perlakuan
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {fields.map((field, index) => (
                  <Card key={field.id} sx={{ mt: index === 0 ? 0 : 8 }}>
                    {/* <CardHeader
                      title={`Perlakuan ${index + 1}`}
                      action={
                        <IconButton aria-label='capture screenshot'>
                          <Icon icon='mdi:camera-iris' />
                        </IconButton>
                      }
                    /> */}
                    <CardContent>
                      <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                          <InputLabel htmlFor='perlakuan' sx={{ mb: 2, fontSize: '.85rem' }}>
                            Perlakuan
                          </InputLabel>
                          <Autocomplete
                            options={perlakuanLimbah}
                            id='perlakuan'
                            getOptionLabel={option => option.title}
                            renderInput={params => <TextField placeholder='Pilih perlakuan' {...params} />}
                          />
                        </Grid>
                        <Grid item xs={0} md={6}></Grid>
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor='saldo' sx={{ mb: 2, fontSize: '.85rem' }}>
                            Bulan Sebelumnya (Saldo)
                          </InputLabel>
                          <CleaveWrapper>
                            <Cleave
                              id='saldo'
                              placeholder='0'
                              options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand',
                                numeralDecimalMark: ',',
                                delimiter: '.'
                              }}
                            />
                          </CleaveWrapper>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor='bulan1' sx={{ mb: 2, fontSize: '.85rem' }}>
                            {getMonthName(triwulanValue, 1)}
                          </InputLabel>
                          <CleaveWrapper>
                            <Cleave
                              id='bulan1'
                              placeholder='0'
                              options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand',
                                numeralDecimalMark: ',',
                                delimiter: '.'
                              }}
                            />
                          </CleaveWrapper>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor='bulan2' sx={{ mb: 2, fontSize: '.85rem' }}>
                            {getMonthName(triwulanValue, 2)}
                          </InputLabel>
                          <CleaveWrapper>
                            <Cleave
                              id='bulan2'
                              placeholder='0'
                              options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand',
                                numeralDecimalMark: ',',
                                delimiter: '.'
                              }}
                            />
                          </CleaveWrapper>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <InputLabel htmlFor='bulan3' sx={{ mb: 2, fontSize: '.85rem' }}>
                            {getMonthName(triwulanValue, 3)}
                          </InputLabel>
                          <CleaveWrapper>
                            <Cleave
                              id='bulan3'
                              placeholder='0'
                              options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand',
                                numeralDecimalMark: ',',
                                delimiter: '.'
                              }}
                            />
                          </CleaveWrapper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel htmlFor='keterangan' sx={{ mb: 2, fontSize: '.85rem' }}>
                            Keterangan
                          </InputLabel>
                          {/* <TextField fullWidth multiline rows={2} maxRows={4} id='keterangan' /> */}
                          <TextField id='keterangan' fullWidth type='text' placeholder='' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel htmlFor='kodeManifest' sx={{ mb: 2, fontSize: '.85rem' }}>
                            Kode Manifest
                          </InputLabel>
                          <TextField id='kodeManifest' fullWidth type='text' placeholder='-' />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                          {/* <Button variant='outlined' size='small' color='warning' onClick={() => {}} sx={{ mr: 2 }}>
                            Reset
                          </Button> */}
                          <Button variant='outlined' size='small' color='error' onClick={() => remove(index)}>
                            Hapus
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant='outlined'
                  onClick={() =>
                    append({
                      perlakuan: '',
                      saldo: 0,
                      bulan1: 0,
                      bulan2: 0,
                      bulan3: 0,
                      keterangan: '',
                      kodeManifest: ''
                    })
                  }
                >
                  Tambah Perlakuan
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

CreateLimbahB3Page.acl = {
  subject: '/pelaporan/limbah-b3/create'
}

export default CreateLimbahB3Page
