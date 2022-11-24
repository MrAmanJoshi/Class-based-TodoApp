import React, { Component, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

class Button extends Component<ButtonProps>{

  render(): React.ReactNode {
    const { className, ...rest } = this.props

    return (
      <button className={"bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-3 py-2 rounded-lg text-white font-semibold " + className} {...rest}></button>

    )
  }
}

export default Button;