import React, { useState } from 'react'
import moment from 'moment'

import './MdmmModal.css'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    // reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    }
  };
};

export const MdmmEdit = (props) => {

  const { value:mdIdmdmm, bind:bindMdIdmdmm } = useInput(props.mdmm.md_idmdmm)
  const { value:mdCdcstm, bind:bindMdCdcstm } = useInput(props.mdmm.md_cdcstm)
  const { value:mdNommrb, bind:bindMdNommrb } = useInput(props.mdmm.md_nommrb)
  const { value:mdNmmmbr, bind:bindMdNmmmbr } = useInput(props.mdmm.md_nmmmbr)
  const { value:mdTxmdmm, bind:bindMdTxmdmm } = useInput(props.mdmm.md_txmdmm)
  const { value:mdFganch, bind:bindMdFganch } = useInput(props.mdmm.md_fganch)
  const { value:mdClmdmm, bind:bindMdClmdmm } = useInput(props.mdmm.md_clmdmm)
  // const { value:mdCcdate, bind:bindMdCcdate, reset:resetMdCcdate } = useInput(moment(props.mdmm.md_ccdate).format('YYYY/MM/DD'))
  const { value:mdCcadip, bind:bindMdCcadip } = useInput(props.mdmm.md_ccadip)
  const { value:mdCcmodu, bind:bindMdCcmodu } = useInput(props.mdmm.md_ccmodu)
  // const { value:mdCreatedAt, bind:bindCreatedAt, reset:resetCreatedAt } = useInput(moment(props.mdmm.createdAt).format('YYYY/MM/DD'))
  // const { value:mdUpdatedAt, bind:bindUpdatedAt, reset:resetUpdatedAt } = useInput(moment(props.mdmm.updatedAt).format('YYYY/MM/DD'))

  const handleSubmit = (evt) => {
      evt.preventDefault();
      // alert(`Submitting Name ${mdIdmdmm} ${mdCdcstm} ${mdNommrb} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu} ${mdCreatedAt} ${mdUpdatedAt}`)
      props.mdmmEdit({cdcstm:mdCdcstm, nommrb:mdNommrb,
        mdmm: {
          md_idmdmm: mdIdmdmm,
          md_cdcstm: mdCdcstm,
          md_nommrb: mdNommrb,
          md_nmmmbr: mdNmmmbr,
          md_txmdmm: mdTxmdmm,
          md_fganch: mdFganch,
          md_clmdmm: mdClmdmm,
          md_ccdate: moment().format("YYYY-MM-DD"),
          md_ccadip: mdCcadip,
          md_ccmodu: mdCcmodu,
          createdAt: moment(props.mdmm.createdAt).format("YYYY-MM-DD"),
          updatedAt: moment().format("YYYY-MM-DD")
        }
      }) && props.handleCloseModal()
      // resetMdIdmdmm()
      // resetMdCdcstm()
      // resetMdNommrb()
      // resetMdNmmmbr()
      // resetMdTxmdmm()
      // resetMdFganch()
      // resetMdClmdmm()
      // // resetMdCcdate()
      // resetMdCcadip()
      // resetMdCcmodu()
      // // resetCreatedAt()
      // // resetUpdatedAt()
  }
  return (
    <div className="mdmmModal-formContainer">
      <div className="mdmmModal-form-close">
        {props.children}
      </div>
      <form className="mdmmModal-form" onSubmit={handleSubmit}>
        <div className="mdmmModal-form-data">
          <div>
            <label className="mdmmModal-form-label"> md_idmdmm: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdIdmdmm} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_cdcstm: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdCdcstm} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_nommrb: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdNommrb} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_nmmmbr: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdNmmmbr} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_txmdmm: </label>
            <textarea className="mdmmModal-form-input" type="text" {...bindMdTxmdmm} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_fganch: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdFganch} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_clmdmm: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdClmdmm} />
          </div>
          {/* <div>
            <label className="mdmmModal-form-label"> md_ccdate: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdCcdate} />
          </div> */}
          <div>
            <label className="mdmmModal-form-label"> md_ccadip: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdCcadip} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_ccmodu: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdCcmodu} />
          </div>
          {/* <div>
            <label className="mdmmModal-form-label"> createdAt: </label>
            <input className="mdmmModal-form-input" type="text" {...bindCreatedAt} />
          </div> */}
          {/* <div>
            <label className="mdmmModal-form-label"> updatedAt: </label>
            <input className="mdmmModal-form-input" type="text" {...bindUpdatedAt} />
          </div> */}
        </div>

        <div className="mdmmModal-form-footer">
          <div className="mdmmModal-form-submit">
            <input className="mdmmModal-form-submitButton" type="submit" value="更新する" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default MdmmEdit
