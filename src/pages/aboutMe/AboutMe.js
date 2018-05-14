import React, { Component } from 'react';
import './AboutMe.css';
import {test} from '../../apis/api'
class AboutMe extends Component {
    componentWillMount () {
        let params = JSON.stringify({"EduLvID":3})
        test(params).then((res) => {
            console.log(res)
        })
    }
    render () {
        return (
            <div>AboutMe</div>
        )
    }
}
export default AboutMe;