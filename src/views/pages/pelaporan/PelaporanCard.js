// ** MUI Imports
import { Card, CardContent, CardHeader } from '@mui/material'

const PelaporanCard = props => {
  const { id, sx, code, title, children, className } = props

  return (
    <Card
      className={className}
      sx={{ '& .MuiCardHeader-action': { lineHeight: 0.8 }, ...sx }}
      id={id || `card-snippet--${title.toLowerCase().replace(/ /g, '-')}`}
    >
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default PelaporanCard
