import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

import './MdmmModal.css'
// import './demo.css'


export const MyForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleReset,
    dirty,
  } = props;
  return (
    <div className="mdmmModal-formContainer">

      <Form className="mdmmModal-form">
        <div className="mdmmModal-form-data">
          <div>
            <label htmlFor="email" className="mdmmModal-form-label"> Email </label>
            <Field name="email" type="text"
              placeholder="Enter your email" autoComplete="off"
              className={ errors.email && touched.email ? 'error' : '' }
            />
            { touched.email && errors.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="mdmmModal-form-label"> Password </label>
            <Field name="password" type="text"
              placeholder="Enter your password" autoComplete="off"
              className={ errors.password && touched.password ? 'error' : '' }
            />
            { touched.password && errors.password && (
              <p className="input-feedback">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="md_cdcstm" className="mdmmModal-form-label"> md_cdcstm </label>
            <Field name="md_cdcstm" type="text"
              placeholder="Enter md_cdcstm" autoComplete="off"
              className={ errors.md_cdcstm && touched.md_cdcstm ? 'error' : '' }
            />
            { touched.md_cdcstm && errors.md_cdcstm && (
              <p className="input-feedback">{errors.md_cdcstm}</p>
            )}
          </div>

          <div>
            <label htmlFor="md_nmmmbr" className="mdmmModal-form-label"> md_nmmmbr </label>
            <Field name="md_nmmmbr" type="text"
              placeholder="Enter md_nmmmbr" autoComplete="off"
              className={ errors.md_nmmmbr && touched.md_nmmmbr ? 'error' : '' }
            />
            { touched.md_nmmmbr && errors.md_nmmmbr && (
              <p className="input-feedback">{errors.md_nmmmbr}</p>
            )}
          </div>

          <div>
            <label htmlFor="md_txmdmm" className="mdmmModal-form-label"> md_txmdmm </label>
            <Field name="md_txmdmm" component="textarea" rows="2"
              placeholder="Enter md_txmdmm" autoComplete="off"
              className={ errors.md_txmdmm && touched.md_txmdmm ? 'error' : '' }
            />
            { touched.md_txmdmm && errors.md_txmdmm && (
              <p className="input-feedback">{errors.md_txmdmm}</p>
            )}
          </div>

          <div>
            <label htmlFor="md_fganch" className="mdmmModal-form-label"> md_fganch </label>
            <Field name="md_fganch" type="text"
              placeholder="Enter md_fganch" autoComplete="off"
              className={ errors.md_fganch && touched.md_fganch ? 'error' : '' }
            />
            { touched.md_fganch && errors.md_fganch && (
              <p className="input-feedback">{errors.md_fganch}</p>
            )}
          </div>

          <div>
            <label htmlFor="md_clmdmm" className="mdmmModal-form-label"> md_clmdmm </label>
            <Field name="md_clmdmm" type="text"
              placeholder="Enter md_clmdmm" autoComplete="off"
              className={ errors.md_clmdmm && touched.md_clmdmm ? 'error' : '' }
            />
            { touched.md_clmdmm && errors.md_clmdmm && (
              <p className="input-feedback">{errors.md_clmdmm}</p>
            )}
          </div>


          <div>
            <label>
              <Field type="checkbox" name="newsletter" checked={values.newsletter} />
              Join our newsletter
            </label>
          </div>
          <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </Field>

        </div>

          <button type="button" className="outline"
            onClick={handleReset} disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}> Submit </button>

        <div className="mdmmModal-form-footer">
          <div className="mdmmModal-form-submit">
            {/* <input className="mdmmModal-form-submitButton" type="submit" disabled={isSubmitting} value="登録する" /> */}
            <button className="mdmmModal-form-submitButton" type="submit" disabled={isSubmitting}> 登録する </button>
          </div>
        </div>

      </Form>
    </div>
  );
};

const MdmmAdd = withFormik({
  // mapPropsToValues: () => ({ email: '', password: '', newsletter: true }),

  mapPropsToValues({ mdmmAdd, handleCloseModal, email, password, md_cdcstm, md_nmmmbr, md_txmdmm, md_fganch, md_clmdmm, newsletter, plan }) {
    return {
      email: email || 'test@test.test',
      password: password || 'aaaaaaaa',
      md_cdcstm: md_cdcstm || '22222222',
      md_nmmmbr: md_nmmmbr || 'test',
      md_txmdmm: md_txmdmm || 'test data',
      md_fganch: md_fganch || '1',
      md_clmdmm: md_clmdmm || 'blue',
      newsletter: newsletter || true ,
      plan: plan || 'premium' ,

      mdmmAdd: mdmmAdd,
      handleCloseModal: handleCloseModal,
    }
  },


  // Custom sync validation
  // validate: values => {
  //   let errors = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
  //       values.email
  //     )
  //   ) {
  //     errors.email = 'Invalid email address';
  //   }
  //   return errors;
  // },
  validationSchema: Yup.object().shape({
    email: Yup
      .string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup
      .string()
      .min(8, 'Password must be 8 characters or longer')
      .required('Enter a password'),
    md_cdcstm: Yup
      .string()
      // .matches(/^[0-9]{8}/,('md_cdcstm is 8-digit numbar'))
      .matches(/^2[0-9]{7}/,('8-digit numbar starting from 2 [2XXXXXXX]'))
      .length(8,'md_cdcstm is 8 characters')
      .required('Enter a md_cdcstm'),
    md_nmmmbr: Yup
      .string()
      .required('Enter a md_nmmmbr'),
    md_txmdmm: Yup
      .string()
      .required('Enter a md_txmdmm'),
    md_fganch: Yup
      .string()
      .required('Enter a md_fganch'),
    md_clmdmm: Yup
      .string()
      .required('Enter a md_clmdmm'),
}),
  handleSubmit: ( values, { setSubmitting, resetForm, setErrors }) => {
    setTimeout(() => {
      if(values.email === 'test@test.test') {
        setErrors({ email: 'That email is already taken'})
      } else {
        values.mdmmAdd({
          "md_idmdmm": "0",
          "md_cdcstm": values.md_cdcstm,
          "md_nommrb": "0",
          "md_nmmmbr": values.md_nmmmbr,
          "md_txmdmm": values.md_txmdmm,
          "md_fganch": values.md_fganch,
          "md_clmdmm": values.md_clmdmm,
          // "md_ccadip": mdCcadip,
          // "md_ccmodu": mdCcmodu,
          // "createdAt": "2019-05-24",
          // "updatedAt": "2019-05-24",
          createdAt: moment().format("YYYY-MM-DD"),
          updatedAt: moment().format("YYYY-MM-DD"),
        }) && values.handleCloseModal()
        resetForm()
      }
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 2000);
  },

  displayName: 'BasicForm', // helps with React DevTools
})(MyForm);

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

export const MdmmAdd_test = (props) => {

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

    this.props.mdmmAdd({
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
    }) && this.props.handleCloseModal()


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
      <Form className="mdmmModal-form" onSubmit={handleSubmit}>
        <div className="mdmmModal-form-data">
          {/* <label className="mdmmModal-form-label">
            md_idmdmm:
            <input className="mdmmModal-form-input" type="text" {...bindMdIdmdmm} />
          </label> */}
          <div>
            <label className="mdmmModal-form-label"> md_cdcstm: </label>
            <Field className="mdmmModal-form-input" type="text" {...bindMdCdcstm} />
          </div>
          {/* <label className="mdmmModal-form-label">
            md_nommrb:
            <input className="mdmmModal-form-input" type="text" {...bindMdNommrb} />
          </label> */}
          <div>
            <label className="mdmmModal-form-label"> md_nmmmbr: </label>
            <Field className="mdmmModal-form-input" type="text" {...bindMdNmmmbr} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_txmdmm: </label>
            <textarea className="mdmmModal-form-input" type="text" {...bindMdTxmdmm} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_fganch: </label>
            <Field className="mdmmModal-form-input" type="text" {...bindMdFganch} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_clmdmm: </label>
            <Field className="mdmmModal-form-input" type="text" {...bindMdClmdmm} />
          </div>
          {/* <div>
            <label className="mdmmModal-form-label"> md_ccdate: </label>
            <input className="mdmmModal-form-input" type="text" {...bindMdCcdate} />
          </div> */}
          <div>
            <label className="mdmmModal-form-label"> md_ccadip: </label>
            <Field className="mdmmModal-form-input" type="text" {...bindMdCcadip} />
          </div>
          <div>
            <label className="mdmmModal-form-label"> md_ccmodu: </label>
            <Field className="mdmmModal-form-input" type="text" {...bindMdCcmodu} />
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
      </Form>
    </div>
  )
}

export default MdmmAdd
