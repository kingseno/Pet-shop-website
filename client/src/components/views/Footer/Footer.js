import React from 'react'
import {Icon, Col, Row} from 'antd';
import './Footer.css';

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <Row gutter={[16, 16]}>
                    <Col lg={8} xs={24} className="footer_link">
                        <h5>Important links</h5>
                        <a className="footer_element" src="#">Search</a>
                        <a className="footer_element" src="#">About us</a>
                        <a className="footer_element" src="#">Contact us</a>
                    </Col>
                    <Col lg={8} xs={24} className="footer_guideline"> 
                        <h5>Guideline</h5>
                        <a className="footer_element" src="#">Ordering guide</a>
                        <a className="footer_element" src="#">Payment guide</a>
                    </Col>
                    <Col lg={8} xs={24} className="footer_policy">
                        <h5>Policy</h5>
                        <a className="footer_element" src="#">Support</a>
                        <a className="footer_element" src="#">Policy</a>
                    </Col>
                    
                </Row>
            </div>
           
            <div className="copy_right">
                <h4>&copy; Saga</h4>
            </div>
        </div>
    )
}

export default Footer
