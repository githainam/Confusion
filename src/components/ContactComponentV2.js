import React, { Component } from "react";
import {Breadcrumb,BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      TelNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        FirstName: false,
        LastName: false,
        TelNum: false,
        email: false
    }

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

    validate(FirstName, LastName, TelNum, email) {
        const errors = {
            FirstName: '',
            LastName: '',
            TelNum: '',
            email: ''
        };

        if (this.state.touched.FirstName && FirstName.length < 3)
        errors.FirstName = 'First Name should be >= 3 characters';
    else if (this.state.touched.FirstName && FirstName.length > 10)
        errors.FirstName = 'First Name should be <= 10 characters';

    if (this.state.touched.LastName && LastName.length < 3)
        errors.LastName = 'Last Name should be >= 3 characters';
    else if (this.state.touched.LastName && LastName.length > 10)
        errors.LastName = 'Last Name should be <= 10 characters';
        const reg = /^\d+$/;
        if (this.state.touched.TelNum && !reg.test(TelNum))
            errors.TelNum = 'Tel. Number should contain only numbers';
            if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }



  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    const errors = this.validate(this.state.FirstName, this.state.LastName, this.state.TelNum, this.state.email);
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary"href="tel:+85212345678">
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype
              </a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>

          <div className="row row-content">
            <div className="col-12">
              <h4>Send us your Feedback</h4>
            </div>
            <div className="col-12 col-md-9">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="FirstName" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Input type="text"id="FirstName" name="FirstName" placeholder="First Name" 
                    value={this.state.FirstName} 
                    valid={errors.FirstName === ''}
                    invalid={errors.FirstName !== ''}
                    onBlur={this.handleBlur('FirstName')}

                    onChange={this.handleInputChange}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="LastName" md={2}>
                    Last Name
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="LastName"
                      name="LastName"
                      placeholder="Last Name"
                      value={this.state.LastName}
                      valid={errors.LastName === ''}
                      invalid={errors.LastName !== ''}
                      onBlur={this.handleBlur('LastName')}

                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="TelNum" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={10}>
                    <Input
                      type="tel"
                      id="TelNum"
                      name="TelNum"
                      placeholder="Tel. number"
                      value={this.state.TelNum}
                      valid={errors.TelNum === ''}
                    invalid={errors.TelNum !== ''}
                    onBlur={this.handleBlur('TelNum')}

                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      valid={errors.email === ''}
                      invalid={errors.email !== ''}
                      onBlur={this.handleBlur('email')}

                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 6, offset: 2 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="agree"
                          checked={this.state.agree}
                          onChange={this.handleInputChange}
                        />{" "}
                        <strong>May we contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Input
                      type="select"
                      name="contactType"
                      value={this.state.contactType}
                      onChange={this.handleInputChange}
                    >
                      <option>Tel.</option>
                      <option>Email</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="message" md={2}>
                    Your Feedback
                  </Label>
                  <Col md={10}>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      rows="12"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    ></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
