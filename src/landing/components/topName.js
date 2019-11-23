import React, { Component } from "react"

class TopName extends Component {
    render() {
        return (
            < div class="flex-top-name" >
                <div class="top-name">
                    <a >
                        {this.props.name}
                    </a>
                </div>
            </div >
        )
    }
}

export default TopName;