import styles from '../stylesheets/base.module.sass'
import styles2 from '../stylesheets/base2.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'
import MediaQuery from "react-responsive";
import device, { size } from "../../../modules/mediaQuery";

export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  errorMsg,
  button_title,
  footer_content
}) {
  return (
    <div>
    <MediaQuery query={device.min.tablet}>
    <div className={styles2.outbox} >    
  <div className={styles2.title_style}>{title}</div>
  <div className={styles2.border_style}></div>
  {
    inputs.map(({ name, validations }) =>
      <FormInput
        key={name}
        name={name}
        validations={validations}
        errorMessage={errorMsg[name].errorMsg}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
      />
    )
  }
  <Button button_title={button_title} onClick={onSubmit} />
  <Footer content={footer_content} />
</div> 
  
  </MediaQuery>
  <MediaQuery query={device.max.tablet}>  

  <div className={styles.outbox}>
  <div className={styles.title_style}>{title}</div>
  <div className={styles.border_style}></div>
  {
    inputs.map(({ name, validations }) =>
      <FormInput
        key={name}
        name={name}
        validations={validations}
        errorMessage={errorMsg[name].errorMsg}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
      />
    )
  }
  <Button button_title={button_title} onClick={onSubmit} />
  <Footer content={footer_content} />
</div>  </MediaQuery>
    </div>
  )
}


