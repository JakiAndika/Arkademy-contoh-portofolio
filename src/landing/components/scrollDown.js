import React, { Component } from "react"

class ScrollDown extends Component {
    render() {
        return (
            <div class="flex-scroll">
                <div>
                    <small>
                        Menggulir kebawah
                        </small>
                </div>
                <div class="flex-arrow-bottom">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default ScrollDown;