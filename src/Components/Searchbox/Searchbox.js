import { Component } from 'react';
import './Searchbox.css';

class Searchbox extends Component {

    render() {
        const { onSearchChange, placeholder, className } = this.props;

        return (
            <div>
                <input 
            className={className}
            type='search'
            placeholder={placeholder}
            onChange={onSearchChange}
            />
            </div>
        )
    }
}

export default Searchbox;