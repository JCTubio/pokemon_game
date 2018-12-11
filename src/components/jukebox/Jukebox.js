import React, { Fragment } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMusic,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd'
import './jukebox.css'
import Sound from 'react-sound'

library.add(faMusic)
library.add(faVolumeMute)
library.add(faVolumeUp)

export default function Jukebox({
  currentSong,
  playbackStatus,
  volume,
  onMuteToggled,
}) {
  return (
    <Fragment>
      <Sound
        url={currentSong}
        playStatus={playbackStatus}
        volume={volume}
        autoLoad={false}
        loop={true}
      />
      <Button
        type="primary"
        shape="circle"
        size="large"
        onClick={onMuteToggled}
        className="jukeboxToggleButton"
      >
        <FontAwesomeIcon icon={volume === 20 ? 'volume-up' : 'volume-mute'} />
      </Button>
    </Fragment>
  )
}
