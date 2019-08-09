import React, { useState } from 'react'
import moment from 'moment'

import './MdmmEdit.css'

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


// 13   form: {
//   14   "md_idmdmm": "",
//   15   // "md_cdcstm": casual.integer(from = 20900001, to = 20999999) ,
//   16   "md_cdcstm": 33333333,
//   17   "md_nommrb": casual.integer(from = 1, to = 9),
//   18   "md_nmmmbr": casual.random_element(['問い合わせ', '要望', 'その他メモ']) ,
//   19   "md_txmdmm": casual.random_element(['セミナーメモ', '大会メモ', '物販メモ']) ,
//   20   "md_fganch": casual.integer(from = 1, to = 9),
//   21   "md_clmdmm": casual.random_element(['Red', 'Blue', 'Green']) ,
//   22   "md_ccdate": moment().format("YYYY-MM-DD"),
//   23   "md_ccadip": "127.0.0.1",
//   24   "md_ccmodu": "post-test",
//   25   //"createdAt": 2019-04-24,
//   26   //"createdAt": casual.date(format = 'YYYY-MM-DD'),
//   27   "createdAt": moment().format("YYYY-MM-DD"),
//   28   "updatedAt": moment().format("YYYY-MM-DD")
//   29   //"updatedAt": ""
//   30   }

export const MdmmEdit = (props) => {

  // 更新日付	メモ連番	メモ分類	内容	編集	削除
  console.log('here!!!!!!!!!!')
  console.log(props.mdmm)

  // TODO: 日付が正しく表示されない
  const { value:mdIdmdmm, bind:bindMdIdmdmm, reset:resetMdIdmdmm } = useInput(props.mdmm.md_idmdmm)
  const { value:mdCdcstm, bind:bindMdCdcstm, reset:resetMdCdcstm } = useInput(props.mdmm.md_cdcstm)
  const { value:mdNommrb, bind:bindMdNommrb, reset:resetMdNommrb } = useInput(props.mdmm.md_nommrb)
  const { value:mdNmmmbr, bind:bindMdNmmmbr, reset:resetMdNmmmbr } = useInput(props.mdmm.md_nmmmbr)
  const { value:mdTxmdmm, bind:bindMdTxmdmm, reset:resetMdTxmdmm } = useInput(props.mdmm.md_txmdmm)
  const { value:mdFganch, bind:bindMdFganch, reset:resetMdFganch } = useInput(props.mdmm.md_fganch)
  const { value:mdClmdmm, bind:bindMdClmdmm, reset:resetMdClmdmm } = useInput(props.mdmm.md_clmdmm)
  const { value:mdCcdate, bind:bindMdCcdate, reset:resetMdCcdate } = useInput(moment(props.mdmm.md_ccdate).format('YYYY/MM/DD'))
  const { value:mdCcadip, bind:bindMdCcadip, reset:resetMdCcadip } = useInput(props.mdmm.md_ccadip)
  const { value:mdCcmodu, bind:bindMdCcmodu, reset:resetMdCcmodu } = useInput(props.mdmm.md_ccmodu)
  const { value:mdCreateAt, bind:bindCreateAt, reset:resetCreatedAt } = useInput(moment(props.mdmm.createAt).format('YYYY/MM/DD'))
  const { value:mdUpdateAt, bind:bindUpdateAt, reset:resetUpdatedAt } = useInput(moment(props.mdmm.updateAt).format('YYYY/MM/DD'))

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${mdIdmdmm} ${mdCdcstm} ${mdNommrb} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu} ${mdCreateAt} ${mdUpdateAt}`)
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
          createdAt: moment().format("YYYY-MM-DD"),
          updatedAt: moment().format("YYYY-MM-DD")
        }
      })
      resetMdIdmdmm()
      resetMdCdcstm()
      resetMdNommrb()
      resetMdNmmmbr()
      resetMdTxmdmm()
      resetMdFganch()
      resetMdClmdmm()
      resetMdCcdate()
      resetMdCcadip()
      resetMdCcmodu()
      resetCreatedAt()
      resetUpdatedAt()
  }
  return (
    // TODO: CSSちゃんと当てる
    // TODO: 更新前に確認メッセージ
    // TODO: 更新後に閉じる
    <div className="mdmmEdit-formContainer">
      <div className="mdmmEdit-form-close">
        {props.children}
      </div>
      <div className="mdmmEdit-form-header">
        編集画面
      </div>
      <form className="mdmmEdit-form" onSubmit={handleSubmit}>
        <div className="mdmmEdit-form-data">
          {/* 更新日付	メモ連番	メモ分類	内容	編集	削除 */}
          <label className="mdmmEdit-form-label">
            md_idmdmm:
            <input className="mdmmEdit-form-input" type="text" {...bindMdIdmdmm} />
          </label>
          <label className="mdmmEdit-form-label">
            md_cdcstm:
            <input className="mdmmEdit-form-input" type="text" {...bindMdCdcstm} />
          </label>
          <label className="mdmmEdit-form-label">
            md_nommrb:
            <input className="mdmmEdit-form-input" type="text" {...bindMdNommrb} />
          </label>
          <label className="mdmmEdit-form-label">
            md_nmmmbr:
            <input className="mdmmEdit-form-input" type="text" {...bindMdNmmmbr} />
          </label>



          <label className="mdmmEdit-form-label">
            md_txmdmm:
            <input className="mdmmEdit-form-input" type="text" {...bindMdTxmdmm} />
          </label>

          <label className="mdmmEdit-form-label">
            md_fganch:
            <input className="mdmmEdit-form-input" type="text" {...bindMdFganch} />
          </label>

          <label className="mdmmEdit-form-label">
            md_clmdmm:
            <input className="mdmmEdit-form-input" type="text" {...bindMdClmdmm} />
          </label>

          <label className="mdmmEdit-form-label">
            md_ccdate:
            <input className="mdmmEdit-form-input" type="text" {...bindMdCcdate} />
          </label>

          <label className="mdmmEdit-form-label">
            md_ccadip:
            <input className="mdmmEdit-form-input" type="text" {...bindMdCcadip} />
          </label>

          <label className="mdmmEdit-form-label">
            md_ccmodu:
            <input className="mdmmEdit-form-input" type="text" {...bindMdCcmodu} />
          </label>

          <label className="mdmmEdit-form-label">
            createAt:
            <input className="mdmmEdit-form-input" type="text" {...bindCreateAt} />
          </label>

          <label className="mdmmEdit-form-label">
            updateAt:
            <input className="mdmmEdit-form-input" type="text" {...bindUpdateAt} />
          </label>


        </div>
        {/* TODO: 更新後にモーダルを閉じる */}
        <div className="mdmmEdit-form-submit">
          <input className="mdmmEdit-form-submit" type="submit" value="更新する" />
        </div>
      </form>
    </div>
  )
}

export default MdmmEdit
