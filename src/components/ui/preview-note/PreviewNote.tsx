/* import DeleteDialog from './MaterialUICustom/DeleteDialog' */
/* import AddTo from './MaterialUICustom/AddTo' */
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import { Delete } from 'lucide-react'
import './preview-note.css'

function PreviewNote() {
  return (
    <div className="np-sticky-note">
      <div className="np-sn-topbar">
        <div className="np-sn-fold" />
        <div className="np-sn-icon">
          <IconButton
            /* onClick={handleDialogOpen}  */ aria-label="addtofolder"
          >
            <Icon>add_circle</Icon>
          </IconButton>
          <IconButton /* onClick={handleClickOpen}  */ aria-label="delete">
            <Delete />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default PreviewNote
