import * as React from "react";
import type {Option} from "vtm-baires-next-utils";
import {ReactElement} from "react";

export type ErrorFallbackProps = {
    error: Error,
    retry: () => void
};

export type Props = {
    checkSession: () => Promise<boolean>;
    onRetry?: Option<() => void>;
    onUnauthorized: () => void;
    children: any;
    fallback?: Option<(params: ErrorFallbackProps) => ReactElement>;
}

export type State = {
    hasError: boolean;
    errorInfo?: Option<any>;
    error?: Option<Error>;
    fetchKey: number;
}

const FallbackScreen = (errorInfo: any) =>
    <div className="card my-5">
        <div className="card-header">
            <p>
                There was an error in loading this page.{' '}
                <span
                    style={{ cursor: 'pointer', color: '#0077FF' }}
                    onClick={() => {
                        window.location.reload();
                    }}
                >
            Reload this page
          </span>{' '}
            </p>
        </div>
        <div className="card-body">
            <details className="error-details">
                <summary>Click for error details</summary>
                {errorInfo && errorInfo.componentStack.toString()}
            </details>
        </div>
    </div>;

export class ErrorBoundaryWithRetry extends React.Component<Props, State> {
    private checkSession: () => Promise<boolean>;

    constructor(props: Props) {
        super(props);

        this.checkSession = props.checkSession;
    }

    state: any = {
        hasError: false,
        error: null,
        errorInfo: null,
        fetchKey: 0};

    static getDerivedStateFromError(error: any): State {
        console.error("error at catcher level", error);
        return {
            hasError: error != null,
            error: error,
            fetchKey: 0
        };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error("error at component level", error);
        this.setState({
            errorInfo
        })
    }

    _retry: () => void = () => {
        if (this.props.onRetry) {
            this.props.onRetry();
            this.setState({
                error: null
            });
        }
    }

    render(): any {
        const {children, fallback} = this.props;
        const { error, errorInfo, hasError } = this.state;

        if (hasError && (error || errorInfo)) {
            console.error("There was an error in the app", error);
            console.error("Error info", errorInfo);

            this.checkSession()
                .then(m => {
                    console.debug("check Access response", m);
                })
                .catch(e => {
                    console.error("check Access error", e);
                    this.props.onUnauthorized();
                });

            if (typeof fallback === 'function') {
                return fallback({error, retry: this._retry});
            }

            return (<FallbackScreen errorInfo={errorInfo} />);
        }

        return children;
    }
}