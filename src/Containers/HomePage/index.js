import * as React from "react";
import "./style.css";
import { connect } from "react-redux";
import { doSubmit } from "./actions";
import { EuiGlobalToastList } from "@elastic/eui";
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {makeSelectToasts} from "./selectors";

const stateSelector = createStructuredSelector({
    toasts: makeSelectToasts(),
});
function HomePage({ onSubmit, state }) {

    const { toasts } = useSelector(stateSelector);
    return (
        <div className="App">
            <button id="BUTTON_1" onClick={() => onSubmit("parameter from button")}>
                SUBMIT TEST
            </button>
            <pre style={{ background: "lightblue", height: "300px" }}>
        current state: {JSON.stringify(state)}
      </pre>
            <EuiGlobalToastList
                toasts={toasts}
                dismissToast={() => {}}
                toastLifeTimeMs={100000}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return { state };
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: event => {
            dispatch(doSubmit(event));
        }
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(HomePage);
