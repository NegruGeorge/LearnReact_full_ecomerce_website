import React from 'react';
import './custom-button.styles.scss';
const CustomButton = ({children,isGoogleSignIn,inverted, ...otherPorps})=>(

<button className={`${inverted ? 'inverted' : ''}   ${isGoogleSignIn ? 'google-sign-in' : '' }  custom-button `}
  {...otherPorps} 
 
 >
    {children}
</button>

)

export default CustomButton;