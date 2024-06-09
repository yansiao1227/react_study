import React, {Component} from 'react';
import "./index.css"
class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type='checkbox'/>
                </label>
                <span>
                    <span>finished0</span>/ all2
                </span>
                <button className="btn btn-danger">clean finished task</button>
            </div>
        );
    }
}

export default Footer;