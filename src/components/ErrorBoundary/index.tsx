import * as Sentry from '@sentry/browser';
import React, { Component, ReactChild, ReactChildren } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type ErrorBoundaryProps = {
  children: ReactChild | ReactChildren;
} & RouteComponentProps;

class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean }> {
  unsubscribe: () => void;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.unsubscribe = props.history?.listen(() => {
      this.setState({
        hasError: false,
      });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  static getDerivedStateFromError(error: any) {
    if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_SENTRY_RELEASE) {
      Sentry.captureException(error);
    }

    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <div>Что-то пошло не так...</div>;
    }

    return children;
  }
}

export default withRouter(ErrorBoundary);
