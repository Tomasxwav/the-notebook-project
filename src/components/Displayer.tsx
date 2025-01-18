import Alert from '@mui/material/Alert'
import { styled } from '@mui/system'

const FixedAlert = styled(Alert)({
  position: 'fixed',
  transform: 'scale(70%)',
})

export function Displayer() {
  console.log('Se Carga Displayer')

  return (
    <>
      {process.env.NODE_ENV === 'development' && (
        <FixedAlert
          variant="filled"
          style={{ bottom: '0.3rem', left: '-1rem' }}
          severity="info"
        >
          Dev Mode
        </FixedAlert>
      )}
    </>
  )
}
