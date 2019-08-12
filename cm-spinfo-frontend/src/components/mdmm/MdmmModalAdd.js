import React, { useState } from 'react'
// import moment from 'moment'

import './MdmmModal.css'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    }
  };
};

export const MdmmAdd = (props) => {

  // TODO: 日付が正しく表示されない
  // const { value:mdIdmdmm, bind:bindMdIdmdmm, reset:resetMdIdmdmm } = useInput(props.mdmm.md_idmdmm)
  const { value:mdCdcstm, bind:bindMdCdcstm, reset:resetMdCdcstm } = useInput('44444444')
  // const { value:mdNommrb, bind:bindMdNommrb, reset:resetMdNommrb } = useInput(props.mdmm.md_nommrb)
  const { value:mdNmmmbr, bind:bindMdNmmmbr, reset:resetMdNmmmbr } = useInput('テスト')
  const { value:mdTxmdmm, bind:bindMdTxmdmm, reset:resetMdTxmdmm } = useInput('登録のテスト')
  const { value:mdFganch, bind:bindMdFganch, reset:resetMdFganch } = useInput('7')
  const { value:mdClmdmm, bind:bindMdClmdmm, reset:resetMdClmdmm } = useInput('Blue')
  const { value:mdCcdate, bind:bindMdCcdate, reset:resetMdCcdate } = useInput('2019/08/08')
  const { value:mdCcadip, bind:bindMdCcadip, reset:resetMdCcadip } = useInput('2019/08/08')
  const { value:mdCcmodu, bind:bindMdCcmodu, reset:resetMdCcmodu } = useInput('2019/08/08')
  // const { value:mdCreateAt, bind:bindCreateAt, reset:resetCreatedAt } = useInput(moment(props.mdmm.createAt).format('YYYY/MM/DD'))
  // const { value:mdUpdateAt, bind:bindUpdateAt, reset:resetUpdatedAt } = useInput(moment(props.mdmm.updateAt).format('YYYY/MM/DD'))

  const handleSubmit = (evt) => {
      evt.preventDefault();
      // alert(`Submitting Name ${mdIdmdmm} ${mdCdcstm} ${mdNommrb} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu} ${mdCreateAt} ${mdUpdateAt}`)
      alert(`Submitting Name ${mdCdcstm} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu}`)

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
    })

      // resetMdIdmdmm()
      resetMdCdcstm()
      // resetMdNommrb()
      resetMdNmmmbr()
      resetMdTxmdmm()
      resetMdFganch()
      resetMdClmdmm()
      resetMdCcdate()
      resetMdCcadip()
      resetMdCcmodu()
      // resetCreatedAt()
      // resetUpdatedAt()
  }
  return (
    // TODO: CSSちゃんと当てる
    // TODO: 更新前に確認メッセージ
    // TODO: 更新後に閉じる
    <div className="mdmmModal-formContainer">
      <div className="mdmmModal-form-close">
        {props.children}
      </div>
      <form className="mdmmModal-form-body" onSubmit={handleSubmit}>
        <div className="mdmmModal-form-data">
          {/* <label className="mdmmModal-form-label">
            md_idmdmm:
            <input className="mdmmModal-form-input" type="text" {...bindMdIdmdmm} />
          </label> */}
          <label className="mdmmModal-form-label">
            md_cdcstm:
            <input className="mdmmModal-form-input" type="text" {...bindMdCdcstm} />
          </label>
          {/* <label className="mdmmModal-form-label">
            md_nommrb:
            <input className="mdmmModal-form-input" type="text" {...bindMdNommrb} />
          </label> */}
          <label className="mdmmModal-form-label">
            md_nmmmbr:
            <input className="mdmmModal-form-input" type="text" {...bindMdNmmmbr} />
          </label>

          <label className="mdmmModal-form-label">
            md_txmdmm:
            <input className="mdmmModal-form-input" type="text" {...bindMdTxmdmm} />
          </label>

          <label className="mdmmModal-form-label">
            md_fganch:
            <input className="mdmmModal-form-input" type="text" {...bindMdFganch} />
          </label>

          <label className="mdmmModal-form-label">
            md_clmdmm:
            <input className="mdmmModal-form-input" type="text" {...bindMdClmdmm} />
          </label>

          <label className="mdmmModal-form-label">
            md_ccdate:
            <input className="mdmmModal-form-input" type="text" {...bindMdCcdate} />
          </label>

          <label className="mdmmModal-form-label">
            md_ccadip:
            <input className="mdmmModal-form-input" type="text" {...bindMdCcadip} />
          </label>

          <label className="mdmmModal-form-label">
            md_ccmodu:
            <input className="mdmmModal-form-input" type="text" {...bindMdCcmodu} />
          </label>

          {/* <label className="mdmmModal-form-label">
            createAt:
            <input className="mdmmModal-form-input" type="text" {...bindCreateAt} />
          </label>

          <label className="mdmmModal-form-label">
            updateAt:
            <input className="mdmmModal-form-input" type="text" {...bindUpdateAt} />
          </label> */}

        </div>
        {/* TODO: 更新後にモーダルを閉じる */}
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
