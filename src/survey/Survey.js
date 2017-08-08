import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import './Survey.css';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import Categories from './Categories';
import { connect } from 'react-redux';
import * as Actions from '../redux/Actions';
import NumberInput from 'material-ui-number-input';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {red500} from 'material-ui/styles/colors';
import * as API from '../Api';

class Survey extends React.Component {

  componentWillMount() {
    this.props.clearValues();
    console.log("Just cleared the values for the survey...");
    console.log("Populating Categories");
    API.getGenres();
  }

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  endSurvey = () => {
    API.getResults();
    this.setState({
      finished: true
    });
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <p>How old are you?</p>
            <input type="number" onChange={
              (e) => {
                console.log(typeof(e.target.value/1));
                this.props.setAge(e.target.value/1);
              }
            }/>
            {/* <NumberInput id="age" onChange={
              (e) => {

                this.props.setAge(e.target.value);
              }
            }/> */}
          </div>
        )
      case 1:
        return (
          <div>
            <p>How much do you like a good story?</p>
            <Slider step={0.10} value={this.props.story} onChange={
              (e, value) => {
                this.props.setStory(value);
              }
            }/>
          </div>
        )
      case 2:
        return (
          <div>
            <p>Select the categories that you care about...</p>
            <Categories />
          </div>
        )
      case 3:
        return (
          <div>
            <p>Ready for the results?</p>
          </div>
        )
      default:
        return <p>You're a long way from home sonny jim!</p>;
    }
  }

  renderRaisedButton = () => {
    if (this.state.stepIndex === 2 && (this.props.age === 0 || this.props.selectedCat.length === 0)) {
      //Not finished yet
      return (
        <RaisedButton
          label='Finish'
          disabled={true}
          primary={true}
        />)
    } else if (this.state.stepIndex === 2) {
      return (
        <RaisedButton
          label='Finish'
          primary={true}
          onTouchTap={this.endSurvey}
        />)
    } else {
      return (
        <RaisedButton
          label='Next'
          primary={true}
          onTouchTap={this.handleNext}
        />)
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    return (
      <div className="Survey center" >
        <Stepper activeStep={stepIndex}>
          <Step>
            {(stepIndex > 0 && this.props.age === 0) ? (
                <StepLabel icon={<WarningIcon color={red500} />} style={{color: red500}}>Age</StepLabel>
              ) : (
                <StepLabel >Age</StepLabel>
            )}
          </Step>
          <Step>
            <StepLabel>Story</StepLabel>
          </Step>
          <Step>
            <StepLabel >Categories</StepLabel>
          </Step>
        </Stepper>
        <div className="component">
          {finished ? (
            <p>
              <Link to="showcase" onClick={(event) => {
                this.setState({stepIndex: 0, finished: false});
              }}>Click here</Link>
              to see results.
            </p>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                {this.renderRaisedButton()}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    age: store.age,
    story: store.story,
    selectedCat: store.selectedCat
  };
};

const mapDispatchToProps = {
  clearValues: Actions.clearValues,
  setAge: Actions.setAge,
  setStory: Actions.setStory,
  setCategories: Actions.setCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
