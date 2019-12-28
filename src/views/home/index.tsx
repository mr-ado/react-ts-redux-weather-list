import React, { Fragment } from "react";
import { WeatherModel } from "../../models/Weather";
import { actionFetchWeathers } from "../../actions";
import { connect } from "react-redux";
import { AppState } from "../../reducers";

interface HomeViewProps {
  loadData: () => () => void;
  weathers: WeatherModel[];
  isLoading: boolean;
  errorMessage: string;
}

interface HomeViewState {}

class HomeView extends React.Component<HomeViewProps, HomeViewState> {
  componentDidMount() {
    if (!this.props.isLoading) {
      this.props.loadData();
    }
  }

  render() {
    return <Fragment>{this.renderWeathers()}</Fragment>;
  }

  renderWeathers() {
    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    } else if (this.props.errorMessage) {
      return <p>Error: {this.props.errorMessage}</p>;
    } else if (!this.props.isLoading) {
      // todo: render our components here
      return <p>success</p>;
    }
  }
}

const mapStateToProps = (state: AppState, ownProps: HomeViewProps) => {
  return {
    weathers: state.ui.list.weathers.map(
      weatherId => state.entities.weathers.byId[weatherId]
    ),
    isLoading: state.ui.list.isLoading,
    errorMessage: state.ui.list.errorMessage
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(actionFetchWeathers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
