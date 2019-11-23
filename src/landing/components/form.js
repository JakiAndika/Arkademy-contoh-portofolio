import React, { Component } from "react"

class Form extends Component {
    render() {
        return (
            <div class="flex-form">
                <div class="flex-parent-input-form">
                    <div class="flex-input-form" >
                        <input type="text" class="input-form"
                            placeholder="Masukan email kamu" />
                    </div>
                </div>
                <div class="flex-button-form">
                    <a href="" class="button-form">
                        AMBIL AKSES
                    </a>
                </div>
            </div>
        )
    }
}

export default Form;