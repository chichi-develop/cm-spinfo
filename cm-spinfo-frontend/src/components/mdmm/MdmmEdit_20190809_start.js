import React, { useState } from 'react'
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

export const MdmmEdit = (props) => {

  // 更新日付	メモ連番	メモ分類	内容	編集	削除

  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('')
  const { value:memo, bind:bindMemo, reset:resetMemo } = useInput('')

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${firstName} ${lastName} ${memo}`)
      resetFirstName()
      resetLastName()
      resetMemo()
  }
  console.log('here!!!!!!!!!!')
  console.log(props.mdmm)
  return (
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
            First Name:
            <input className="mdmmEdit-form-input" type="text" {...bindFirstName} />
          </label>
          <label className="mdmmEdit-form-label">
            Last Name:
            <input className="mdmmEdit-form-input" type="text" {...bindLastName} />
          </label>
          <label className="mdmmEdit-form-label">
            Memo:
            <input className="mdmmEdit-form-input" type="text" {...bindMemo} />
          </label>
        </div>
        <div className="mdmmEdit-form-submit">
          <input className="mdmmEdit-form-submit" type="submit" value="更新する" />
        </div>
      </form>
    </div>
  )
}

export default MdmmEdit
