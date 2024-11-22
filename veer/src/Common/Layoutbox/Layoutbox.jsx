
import React, { useContext } from 'react'
import './Layoutbox.scss'
import MyContext from '../Context/MyContext'
import Layoutdoc from '../LayoutDoc/Layoutdoc'
import LayoutDoc2 from '../Layout2/LayoutDoc2'


const Layoutbox = () => {

  const { setLayout, layout } = useContext(MyContext)
  return (


    <div className="lbox-main">

      <div className="lbox-content">

        <div className="lbox-left">

          <span style={{ color: layout === 'document' && "rgba(255, 0, 0, 0.292)" }} onClick={() => setLayout('document')}>Documents Required</span>
          <span  >Personal Details</span>
          <span  >Contact Details</span>
          <span   >Upload Required Documents </span>
          <span > Payment Information</span>

        </div>
        <div className="lbox-right">
          {
            layout === 'document' && <Layoutdoc />}
          {layout === 'stage1' && <LayoutDoc2 />}
          {layout === 'stage2' && <LayoutDoc2 />}
          {layout === 'stage3' && <LayoutDoc2 />}
          {layout === 'stage4' && <LayoutDoc2 />}

        </div>
      </div>

    </div>
  )
}

export default Layoutbox
