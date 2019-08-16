import React, { useState } from 'react'
// import moment from 'moment'

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

export const MdmmAdd = (props) => {

  // const { value:mdIdmdmm, bind:bindMdIdmdmm, reset:resetMdIdmdmm } = useInput(props.mdmm.md_idmdmm)
  const { value:mdCdcstm, bind:bindMdCdcstm } = useInput('44444444')
  // const { value:mdNommrb, bind:bindMdNommrb, reset:resetMdNommrb } = useInput(props.mdmm.md_nommrb)
  const { value:mdNmmmbr, bind:bindMdNmmmbr } = useInput('テスト')
  const { value:mdTxmdmm, bind:bindMdTxmdmm } = useInput('登録のテスト')
  const { value:mdFganch, bind:bindMdFganch } = useInput('7')
  const { value:mdClmdmm, bind:bindMdClmdmm } = useInput('Blue')
  // const { value:mdCcdate, bind:bindMdCcdate, reset:resetMdCcdate } = useInput('2019/08/08')
  const { value:mdCcadip, bind:bindMdCcadip } = useInput('2019/08/08')
  const { value:mdCcmodu, bind:bindMdCcmodu } = useInput('2019/08/08')
  // const { value:mdCreatedAt, bind:bindCreatedAt, reset:resetCreatedAt } = useInput(moment(props.mdmm.createdAt).format('YYYY/MM/DD'))
  // const { value:mdUpdatedAt, bind:bindUpdatedAt, reset:resetUpdatedAt } = useInput(moment(props.mdmm.updatedAt).format('YYYY/MM/DD'))

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${mdIdmdmm} ${mdCdcstm} ${mdNommrb} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu} ${mdCreatedAt} ${mdUpdatedAt}`)
    // alert(`Submitting Name ${mdCdcstm} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu}`)

    props.mdmmAdd({
      "md_idmdmm": "0",
      "md_cdcstm": mdCdcstm,
      "md_nommrb": "0",
      "md_nmmmbr": mdNmmmbr,
      "md_txmdmm": mdTxmdmm,
      "md_fganch": mdFganch,
      "md_clmdmm": mdClmdmm,
      "md_ccadip": mdCcadip,
      "md_ccmodu": mdCcmodu,
      "createdAt": "2019-05-24",
      "updatedAt": "2019-05-24",
      // createdAt: moment().format("YYYY-MM-DD"),
      // updatedAt: moment().format("YYYY-MM-DD"),
    }) && props.handleCloseModal()


    // // resetMdIdmdmm()
    // resetMdCdcstm()
    // // resetMdNommrb()
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
      {/* <div className="mdmmModal-form-close"> */}
        {props.children}
      {/* </div> */}
      <form className="mdmmModal-form" onSubmit={handleSubmit}>
        <div className="mdmmModal-form-data">
          {/* <label className="mdmmModal-form-label">
            md_idmdmm:
            <input className="mdmmModal-form-input" type="text" {...bindMdIdmdmm} />
          </label> */}
          <div>
            <label className="mdmmModal-form-label"> md_cdcstm: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdCdcstm} />
          </div>
          {/* <label className="mdmmModal-form-label">
            md_nommrb:
            <input className="mdmmModal-form-input" type="text" {...bindMdNommrb} />
          </label> */}
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

          {/* <label className="mdmmModal-form-label">
            createdAt:
            <input className="mdmmModal-form-input" type="text" {...bindCreatedAt} />
          </label>

          <label className="mdmmModal-form-label">
            updatedAt:
            <input className="mdmmModal-form-input" type="text" {...bindUpdatedAt} />
          </label> */}

        </div>
        <div className="mdmmModal-form-footer">
          <div className="mdmmModal-form-submit">
            <input className="mdmmModal-form-submitButton" type="submit" value="登録する" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default MdmmAdd
