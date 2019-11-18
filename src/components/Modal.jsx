import Modal from 'react-modal';

import * as Colour from '../config/colours'
import * as Style from '../config/style'

Modal.defaultStyles = {
  ...Modal.defaultStyles,
  overlay: {
    ...Modal.defaultStyles.overlay,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: Style.PADDING_LARGE,
  },
  content: {
    ...Modal.defaultStyles.content,
    borderRadius: Style.BORDER_RADIUS,
    border: `2px solid ${Colour.BORDER}`,
    padding: Style.PADDING_LARGE,
    backgroundColor: Colour.WHITE,
    width: 'fit-content',
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default Modal
