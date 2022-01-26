import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Meeting Details" />
            <TextField
              placeholder="Enter Your Date And Time"
              label="Date and Time"
              onChange={handleChange('DateAndTime')}
              defaultValue={values.DateAndTime}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Floor Number"
              label="Floor Number"
              onChange={handleChange('FloorNo')}
              defaultValue={values.FloorNo}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter the Location"
              label="Location"
              onChange={handleChange('Location')}
              defaultValue={values.Location}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Organization Name"
              label="Name of Organization"
              onChange={handleChange('NameOfOrg')}
              defaultValue={values.NameOfOrg}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter The Purpose of the Meeting"
              label="Purpose"
              onChange={handleChange('Purpose')}
              defaultValue={values.Purpose}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter The MeetingAgenda"
              label="MeetingAgenda"
              onChange={handleChange('MeetingAgenda')}
              defaultValue={values.MeetingAgenda}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter The ResourcesAvailable of the Meeting"
              label="Resources Available: "
              onChange={handleChange('ResourcesAvailable')}
              defaultValue={values.ResourcesAvailable}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter The Requirements of the Meeting"
              label="Requirements"
              onChange={handleChange('Requirements')}
              defaultValue={values.Requirements}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            </Dialog>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;